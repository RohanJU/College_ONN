"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import { collegeData } from "./data";

import CollegeHeader from "./components/CollegeHeader";
import CoursesSection from "./components/CoursesSection";
import CutoffSection from "./components/CutoffSection";
import GallerySection from "./components/GallerySection";
import ReviewsSection from "./components/ReviewsSection";
export default function CollegePage() {
  const { slug } = useParams();
  const college = collegeData.find((c) => c.slug === slug);
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    "overview",
    "courses",
    "admission",
    "scholarship",
    "placements",
    "cutoff",
    "campus",
    "gallery",
    "reviews",
    "news",
    "qna",
    "fees",
  ];

  if (!college) {
    return (
      <>
        <CollegeHeader />
        <div className="max-w-4xl mx-auto p-6 text-xl text-orange-400">
          College Not Found 😕
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CollegeHeader />

      {/* Hero Image */}
      <div className="bg-white w-full">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* College Info Section */}
      <motion.div
        className="bg-white max-w-6xl mx-auto p-6 rounded-xl shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="text-3xl font-bold text-black">{college.name}</h1>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-sm text-black border border-teal-300 rounded px-3 py-1 mt-2 hover:bg-teal-300 cursor-pointer transition"
          >
            Official Site
          </motion.span>
        </div>

        <p className="mt-4 text-black">{college.description}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-semibold">Location:</span> {college.location}
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-semibold">Cutoff:</span> {college.cutoff}
          </motion.div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 mt-10 mb-4 flex gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              activeTab === tab
                ? "bg-orange-400 text-white"
                : "border-teal-300 text-black hover:bg-teal-300 hover:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        {activeTab === "overview" && <p className="text-black">Overview content coming soon...</p>}
        {activeTab === "courses" && <CoursesSection courses={college.courses} />}
        {activeTab === "admission" && <p className="text-black">Admission details coming soon...</p>}
        {activeTab === "scholarship" && <p className="text-black">Scholarship info coming soon...</p>}
        {activeTab === "placements" && <p className="text-black">Placements data coming soon...</p>}
        {activeTab === "cutoff" && <CutoffSection cutoff={college.cutoff} />}
        {activeTab === "campus" && <p className="text-black">Campus life coming soon...</p>}
        {activeTab === "gallery" && <GallerySection images={college.gallery} />}
        {activeTab === "reviews" && <ReviewsSection reviews={college.reviews} />}
        {activeTab === "news" && <p className="text-black">News updates coming soon...</p>}
        {activeTab === "qna" && <p className="text-black">QnA section coming soon...</p>}
        {activeTab === "fees" && <p className="text-black">Fees structure coming soon...</p>}
      </div>
    </>
  );
}
