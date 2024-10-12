import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit, clearEdit }) => {
  const [task, setTask] = useState({ description: '', status: 'Not Started' });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleSubmit = () => {
    if (task.description) {
      onSave(task);
      setTask({ description: '', status: 'Not Started' });
      clearEdit(); 
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
      >
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Finished">Finished</option>
      </select>
      <button onClick={handleSubmit}>{taskToEdit ? 'Update' : 'Add'} Task</button>
    </div>
  );
};

export default TaskForm;
