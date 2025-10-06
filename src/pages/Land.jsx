import React from "react";

const Land = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Lands & Plots</h1>
      <p className="text-gray-700 mb-6">
        Buy, sell, or invest in open lands and residential plots in prime locations.
      </p>
      <img
        src="/assets/land.jpg"
        alt="Land"
        className="rounded-xl shadow-lg mx-auto w-3/4"
      />
    </div>
  );
};

export default Land;
