"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { collegeData } from "./data";

import CollegeHeader from "./components/CollegeHeader";
import CoursesSection from "./components/CoursesSection";
import CutoffSection from "./components/CutoffSection";
import GallerySection from "./components/GallerySection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer"; // ✅ Importing Footer

export default function CollegePage() {
  const { slug } = useParams();
  const college = collegeData.find((c) => c.slug === slug);

  const [activeTab, setActiveTab] = useState("courses");

  if (!college) {
    return (
      <>
        <CollegeHeader />
        <div className="max-w-4xl mx-auto p-6 text-xl text-red-600">
          College Not Found 😕
        </div>
        <Footer /> {/* Show footer even when college is not found */}
      </>
    );
  }

  return (
    <>
      <CollegeHeader />

      {/* Hero Image */}
      <div className="w-full">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* College Info */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="text-3xl font-bold text-gray-800">{college.name}</h1>
          <span className="text-sm text-blue-600 border border-blue-600 rounded px-3 py-1 mt-2 hover:bg-blue-50 cursor-pointer">
            Official Site
          </span>
        </div>

        <p className="mt-4 text-gray-700">{college.description}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div>
            <span className="font-semibold">Location:</span> {college.location}
          </div>
          <div>
            <span className="font-semibold">Cutoff:</span> {college.cutoff}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 mt-10 mb-4 flex gap-4 flex-wrap">
        {["courses", "cutoff", "gallery", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        {activeTab === "courses" && <CoursesSection courses={college.courses} />}
        {activeTab === "cutoff" && <CutoffSection cutoff={college.cutoff} />}
        {activeTab === "gallery" && <GallerySection images={college.gallery} />}
        {activeTab === "reviews" && <ReviewsSection reviews={college.reviews} />}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
