const express = require('express');

const taskController = require('../controllers/taskController');

const router = express.Router();

router.get("/getTasks", taskController.getTasks);

router.post('/addTask', taskController.addTask);
router.post('/deleteTask', taskController.deleteTask);
router.post("/markTaskComplete", taskController.markTaskComplete);

module.exports = router;
