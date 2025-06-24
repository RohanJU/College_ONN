// src/app/college/[slug]/components/CoursesSection.js

import React from "react";

const CoursesSection = ({ courses }) => {
  return (
    <div className="mt-10 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-4">Courses Offered</h2>

      <div className="bg-white shadow rounded-md overflow-hidden">
        <table className="w-full table-auto text-left">
          <thead className="bg-teal-500 text-white">
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
              <tr key={i} className="border-t">
                <td className="px-6 py-4">{i + 1}</td>
                <td className="px-6 py-4">{course.name}</td>
                <td className="px-6 py-4">{course.eligibility}</td>
                <td className="px-6 py-4">{course.fees}</td>
                <td className="px-6 py-4">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesSection;
