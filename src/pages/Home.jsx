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
import HoverToMove from "../components/Hovertomove"; // ✅ FAQ Component
import StatsSection from "../components/StatsSection";
import HeroName from "../components/ui/HeroName";
import About from "../components/About"; // ✅ About section
import OperationalStates from "../components/OperationalStates"; // ✅ Operational States
import OurPresence from "../components/OurPresence"; // ✅ Newly added component

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Object.entries(serviceRoutes).map(([title], index) => {
            const icons = [Building2, HomeIcon, Trees, Landmark, MapPinned, Phone];
            const IconComponent = icons[index];

            return (
              <div
                key={title}
                className="bg-indigo-50 p-8 rounded-2xl text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#fa6304] group h-full flex flex-col justify-between"
              >
                <IconComponent
                  size={48}
                  className="text-black group-hover:text-white transition"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 group-hover:text-white transition">
                  {title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm group-hover:text-white transition">
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
                  className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                  onClick={() => handleServiceClick(title)}
                >
                  Know More
                </button>
              </div>
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

      {/* 🌟 Hover Developer Cards Section */}
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
        >
          Frequently Asked Questions
        </motion.h2>

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

          {/* ✅ Testimonials full-screen version */}
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
