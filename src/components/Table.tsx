import React, { ReactNode, useState } from 'react';

export interface Column<T> {
  title: string;
  key: string;
  render?: (data: T) => ReactNode;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
}

export default function Table<T>({ columns, data }: Props<T>) {
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div className="space-y-5">
      <div className="overflow-x-auto">
        <table className="table table-fixed w-full border-collapse border min-w-[40rem]">
          <thead className="bg-gray-300">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.title}
                  className="border px-4 py-2"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 h-96"
                >
                  <p className="text-gray-500 font-semibold uppercase">No items to display</p>
                </td>
              </tr>
            ) : (
              displayedData.map((item: any, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
                >
                  {columns.map(({ key, render }) => (
                    <td
                      key={key}
                      className="border px-4 py-2"
                    >
                      {render ? render(item) : item[key as keyof typeof item]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {data.length > itemsPerPage && (
        <div className="flex justify-center">
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
