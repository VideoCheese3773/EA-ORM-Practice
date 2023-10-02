// src/routes/taskRoutes.js
const userExpress = require('express');
const userRouter = userExpress.Router();
const UserController = require('../controller/UserController');

// Obtener todas las tareas
userRouter.get('/users',UserController.getAllUsers);
// Obtener una tarea por ID
userRouter.get('/users/:id', UserController.getTaskById);
// Crear una nueva tarea
userRouter.post('/users', UserController.createTask);
// Actualizar una tarea por ID
userRouter.put('/users/:id', UserController.updateTask);
// Eliminar una tarea por ID
userRouter.delete('/users/:id', UserController.deleteTask);
// Eliminar todas las tareas
userRouter.delete('/users/', UserController.deleteAllusers);

//Saludar desde el API
userRouter.get('/', UserController.sayHello);

module.exports = router;

