"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Optional: Only show arrow after scrolling down
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gray-100 text-black py-6 px-6 mt-10 border-t border-teal-300 relative">
      <div className="max-w-5xl mx-auto text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-2"
        >
          <Image
            src="/CollegeONN_LOGO.png"
            alt="College ONN Logo"
            width={160}
            height={20}
            className="object-contain"
          />
        </motion.div>

        {/* Newsletter */}
        <h3 className="text-lg sm:text-xl font-medium mb-4">
          Subscribe to get our Newsletter
        </h3>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-full w-full sm:w-auto flex-grow border border-teal-300 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-teal-300 hover:bg-orange-400 text-black font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            Subscribe
          </motion.button>
        </form>

        {/* Links */}
        <motion.div
          className="flex justify-center space-x-6 text-sm pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {["Careers", "Privacy Policy", "Terms & Conditions"].map((text, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-black hover:text-orange-400 transition"
            >
              {text}
            </motion.a>
          ))}
        </motion.div>

        <div className="border-t border-teal-300 mt-4"></div>
        <p className="text-sm pt-2">&copy; 2025 Druze Analytics.</p>
      </div>

      {/* 🔼 Floating Arrow Button */}
      {showArrow && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 bg-teal-300 hover:bg-orange-400 text-black rounded-full p-3 shadow-lg z-50 transition"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
}
