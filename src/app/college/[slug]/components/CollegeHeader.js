"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const CollegeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Simulated user data
  const user = {
    name: "Virat",
    avatar: "/user-avatar.jpg",
  };

  return (
    <header className="w-full bg-white py-4 px-6 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-700 flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="CollegeOnn Logo"
          width={40}
          height={40}
        />
        <span>
          COLLEGE <span className="text-black">ONN</span>
        </span>
      </div>

      {/* User Profile Section */}
      <div className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">{user.name}</span>
          <FaChevronDown className="text-gray-500 text-xs" />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default CollegeHeader;
