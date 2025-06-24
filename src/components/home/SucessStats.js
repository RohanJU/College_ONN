"use client";
import { motion } from "framer-motion";

export default function SucessStats() {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white">
      {/* Our Success */}
      <div className="mb-12">
        <h2 className="text-black text-3xl font-bold mb-2">Our Success</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Over the years, College ONN has helped thousands of students discover
          the best colleges, access expert guidance, and stay informed
          throughout their admission journey.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 text-[#1D1D1D] font-semibold text-lg">
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">15K+</p>
            <p>Students</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">75%</p>
            <p>Total success</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">35</p>
            <p>Main questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">26</p>
            <p>Chief experts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">16</p>
            <p>Years of experience</p>
          </div>
        </div>
      </div>

      {/* What is College Onn */}
      <div className="mb-12">
        <h2 className="text-black text-2xl font-bold">
          What is <span className="text-[#49BBBD]">COLLEGE ONN?</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          College onn is a platform that helps students explore career paths,
          discover top colleges, get expert counseling, and stay updated on
          entrance exams — all in one place. From choosing the right course to
          preparing for JEE, NEET, CUET, and more, College onn makes your
          college journey simple, smart, and stress-free.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* College Predictor Card */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/pngegg (23).png"
            alt="College Predictor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="bg-teal-300 px-4 py-6 flex flex-col items-center space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-teal-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-black hover:text-white transition"
              >
                College Predictors
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-white hover:text-teal-700 transition"
              >
                Rank Predictors
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Compare College Card */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/pngegg (24).png"
            alt="Compare College"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="bg-orange-400 px-4 py-6 flex flex-col items-center space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-orange-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-black hover:text-white transition"
              >
                Compare College
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-white hover:text-orange-700 transition"
              >
                Find the Best One
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
