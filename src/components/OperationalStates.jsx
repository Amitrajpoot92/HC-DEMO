 // src/components/OperationalStates.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🖼️ Import city images
import delhiImg from "../assets/states/Delhi.png";
import karnatakaImg from "../assets/states/Bangalore.png";
import goaImg from "../assets/states/Goa.png";
import haryanaImg from "../assets/states/Haryana.png";
import lucknowImg from "../assets/states/Lucknow.png";
import mumbaiImg from "../assets/states/Mumbai.png";

const statesData = [
  {
    name: "Delhi",
    desc: "The Heart of India",
    detail:
      "Delhi is the capital city with rich culture, history, and fast-growing real estate opportunities.",
    img: delhiImg,
  },
  {
    name: "Karnataka",
    desc: "Silicon Valley of India",
    detail:
      "Karnataka is tech hub with modern infrastructure and high rental demand.",
    img: karnatakaImg,
  },
  {
    name: "Goa",
    desc: "Party Capital of India",
    detail:
      "Goa offers scenic properties with tourism-driven investment potential.",
    img: goaImg,
  },
  {
    name: "Uttar Pradesh",
    desc: "Heartland of India",
    detail:
      "UP has vast urban and semi-urban properties suitable for diverse clients.",
    img: lucknowImg,
  },
  {
    name: "Maharashtra",
    desc: "Financial Capital of India",
    detail:
      "Mumbai and Pune present high-value properties with premium returns.",
    img: mumbaiImg,
  },
  {
    name: "Haryana",
    desc: "India's Green City",
    detail:
      "Haryana has well-planned cities with green spaces and growing infrastructure.",
    img: haryanaImg,
  },
];

const OperationalStates = () => {
  const [frontIndex, setFrontIndex] = useState(statesData.length - 1);
  const leftPanelRef = useRef(null);
  const [panelHeight, setPanelHeight] = useState(0);

  const handleNext = () =>
    setFrontIndex((prev) => (prev + 1) % statesData.length);
  const handlePrev = () =>
    setFrontIndex((prev) => (prev - 1 + statesData.length) % statesData.length);

  const isFront = (index) => index === frontIndex;

  // Automatic rotation every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Calculate max height for left panel
  useEffect(() => {
    if (leftPanelRef.current) {
      setPanelHeight(leftPanelRef.current.scrollHeight);
    }
  }, []);

  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 relative overflow-visible">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 relative"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px #8af6fc",
        }}
      >
        We Are Operational In
      </h2>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left Detail Panel */}
        <div
          className="flex flex-col justify-start mt-12 md:mt-16 space-y-4"
          style={{ minHeight: panelHeight }}
          ref={leftPanelRef}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={frontIndex}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-white/20"
              style={{
                boxShadow: "0 0 20px 4px #8af6fc55, 0 0 40px 10px #8af6fc33",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[#fa6304]">
                {statesData[frontIndex].name}
              </h3>
              <p className="text-gray-300 italic mb-2 text-base md:text-lg">
                {statesData[frontIndex].desc}
              </p>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                {statesData[frontIndex].detail}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-3">
            <button
              onClick={handlePrev}
              className="px-4 py-1 rounded-full bg-[#fa6304] text-black font-semibold hover:bg-[#ff8645]"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-1 rounded-full bg-[#fa6304] text-black font-semibold hover:bg-[#ff8645]"
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Card Stack */}
        <div className="relative h-[380px] w-full flex justify-center items-center mt-4 md:mt-0">
          {statesData.map((state, index) => {
            const offsetX = (index - frontIndex) * 30;
            const offsetY = Math.abs(index - frontIndex) * 10;
            const rotation = index % 2 === 0 ? 4 : -4;
            const zIndex = index === frontIndex ? 50 : 10 + index;

            return (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  x: offsetX,
                  y: offsetY,
                  rotate: rotation,
                  scale: isFront(index) ? 1 : 0.9,
                  opacity: isFront(index) ? 1 : 0.6,
                  zIndex,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute w-[300px] rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
                onClick={() => setFrontIndex(index)}
              >
                <img
                  src={state.img}
                  alt={state.name}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OperationalStates;
