 // src/components/OurPresence.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import Delhi from "../assets/states/Delhi.png";
import Bangalore from "../assets/states/Bangalore.png";
import Goa from "../assets/states/Goa.png";
import Haryana from "../assets/states/Haryana.png";
import Lucknow from "../assets/states/Lucknow.png";
import Mumbai from "../assets/states/Mumbai.png";

// Top 30 cities
const cities = [
  { name: "Delhi", impact: "500+ Properties" },
  { name: "Mumbai", impact: "480+ Properties" },
  { name: "Bangalore", impact: "450+ Properties" },
  { name: "Hyderabad", impact: "420+ Properties" },
  { name: "Chennai", impact: "400+ Properties" },
  { name: "Kolkata", impact: "380+ Properties" },
  { name: "Pune", impact: "360+ Properties" },
  { name: "Ahmedabad", impact: "340+ Properties" },
  { name: "Jaipur", impact: "320+ Properties" },
  { name: "Lucknow", impact: "300+ Properties" },
  { name: "Kanpur", impact: "280+ Properties" },
  { name: "Nagpur", impact: "260+ Properties" },
  { name: "Indore", impact: "240+ Properties" },
  { name: "Thane", impact: "220+ Properties" },
  { name: "Bhopal", impact: "200+ Properties" },
  { name: "Visakhapatnam", impact: "180+ Properties" },
  { name: "Patna", impact: "160+ Properties" },
  { name: "Vadodara", impact: "140+ Properties" },
  { name: "Ghaziabad", impact: "120+ Properties" },
  { name: "Ludhiana", impact: "100+ Properties" },
  { name: "Agra", impact: "90+ Properties" },
  { name: "Nashik", impact: "80+ Properties" },
  { name: "Faridabad", impact: "70+ Properties" },
  { name: "Meerut", impact: "60+ Properties" },
  { name: "Rajkot", impact: "50+ Properties" },
  { name: "Kochi", impact: "40+ Properties" },
  { name: "Coimbatore", impact: "30+ Properties" },
  { name: "Vijayawada", impact: "20+ Properties" },
  { name: "Jabalpur", impact: "10+ Properties" },
  { name: "Guwahati", impact: "5+ Properties" },
];

const images = [Delhi, Bangalore, Goa, Haryana, Lucknow, Mumbai];

const OurPresence = () => {
  const [index, setIndex] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % cities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleCities = [cities[index], cities[(index + 1) % cities.length]];

  return (
    <section
      className="text-white py-16 px-4 md:px-8"
      style={{
        background:
          "linear-gradient(135deg, #fa6304 0%, #ffffff 40%, #8af6fc 100%)",
        backgroundSize: "200% 200%",
        animation: "smoothGradient 8s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes smoothGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-10">
        {/* Left Side: Heading */}
        <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-[#ffffff]"
            style={{
              WebkitTextStroke: "1px #fa6304",
              textShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            Our Presence
          </h2>
          <p className="text-gray-800 font-medium text-lg md:text-xl">
            Our Impactful and Extensive Global Reach
          </p>
        </div>

        {/* Right Side: Cards Carousel */}
        <div
          className="md:w-2/3 flex items-center justify-center overflow-hidden relative"
          style={{ height: "calc(120px + 16px*2)" }}
        >
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
              className="grid grid-cols-2 gap-6 w-full"
            >
              {visibleCities.map((city, i) => {
                const img = images[(index + i) % images.length];
                return (
                  <div
                    key={city.name}
                    className="relative bg-white/20 p-5 rounded-3xl backdrop-blur-lg border border-white/30 shadow-lg cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex items-center gap-6"
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[#fa6304] drop-shadow-md">
                        {city.name}
                      </h3>
                      <p className="text-gray-900 text-lg font-semibold">
                        {city.impact}
                      </p>
                    </div>
                    <img
                      src={img}
                      alt={city.name}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl border border-white/40"
                    />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#fa630422] via-[#ffffff55] to-[#8af6fc33] blur-lg opacity-60"></div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
