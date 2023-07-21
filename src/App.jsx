import React from 'react';
import TaskList from './component/TaskList';

const App = () => {
  return (
    <div>
      <h1 className='text-center mt-5 mb-2'>To-Do List</h1>
      <TaskList />
    </div>
  );
};

export default App;
