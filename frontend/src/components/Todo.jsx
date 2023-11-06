import React, { useState } from 'react';
import Card from './Card';
import AddTaskModal from './AddTaskModal';

const Todo = ({ tasks }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="todo">
      <div className="todo__titles">
        <h4 className="todo__title">To Do</h4>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="todo__add"
        >
          +
        </button>
      </div>
      <div className="card-container">
        {tasks
          ? tasks
              .filter((el) => {
                return el.category === 'To Do';
              })
              .map((el, index) => {
                return <Card category="To Do" el={el} key={index} />;
              })
          : 'no ready yet'}
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="card__add-task"
        >
          Add Task +
        </button>
        {openModal && <AddTaskModal setOpenModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Todo;
