"use client";
import { motion } from "framer-motion";

const CoursesSection = ({ courses }) => {
  return (
    <div className="bg-white mt-10 mx-auto px-6">
      <h2 className="text-2xl text-black font-bold mb-4">Courses Offered</h2>

      {/* Animate Table Wrapper */}
      <motion.div
        className="bg-white shadow rounded-md overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <table className="text-black w-full table-auto text-left">
          <thead className="bg-teal-400 text-black">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Course</th>
              <th className="px-6 py-3">Eligibility</th>
              <th className="px-6 py-3">Fees</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, i) => (
              <motion.tr
                key={i}
                className="border-t"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <td className="px-6 py-4">{i + 1}</td>
                <td className="px-6 py-4">{course.name}</td>
                <td className="px-6 py-4">{course.eligibility}</td>
                <td className="px-6 py-4">{course.fees}</td>
                <td className="px-6 py-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-teal-300 text-black px-4 py-1 rounded hover:bg-orange-400"
                  >
                    Apply Now
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default CoursesSection;
