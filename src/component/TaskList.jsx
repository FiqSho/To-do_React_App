import React, { useState } from 'react';
import "../assets/css/tasklist.css"
const TaskList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleTaskSubmit = (event) => {
    event.preventDefault();

    if (taskInput.trim() !== '') {
      setTaskList([...taskList, taskInput]);
      setTaskInput('');
    }
  };

  const removeTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  return (
    <div className='container'>
  <form onSubmit={handleTaskSubmit}>
    <input
      className='form-control input'
      type="text"
      value={taskInput}
      onChange={handleTaskInputChange}
      placeholder="Enter your task"
    />
    <div className='d-flex justify-content-center'>
      <button type="submit" className='btn btn-primary text-center mt-3'>Add Task</button>
    </div>
  </form>

  <ol className='mt-5'>
    {taskList.map((task, index) => (
      <li key={index} className='fw-bolder fs-5 alert alert-primary d-flex justify-content-between'>
        {task}
        <button onClick={() => removeTask(index)} className='btn btn-danger'>Remove</button>
      </li>
    ))}
  </ol>
</div>

  );
};

export default TaskList;
