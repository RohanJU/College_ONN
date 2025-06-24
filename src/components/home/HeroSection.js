"use client";
import NavMenu from "@/components/navbar/NavMenu";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative pb-0 overflow-hidden"
      style={{ backgroundColor: "#49BBBD" }}
    >
      <NavMenu />

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <div className="text-white max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-orange-400">Find Over</span>{" "}
            <span className="text-[#1F267E]">25000+</span> <br />
            college in india
          </h1>
          <p className="mt-4 text-white/90">
            CollegeOnn makes your admission journey smoother with smart tools
            and expert insights.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-white text-[#49BBBD] font-semibold px-6 py-3 rounded-full">
              Join free counseling
            </button>
            <button className="flex items-center gap-2 text-white font-medium">
              <span className="bg-white text-[#49BBBD] w-10 h-10 flex items-center justify-center rounded-full">
                ▶
              </span>
              Watch how it works
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="relative mt-[100px] md:mt-0 w-full md:w-1/2">
          {/* 👧 Girl image */}
          <motion.img
            src="/girlcollegeonn.png"
            alt="Student"
            className="max-h-[600px] mx-auto object-contain z-10 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Floating Box 1 */}
          <motion.div
            className="hidden lg:flex absolute top-20 left-[-120px] w-48 p-4 bg-white rounded-xl shadow-lg gap-3 z-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-[#49BBBD] text-white p-2 rounded-full">📅</div>
            <div>
              <p className="font-bold text-sm text-gray-700">250k</p>
              <p className="text-xs text-gray-500">Assisted Student</p>
            </div>
          </motion.div>

          {/* Floating Box 2 */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] md:bottom-[5px] lg:bottom-[25px] w-64 bg-white rounded-xl shadow-lg px-4 py-3 z-30"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <img
                src="/52355.jpg"
                alt="Expert"
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm text-gray-700">
                  Get Expert Guidance
                </p>
                <p className="text-xs text-green-600">Today at 12:00 PM</p>
              </div>
            </div>
            <button className="mt-3 w-full bg-[#C23957] text-white px-3 py-2 rounded-lg text-sm font-semibold">
              Join Now
            </button>
          </motion.div>

          {/* Floating Box 3 */}
          <motion.div
            className="hidden lg:flex absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 w-56 z-20"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="bg-orange-300 text-orange-600 p-2 rounded-full">
                📩
              </span>
              <div>
                <p className="font-bold text-sm text-black">Congratulations</p>
                <p className="text-xs text-gray-500">
                  Your admission completed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved SVG at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z-20"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full z-20"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
}
