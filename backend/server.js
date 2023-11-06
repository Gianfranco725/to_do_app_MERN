// Load env variable
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

// Import dependencies
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb.js');
const taskControllers = require('./controllers/taskController.js');

// create app
const app = express();

//Configure express app
app.use(express.json());
app.use(cors());

// Connect to DB
connectToDb();

//routing
app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

// Get All Tasks
app.get('/tasks', taskControllers.fetchTask);

// Find Task by Id
app.get('/task/:id', taskControllers.fetchById);

// Create Task
app.post('/task', taskControllers.createTask);

// Update Task by Id
app.put('/task/:id', taskControllers.updateTask);

// Delete Task by Id
app.delete('/task/:id', taskControllers.deleteTask);

//start out server
app.listen(process.env.PORT);
