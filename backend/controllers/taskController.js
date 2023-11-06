const Task = require('../models/task.js');

// Get All Tasks
const fetchTask = async (req, res) => {
  const tasks = await Task.find();
  res.json({ tasks: tasks });
};

// Find Task by Id
const fetchById = async (req, res) => {
  // Get Id from URL
  const taskId = req.params.id;

  // Find the Task using the Id
  const task = await Task.findById(taskId);

  // respond
  res.json({ tasks: task });
};

// Create Task
const createTask = async (req, res) => {
  // Getting the data
  const { title, category, deadline } = req.body;
  // Create the task
  const task = await Task.create({
    title,
    category,
    deadline,
  });
  // Respond with the task
  res.json({ tasks: task });
};

// Update Task by Id
const updateTask = async (req, res) => {
  // Get Id from URL
  const taskId = req.params.id;

  // Getting the data
  const { title, category, deadline } = req.body;
  // Create the task
  const task = await Task.findByIdAndUpdate(taskId, {
    title,
    category,
    deadline,
  });
  res.json({ tasks: task });
};

// Del
const deleteTask = async (req, res) => {
  // Get Id from URL
  const taskId = req.params.id;
  // Create the task
  await Task.deleteOne({ _id: taskId });
  res.json({ success: 'Tasks Deleted' });
};

module.exports = {
  fetchTask,
  fetchById,
  createTask,
  updateTask,
  deleteTask,
};
