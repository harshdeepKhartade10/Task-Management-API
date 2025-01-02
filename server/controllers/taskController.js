// import here the Task model
const Task = require('../models/Task');

const createTask = async (req, res) => {
    // Creating a new task with data from the request body
    const task = await Task.create({ ...req.body, user: req.user.id });

    // then we send  a success response with the created task
    res.status(201).json(task);
};

const getTasks = async (req, res) => {
    // then we will fetch  all tasks associated with the authenticated user
    const tasks = await Task.find({ user: req.user.id });

    // now here also we send  a success response with the fetched tasks
    res.json(tasks);
};


const updateTask = async (req, res) => {
    // we will now find and update a task by its ID with the provided data
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // once update then we sent a success response with the updated task
    res.json(task);
};

const deleteTask = async (req, res) => {
    // now we find and delete  a task by its ID
    await Task.findByIdAndDelete(req.params.id);

    // after deleting we will send a success response indicating the task was deleted successfully..
    res.json({ message: 'Task deleted successfully' });
};

// Exported the above all functions from here
module.exports = { createTask, getTasks, updateTask, deleteTask };
