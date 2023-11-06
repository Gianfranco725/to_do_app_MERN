import React from 'react';
import Todo from '../components/Todo';
import InProcess from '../components/InProcess';
import Done from '../components/Done';
import '../css/HomePage.css';
import { useFetch } from '../hooks/useFetch';

export const Home = () => {
  const url = 'http://localhost:5000/tasks';
  const [data, isPending, error] = useFetch(url);

  return (
    <div className="home">
      <header className="header">
        <div className="white-bar"></div>
        <h1>To Do App</h1>
      </header>
      <div className="task__container">
        {!isPending ? (
          <>
            <Todo tasks={data.tasks} />
            <InProcess tasks={data.tasks} />
            <Done tasks={data.tasks} />
          </>
        ) : (
          <div className="lds-dual-ring"></div>
        )}
      </div>
    </div>
  );
};
