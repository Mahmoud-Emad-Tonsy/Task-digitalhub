import React from 'react';

const Filter = ({ filterStatus, setFilterStatus }) => (
  <div>
    <label>Filter by Status: </label>
    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
      <option value="">All</option>
      <option value="Not Started">Not Started</option>
      <option value="In Progress">In Progress</option>
      <option value="Finished">Finished</option>
    </select>
  </div>
);

export default Filter;
