const express = require('express')
const taskController = require('./controllers/taskController')
const router = express.Router()
const taskMiddleware = require('./middleware/taskMiddleware')

router.get('/tasks', taskController.getAll)
router.post('/tasks', taskMiddleware.validateFieldTitle, taskController.createTask)
router.delete('/tasks/:id', taskController.deleteTask)
router.put('/tasks/:id', taskMiddleware.validateFieldTitle, taskMiddleware.validateFieldStatus, taskController.updateTask)

module.exports = router
