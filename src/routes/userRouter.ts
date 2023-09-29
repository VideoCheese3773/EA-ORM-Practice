// src/routes/taskRoutes.js
//const express = require('express');
//const router = express.Router();
const UserController = require('../controller/UserController');

// Obtener todas las tareas
router.get('/users',UserController.getAllusers);
// Obtener una tarea por ID
router.get('/users/:id', UserController.getTaskById);
// Crear una nueva tarea
router.post('/users', UserController.createTask);
// Actualizar una tarea por ID
router.put('/users/:id', UserController.updateTask);
// Eliminar una tarea por ID
router.delete('/users/:id', UserController.deleteTask);
// Eliminar todas las tareas
router.delete('/users/', UserController.deleteAllusers);

//Saludar desde el API
userRouter.get('/', UserController.sayHello);

module.exports = router;

