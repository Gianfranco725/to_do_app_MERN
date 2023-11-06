import React, { useState } from 'react';
import Card from './Card';
import AddTaskModal from './AddTaskModal';

const InProcess = ({ tasks }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="inProcess">
      <div className="inProcess__titles">
        <h4 className="inProcess__title">In Process</h4>
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
                return el.category === 'In Process';
              })
              .map((el, index) => {
                return <Card category="In Process" el={el} key={index} />;
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

export default InProcess;
