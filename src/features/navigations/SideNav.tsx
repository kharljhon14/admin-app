'use client';

import Link from 'next/link';

import { IoSchoolSharp } from 'react-icons/io5';
import { FaChalkboardTeacher, FaSchool } from 'react-icons/fa';
import { MdGroups, MdOutlineLogin } from 'react-icons/md';
import { PiBooksFill } from 'react-icons/pi';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

interface Props {
  open: boolean;
  setOpen: () => void;
}

export default function SideNav({ open, setOpen }: Props) {
  return (
    <aside
      className={`fixed bg-white h-full shadow-lg border z-30  ${
        open ? 'md:w-80 p-5 full w-full' : 'md:w-20 p-4'
      }`}
    >
      <div className="flex items-center justify-center space-x-3 mb-6">
        <IoSchoolSharp size={34} />
        {open && <h1 className="text-2xl font-semibold ">Academia</h1>}
      </div>
      <nav className="space-y-3">
        <Link
          href="/"
          className="flex items-center justify-center bg-gray-100 p-2 rounded-md space-x-3 transition-colors duration-300 hover:bg-gray-200"
        >
          <FaChalkboardTeacher size={30} />
          {open && <span className="text-lg font-semibold">Teachers</span>}
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center bg-gray-100 p-2 rounded-md space-x-3 transition-colors duration-300 hover:bg-gray-200"
        >
          <MdGroups size={30} />
          {open && <span className="text-lg font-semibold">Students</span>}
        </Link>
        <Link
          href="/subjects"
          className="flex items-center justify-center bg-gray-100 p-2 rounded-md space-x-3 transition-colors duration-300 hover:bg-gray-200"
        >
          <PiBooksFill size={30} />
          {open && <span className="text-lg  font-semibold">Subjects</span>}
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center bg-gray-100 p-2 rounded-md space-x-3 transition-colors duration-300 hover:bg-gray-200"
        >
          <FaSchool size={30} />

          {open && <span className="text-lg font-semibold">Sections</span>}
        </Link>
        <Link
          href="/auth/login"
          className="flex items-center justify-center bg-gray-100 p-2 rounded-md space-x-3 transition-colors duration-300 hover:bg-gray-200"
        >
          <MdOutlineLogin size={30} />
          {open && <span className="text-lg font-semibold">Sign in</span>}
        </Link>
      </nav>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={setOpen}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md"
        >
          {open ? <AiOutlineMenuFold size={22} /> : <AiOutlineMenuUnfold size={22} />}
        </button>
      </div>
    </aside>
  );
}
