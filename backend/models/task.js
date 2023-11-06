const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: String,
  category: String,
  deadline: String,
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
