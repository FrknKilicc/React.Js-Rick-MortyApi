import React from "react";
import "./Pagination.css";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div id="PageID">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Önceki Sayfa
      </button>
      <span>Sayfa {currentPage} / {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Sonraki Sayfa
      </button>
    </div>
  );
};

export default Pagination;
