import React from "react";

const GallerySection = ({ images = [] }) => {
  if (images.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10 text-gray-600">
        No images available.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">College Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="rounded overflow-hidden shadow-sm">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
