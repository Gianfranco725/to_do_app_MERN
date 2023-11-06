import React, { useState } from 'react';
import TaskDetails from './TaskDetails';

const Card = ({ category, el }) => {
  const [openModal, setOpenModal] = useState(false);
  const styles = {
    'To Do': {
      backgroundColor: '#f2aa4c',
    },
    'In Process': {
      backgroundColor: '#f36060',
    },
    Done: {
      backgroundColor: '#38A1FF',
    },
  };
  const bg = styles[category];

  return (
    <div className="card">
      <span className="tag" style={bg}>
        {category}
      </span>
      <p className="card__title-task">{el.title}</p>
      <div className="card__details">
        <button
          className="card__more-details tag"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          ...
        </button>{' '}
        <br />
        <span className="card__deadline tag">{el.deadline}</span>
      </div>
      {openModal && <TaskDetails task={el} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Card;
