import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[200px] p-3 rounded-lg bg-white"
          >
            {/* Image */}
            <div className="h-[120px] w-full rounded-lg bg-gray-300 animate-pulse"></div>

            {/* Name */}
            <div className="h-4 w-3/4 mt-4 rounded bg-gray-300 animate-pulse"></div>

            {/* Rating */}
            <div className="h-3 w-1/2 mt-2 rounded bg-gray-300 animate-pulse"></div>

            {/* Cuisine */}
            <div className="h-3 w-full mt-2 rounded bg-gray-300 animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;