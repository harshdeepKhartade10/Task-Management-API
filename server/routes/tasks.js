// import here the Express library to create instance of routes
const express = require('express');

// impor task controller functions
const { createTask,getTasks, updateTask,deleteTask} = require('../controllers/taskController');

// imported middleware to protect our routes
const { protect } = require('../middlewares/authMiddleware');

// Creating an Express router instance
const router = express.Router();

/* 
    route - POST /

    access - Private (requires authentication)
*/
router.post('/', protect, createTask);

/* 
    route GET /
    desc - Fetch all tasks for the authenticated user
    access:  Private (requirs authentication)
*/
router.get('/', protect, getTasks);

/* 
    route -PUT /:id
    desc: Update a task by its ID
    access - Private (requires authentication)
*/
router.put('/:id', protect, updateTask);

/* 
    route- DELETE /:id

    access -Private (requires authentication)
*/
router.delete('/:id', protect, deleteTask);

module.exports = router;
