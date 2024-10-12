import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
