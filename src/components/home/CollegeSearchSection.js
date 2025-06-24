"use client";
import { motion } from "framer-motion";
import { EmblaCarousel } from "../carousel/EmblaCarousel";

const carouselImages = ["/Iit-delhi.jpg", "/Iit-delhi.jpg", "/Iit-delhi.jpg"];

const colleges = new Array(8).fill({
  title: "Indian Institute of Technology, Madras",
  image: "/Iit-delhi.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
});

export default function CollegeSearchSection() {
  return (
    <div className="bg-white">
      {/* 🚀 Carousel + Search Overlay */}
      <div className="relative h-[600px] overflow-hidden rounded-b-3xl shadow-lg">
        <EmblaCarousel images={carouselImages} />

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10 z-10" />

        {/* 🔍 Search Bar */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-full max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search for College, Exam, and More..."
              className="w-full bg-white text-black p-3 pr-28 rounded-lg shadow"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#49BBBD] text-white px-5 py-2 rounded-md font-semibold"
            >
              Search
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 🏫 College Cards Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {colleges.map((college, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow p-4"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={college.image}
              alt="college"
              className="rounded-xl h-40 w-full object-cover mb-4"
            />
            <div className="text-xs text-gray-500 mb-1">
              🎓 View <span className="float-right">A++</span>
            </div>
            <h3 className="text-black font-semibold text-lg mb-2">
              {college.title}
            </h3>
            <p className="text-sm text-gray-600">{college.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
