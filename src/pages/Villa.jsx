import React from "react";

const Villa = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Beachside Villas</h1>
      <p className="text-gray-700 mb-6">
        Experience luxury living in stunning beachside villas with private pools and gardens.
      </p>
      <img
        src="/assets/villa.jpg"
        alt="Villa"
        className="rounded-xl shadow-lg mx-auto w-3/4"
      />
    </div>
  );
};

export default Villa;
