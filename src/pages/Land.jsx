 import React from "react";
import villaImage from "../assets/realestate/ap6.png"; // ✅ Correct way to import image

const Villa = () => {
  return (
    <div className="p-8 text-center bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Beachside Villas
      </h1>

      <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
        Experience luxury living in stunning beachside villas featuring private
        pools, elegant interiors, and serene ocean views — perfect for peaceful
        getaways.
      </p>

      <div className="flex justify-center">
        <img
          src={villaImage}
          alt="Luxury Beachside Villa"
          className="rounded-2xl shadow-2xl w-full max-w-3xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default Villa;
