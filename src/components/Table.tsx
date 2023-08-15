import React, { useState } from 'react';

export default function Table() {
  const data = [
    { subject: 'English', year: 'First', actions: 'Actions' },
    { subject: 'Math', year: 'Second', actions: 'Actions' },
    { subject: 'Science', year: 'Third', actions: 'Actions' },
    { subject: 'History', year: 'Fourth', actions: 'Actions' },
    { subject: 'History', year: 'Fourth', actions: 'Actions' },
    { subject: 'History', year: 'Fourth', actions: 'Actions' },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbersToShow = 5; // Number of page numbers to display in pagination bar
  const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
  const visiblePageNumbers = [];

  for (
    let i = Math.max(1, currentPage - halfPageNumbersToShow);
    i <= Math.min(totalPages, currentPage + halfPageNumbersToShow);
    i++
  ) {
    visiblePageNumbers.push(i);
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <table className="table table-fixed w-full border-collapse border m-9 rounded-lg overflow-hidden">
        {/* ... Your table header ... */}
        <tbody>{/* ... Your table body ... */}</tbody>
      </table>
      {data.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-black text-white rounded-lg mr-2"
          >
            Previous
          </button>
          {visiblePageNumbers[0] > 1 && (
            <button
              onClick={() => handlePageChange(1)}
              className="px-3 py-1 rounded-lg mx-1"
            >
              1
            </button>
          )}
          {visiblePageNumbers[0] > 2 && <span className="mx-1">...</span>}
          {visiblePageNumbers.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-3 py-1 rounded-lg mx-1 ${
                pageNum === currentPage ? 'bg-black text-white' : ''
              }`}
            >
              {pageNum}
            </button>
          ))}
          {visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages - 1 && (
            <span className="mx-1">...</span>
          )}
          {visiblePageNumbers[visiblePageNumbers.length - 1] < totalPages && (
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-3 py-1 rounded-lg mx-1"
            >
              {totalPages}
            </button>
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-black text-white rounded-lg ml-2"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
