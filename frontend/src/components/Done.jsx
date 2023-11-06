import React, { useState } from 'react';
import Card from './Card';
import AddTaskModal from './AddTaskModal';

const Done = ({ tasks }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="done">
      <div className="done__titles">
        <h4 className="done__title">Done</h4>
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
                return el.category === 'Done';
              })
              .map((el, index) => {
                return <Card category="Done" el={el} key={index} />;
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

export default Done;
