 // src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Home as HomeIcon,
  Trees,
  Landmark,
  MapPinned,
  Phone,
} from "lucide-react";

// 🟢 Import Components
import AnimatedTestimonials from "../components/AnimatedTestimonials";
import AnimatedCards from "../components/AnimatedCards";
import HoverDevCards from "../components/HoverDevCards";
import HoverToMove from "../components/Hovertomove";
import StatsSection from "../components/StatsSection";
import HeroName from "../components/ui/HeroName";
import About from "../components/About";
import OperationalStates from "../components/OperationalStates";
import OurPresence from "../components/OurPresence";
import WhyUs from "../components/WhyUs";

const Home = () => {
  const navigate = useNavigate();

  // 🟢 Service Routes Mapping
  const serviceRoutes = {
    "Property On-Boarding": "/services/property-on-boarding",
    "Tenant Discovery": "/services/tenant-discovery",
    "Tenant On Board": "/services/tenant-on-board",
    "Property Inspections": "/services/property-inspections",
    "Maintenance Services": "/services/maintenance-services",
    "Personalized Dashboard": "/services/personalized-dashboard",
  };

  const handleServiceClick = (title) => {
    const route = serviceRoutes[title];
    if (route) navigate(route);
  };

  // 🟢 Icon Mapping
  const icons = {
    "Property On-Boarding": Building2,
    "Tenant Discovery": HomeIcon,
    "Tenant On Board": Trees,
    "Property Inspections": Landmark,
    "Maintenance Services": MapPinned,
    "Personalized Dashboard": Phone,
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-[#f5f8ff] via-[#eef2ff] to-[#e0e7ff] w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🌟 Hero Section */}
      <section className="w-full h-screen flex items-center justify-center">
        <HeroName words={["WELCOME", "TO", "OUR", "PORTAL"]} />
      </section>

      {/* 🌟 Our Presence Section */}
      <OurPresence />

      {/* 🏗️ What We Offer Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto">
            From residential to commercial services — we make property management seamless.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {Object.entries(serviceRoutes).map(([title], index) => {
            const IconComponent = icons[title];
            return (
              <motion.div
                key={title}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0px 10px 30px rgba(250, 99, 4, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative bg-white p-8 rounded-2xl text-left shadow-lg border border-indigo-100 
                transition-all duration-300 group h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <IconComponent
                    size={50}
                    className="text-[#fa6304] mb-4 group-hover:text-white transition-colors duration-300"
                  />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-6 group-hover:text-white transition-colors duration-300">
                    {title === "Property On-Boarding" &&
                      "We prepare the property for renting with inspections and manager support."}
                    {title === "Tenant Discovery" &&
                      "Extensive reach ensures we find the best tenants quickly."}
                    {title === "Tenant On Board" &&
                      "We conduct background checks and handle all rental paperwork."}
                    {title === "Property Inspections" &&
                      "Move-in and periodic inspections with detailed reports."}
                    {title === "Maintenance Services" &&
                      "Deep cleaning, painting, and all on-demand property maintenance."}
                    {title === "Personalized Dashboard" &&
                      "Online document vault, transaction history, and inspection reports."}
                  </p>
                  <button
                    onClick={() => handleServiceClick(title)}
                    className="bg-blue-900 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition relative z-10"
                  >
                    Know More →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 🌟 Animated Card Deck Section */}
      <section className="w-full h-screen flex items-center justify-center bg-white">
        <div className="w-full h-full">
          <AnimatedCards />
        </div>
      </section>

      {/* 🧩 WHY US Section */}
      <WhyUs />

      {/* 🌟 Work Flow Section */}
      <section className="w-full py-24 bg-gray-50">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Flow
        </motion.h2>

        <div className="w-full px-6 md:px-12 lg:px-24">
          <HoverDevCards />
        </div>
      </section>

      {/* 🌟 Stats Section */}
      <StatsSection />

      {/* 🌟 FAQ Section */}
      <section className="w-full min-h-screen bg-white flex flex-col justify-start items-center py-16 px-4 md:px-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.h2>

        <div className="w-full max-w-7xl flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-[#fa6304]/70 scrollbar-track-gray-200 rounded-2xl shadow-xl">
          <HoverToMove />
        </div>
      </section>

      {/* 🌟 Testimonials Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff9f4] via-[#ffe6cc] to-[#ffcc99] overflow-hidden">
        <div className="w-full h-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our <span className="text-orange-500">Clients Say</span>
          </motion.h2>

          <div className="w-full max-w-6xl">
            <AnimatedTestimonials />
          </div>
        </div>
      </section>

      {/* 🏢 About Section */}
      <section className="w-full">
        <About />
      </section>

      {/* 🗺️ Operational States Section */}
      <section className="w-full">
        <OperationalStates />
      </section>
    </motion.div>
  );
};

export default Home;
