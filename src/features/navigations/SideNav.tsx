import Link from 'next/link';
import React from 'react';
import { IoSchoolSharp } from 'react-icons/io5';
import { FaChalkboardTeacher, FaSchool } from 'react-icons/fa';
import { MdGroups, MdOutlineLogin } from 'react-icons/md';
import { PiBooksFill } from 'react-icons/pi';

export default function SideNav() {
  return (
    <aside className="fixed bg-white w-full md:w-80 h-full shadow-lg border p-5">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <IoSchoolSharp
          className="text-indigo-600"
          size={34}
        />
        <h1 className="text-2xl font-semibold text-indigo-600">Academia</h1>
      </div>
      <nav className="space-y-3">
        <Link
          href="/"
          className="flex items-center justify-center bg-indigo-50 p-2 rounded-md space-x-3 transition-colors duration-300 hover:text-indigo-600"
        >
          <FaChalkboardTeacher
            className="text-indigo-600"
            size={30}
          />
          <span className="text-lg text-indigo-600 font-semibold">Teachers</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center space-x-3 transition-colors bg-indigo-50 p-2 rounded-md duration-300 hover:text-indigo-600"
        >
          <MdGroups
            className="text-indigo-600"
            size={30}
          />
          <span className="text-lg text-indigo-600 font-semibold">Students</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center space-x-3 transition-colors bg-indigo-50 p-2 rounded-md duration-300 hover:text-indigo-600"
        >
          <PiBooksFill
            className="text-indigo-600"
            size={30}
          />
          <span className="text-lg text-indigo-600 font-semibold">Subjects</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center space-x-3 transition-colors bg-indigo-50 p-2 rounded-md duration-300 hover:text-indigo-600"
        >
          <FaSchool
            className="text-indigo-600"
            size={30}
          />
          <span className="text-lg text-indigo-600 font-semibold">Sections</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center space-x-3 transition-colors bg-indigo-50 p-2 rounded-md duration-300 hover:text-indigo-600"
        >
          <MdOutlineLogin
            className="text-indigo-600"
            size={30}
          />
          <span className="text-lg text-indigo-600 font-semibold">Sign in</span>
        </Link>
      </nav>
    </aside>
  );
}
