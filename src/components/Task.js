import React from 'react';

const Task = ({ task, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Not Started':
        return 'red';
      case 'In Progress':
        return 'orange';
      case 'Finished':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <div
      className="task"
      style={{
        border: `2px solid ${getStatusColor(task.status)}`,
        padding: '10px',
        margin: '10px',
      }}
    >
      <h4>{task.description}</h4>
      <p>
        Status: <span style={{ color: getStatusColor(task.status) }}>{task.status}</span>
      </p>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
