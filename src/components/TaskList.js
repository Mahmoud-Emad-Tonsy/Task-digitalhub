import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import Filter from './Filter';
import Pagination from './Pagination';
import '../App.css'; 

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 4;

  useEffect(() => {
    const cachedTasks = localStorage.getItem('tasks');
    if (cachedTasks) setTasks(JSON.parse(cachedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (task) => {
    if (task.id) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, { id: tasks.length + 1, ...task }]);
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearEditTask = () => setEditTask(null);

  const filteredTasks = tasks.filter((task) =>
    filterStatus ? task.status === filterStatus : true
  );

  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  return (
    <div>
      <h2>Task List</h2>

      <TaskForm onSave={handleSaveTask} taskToEdit={editTask} clearEdit={clearEditTask} />

      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {paginatedTasks.map((task) => (
          <Task key={task.id} task={task} onEdit={setEditTask} onDelete={handleDeleteTask} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredTasks.length / tasksPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TaskList;
