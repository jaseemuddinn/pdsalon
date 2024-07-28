import React from 'react';

const Loader = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(6).fill().map((_, index) => (
          <div key={index} className="p-4 bg-gray-200 rounded-lg">
            <div className="h-48 bg-gray-300 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
