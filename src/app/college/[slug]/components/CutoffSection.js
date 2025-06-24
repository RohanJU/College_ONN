import React from "react";

const CutoffSection = ({ cutoff }) => {
  return (
    <div className="mt-10 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl font-bold mb-4">Cutoff Details</h2>

      <div className="bg-blue-50 border border-blue-300 p-6 rounded-md text-gray-800 shadow-sm">
        <p className="text-lg">{cutoff}</p>
      </div>
    </div>
  );
};

export default CutoffSection;
