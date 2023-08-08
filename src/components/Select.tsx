'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface Props {}

export default function Select() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        type="button"
        className="w-full border relative border-gray-500 rounded-md px-3 py-2 text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>Options</span>

        <div
          className={`absolute flex justify-center items-center right-2 top-1/2 transform -translate-y-1/2 transition-all duration-300 text-gray-500 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <FiChevronDown size={22} />
        </div>
      </button>

      <ul
        className={`absolute bg-white w-full rounded-md overflow-hidden transition-all duration-300 overflow-y-auto ${
          open ? 'border border-gray-500' : 'border-none'
        }`}
        style={{
          maxHeight: open ? '180px' : '0', // Adjust the max height as needed
          transition: 'max-height 0.3s ease-in-out', // Adjust the duration and easing as needed
        }}
      >
        <li className="border-b border-gray-400 px-3 py-2 last:border-b-0 hover:bg-gray-200">
          <button className="w-full text-left">Option 1</button>
        </li>
        <li className="border-b border-gray-400 px-3 py-2 last:border-b-0 hover:bg-gray-200">
          <button className="w-full text-left">Option 2</button>
        </li>
        <li className="border-b border-gray-400 px-3 py-2 last:border-b-0 hover:bg-gray-200">
          <button className="w-full text-left">Option 3</button>
        </li>
      </ul>
    </div>
  );
}
