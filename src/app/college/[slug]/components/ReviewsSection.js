import React from "react";

const ReviewsSection = ({ reviews = [] }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet.</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-md shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h4>
                <span className="text-yellow-500 font-medium">
                  ⭐ {review.rating}/5
                </span>
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      )}

      {/* Review form placeholder */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Say Something?</h3>
        <textarea
          className="w-full border border-gray-300 rounded-md p-3 mb-4"
          rows="4"
          placeholder="Write your review here..."
        />
        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
