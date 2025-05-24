"use client";

import React from "react";
import { EmblaCarousel } from "../carousel/EmblaCarousel";

const carouselImages = [
  "/Aiims-delhi.jpg",
  "/Iit-delhi.jpg",
  "/JU.jpg",
];

const colleges = new Array(8).fill({
  title: "Indian Institute of Technology, Madras",
  image: "/Aiims-delhi.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
});

export default function CollegeSearchSection() {
  return (
    <div className="bg-white">
      {/* 🚀 Carousel + Search Overlay */}
      <div className="relative">
        <EmblaCarousel images={carouselImages}/>

        {/* 🔍 Search Overlay */}
        <div className="absolute   inset-0  flex flex-col justify-center items-center px-4">
          <input
            type="text"
            placeholder="Search for College Exam and More..."
            className="w-full bg-white text-black max-w-2xl p-3 rounded-lg shadow mb-4"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <select className="p-2 bg-white text-black rounded ">
              <option>Course</option>
            </select>
            <select className="p-2 bg-white text-black rounded ">
              <option>Location</option>
            </select>
            <select className="p-2 bg-white text-black rounded ">
              <option>Ranking</option>
            </select>
            <button className="bg-[#49BBBD] text-white px-6 py-2 rounded shadow font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* 🏫 College Cards */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {colleges.map((college, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 transition hover:scale-105"
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
          </div>
        ))}
      </div>
    </div>
  );
} 
