// src/controllers/UserController.js
import { AppDataSource } from "../db_config/Connector"
import { User } from '../entities/User';

// Obtener todas las tareas
const getAllUsers = async (req, res) => {
    try {
        const users = await AppDataSource.manager.find(User)
        console.log("Tareas cargadas: ", users)
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las tareas.' });
    }
};

// Obtener una tarea por ID
const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await AppDataSource.manager.findOne(User, { where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: 'Tarea no encontrada.' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la tarea.' });
    }
};

// Crear una nueva tarea
const createUser = async (req, res) => {
    const { name, lastName, email, password } = req.body;
    try {
        const user = AppDataSource.manager.create(User, { name, lastName, email, password });
        await AppDataSource.manager.save(user);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario.' });
    }
};

// Actualizar una tarea por ID
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, lastName, email, password } = req.body;
    console.log("new user", name, lastName, email, password);
    try {
        const user = await AppDataSource.manager.findOne(User, { where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }
        user.name = name || user.name;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.password = password || user.password;
        console.log("result for save", name, lastName, email, password);
        await AppDataSource.manager.save(user);
        console.log("Saved!");
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el usuario.' });
    }
};

// Eliminar una tarea por ID
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await AppDataSource.manager.findOne(User, { where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }
        await AppDataSource.manager.remove(user);
        res.json({ message: 'Usuario eliminado con éxito.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el usuario.' });
    }
};

const deleteAllUsers = async (req, res) => {

    try {
        const entities = AppDataSource.entityMetadatas;
        for (const entity of entities) {
            const repository = AppDataSource.getRepository(entity.name);
            await repository.clear(); // This deletes all rows from the table
        }
        res.json({ message: 'Todo ha sido eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar todos los usuarios' });
    }
};

const sayHello = async (req, res) => {

    try {

        res.send("Howdy, users here!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'oh, im die, thankiu forevah'});
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    deleteAllUsers,
    sayHello
};
