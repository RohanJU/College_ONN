"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Import motion

const CollegeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    name: "Virat",
    avatar: "/pngegg (22).png",
  };

  return (
    <header className="w-full bg-teal-400 py-4 px-6 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* ✅ Animated Logo */}
      <Link href="/" className="flex items-center gap-2">
        <motion.div whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300 }}>
          <Image
            src="/CollegeONN_LOGO.png"
            alt="CollegeONN"
            width={80}
            height={80}
          />
        </motion.div>
      </Link>

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
