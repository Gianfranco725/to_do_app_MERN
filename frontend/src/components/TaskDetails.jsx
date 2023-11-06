import React, { useState } from 'react';

const TaskDetails = ({ task, setOpenModal }) => {
  const { _id } = task;
  const [taskForm, setTaskForm] = useState({
    title: '',
    category: '',
  });

  const url = 'http://localhost:5000/task/';

  const updateTask = (e) => {
    const { name, value } = e.target;
    setTaskForm({
      ...taskForm,
      [name]: value,
    });
  };

  const submitTask = async (e) => {
    e.preventDefault();
    if (taskForm.title == '') return;
    if (taskForm.category == '') return;
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskForm),
    };
    const res = await fetch(url + _id, requestOptions);
    setOpenModal(false);
    window.location.reload();
  };

  const deleteTask = async () => {
    const requestOptions = {
      method: 'DELETE',
    };
    const res = await fetch(url + _id, requestOptions);
    setOpenModal(false);
    window.location.reload();
  };

  return (
    <div className="modal">
      <div className="bg-modal">
        <div className="modal__container">
          <button
            onClick={() => setOpenModal(false)}
            className="modal__close-btn"
          >
            X
          </button>
          <h2 className="title-modal">Edit Task</h2>
          <form onSubmit={(e) => submitTask(e)} className="modal__form">
            <label htmlFor="title">Todo Title</label>
            <input
              name="title"
              type="text"
              id="title"
              required
              placeholder="Write Your Task"
              onChange={(e) => updateTask(e)}
            />
            <br />
            <label htmlFor="deadline">Deadline</label>
            <input
              name="deadline"
              type="date"
              id="deadline"
              placeholder="Write Task's Deadline"
              onChange={(e) => updateTask(e)}
            />
            <br />
            <label htmlFor="category">
              Category of the Task
              <select
                name="category"
                id="category"
                onChange={(e) => updateTask(e)}
              >
                <option value="---">---</option>
                <option value="To Do">To Do</option>
                <option value="In Process">In Process</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <button type="submit" className="btn-blue">
              Submit
            </button>
          </form>
          <button onClick={() => deleteTask()} className="btn-red">
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
