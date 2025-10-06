import React from "react";

const Farmhouse = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Farmhouses</h1>
      <p className="text-gray-700 mb-6">
        Enjoy peaceful weekends in beautiful farmhouses surrounded by nature.
      </p>
      <img
        src="/assets/farmhouse.jpg"
        alt="Farmhouse"
        className="rounded-xl shadow-lg mx-auto w-3/4"
      />
    </div>
  );
};

export default Farmhouse;
