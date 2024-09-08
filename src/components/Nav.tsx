import { AlignRight, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="py-5 text-white bg-[#0d0e11] flex justify-between items-center px-6 md:px-12 lg:px-20">
      {/* Logo */}
      <div className="text-2xl md:text-4xl font-semibold">
        <p>Vardan</p>
      </div>
      {/* Desktop Links */}
      <div className="hidden  md:flex text-[16px] md:text-[18px] font-semibold justify-center items-center gap-5 md:gap-10 lg:gap-20">
        <p className="relative group hover:text-[#a549e2] cursor-pointer">
          Jobs
          <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
        </p>
        <p className="relative group hover:text-[#a549e2] cursor-pointer]">
          Events
          <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
        </p>
        <p className="relative group hover:text-[#a549e2] cursor-pointer ">
          Community
          <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
        </p>
        <p className="relative group  hover:text-[#a549e2] cursor-pointer">
          Courses
          <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
        </p>
        <p className="relative group  hover:text-[#a549e2] cursor-pointer">
          AI Resume
          <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
        </p>
      </div>

      {/* Buttons and Sidebar Icon */}
      <div className="hidden md:flex justify-center items-center gap-2 md:gap-4">
        <div className="flex rounded-xl hover:bg-white bg-gradient-to-tr from-pink-400 to-blue-600 p-[1px]">
          <button className="bg-[#0d0e11] hover:bg-white hover:text-black font-normal text-base md:text-xl py-2 px-3 md:px-4 rounded-xl">
            Log In
          </button>
        </div>

        <div className="flex rounded-xl hover:bg-gradient-to-tr from-pink-400 to-blue-600 p-[1px]">
          <button className="bg-white text-black hover:bg-[#0d0e11] hover:text-white font-normal text-base md:text-xl py-2 px-3 md:px-4 rounded-xl">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {isSidebarOpen ? (
          <X onClick={toggleSidebar} className="cursor-pointer" />
        ) : (
          <AlignRight onClick={toggleSidebar} className="cursor-pointer" />
        )}
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-[#0d0e11] p-5 z-50">
          <ul className="flex flex-col gap-4">
            <li className="relative group text-lg text-white font-semibold cursor-pointer">
              Jobs
              <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group text-lg text-white font-semibold cursor-pointer">
              Events
              <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group text-lg text-white font-semibold cursor-pointer">
              Community
              <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group text-lg text-white font-semibold cursor-pointer">
              Courses
              <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group text-lg text-white font-semibold cursor-pointer">
              AI Resume
              <span className="block w-0 h-[2px] bg-[#6857f6] transition-all group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
