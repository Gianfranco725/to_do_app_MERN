import React, { useState } from 'react';

const AddTaskModal = ({ setOpenModal }) => {
  const [task, setTask] = useState({
    title: '',
    category: '',
    deadline: '',
  });

  const url = 'http://localhost:5000/task';

  const updateTask = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const submitTask = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    };
    const res = await fetch(url, requestOptions);
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
          <h2 className="title-modal">Add Task</h2>
          <form onSubmit={(e) => submitTask(e)} className="modal__form">
            <label htmlFor="title">To Do Title</label>
            <input
              name="title"
              type="text"
              id="title"
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
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
