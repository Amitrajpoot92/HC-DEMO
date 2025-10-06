// src/pages/Home.jsx

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Building2,
  Home as HomeIcon,
  Trees,
  Landmark,
  MapPinned,
  Phone,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

// 🖼️ Real Estate Images
import heroImage from "../assets/realestate/hero-realestate.webp";
import apartmentImg from "../assets/realestate/apartment.webp";
import villaImg from "../assets/realestate/villa.webp";
import farmhouseImg from "../assets/realestate/farmhouse.webp";
import commercialImg from "../assets/realestate/commercial.webp";
import landImg from "../assets/realestate/land.webp";

// 🏘️ Property Data
const properties = [
  {
    id: 1,
    name: "Modern Apartments",
    image: apartmentImg,
    desc: "Affordable and stylish apartments located in prime city areas.",
    slug: "apartment",
  },
  {
    id: 2,
    name: "Luxury Villas",
    image: villaImg,
    desc: "Spacious villas offering comfort, elegance, and privacy.",
    slug: "villa",
  },
  {
    id: 3,
    name: "Peaceful Farmhouses",
    image: farmhouseImg,
    desc: "Perfect weekend getaways surrounded by nature.",
    slug: "farmhouse",
  },
  {
    id: 4,
    name: "Commercial Spaces",
    image: commercialImg,
    desc: "Ideal properties for offices, showrooms, and startups.",
    slug: "commercial",
  },
  {
    id: 5,
    name: "Open Land & Plots",
    image: landImg,
    desc: "Invest in future-ready lands at growing locations.",
    slug: "land",
  },
];

// 🏡 Property Carousel
const PropertyCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000 })]
  );

  const navigate = useNavigate();

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const handleCardClick = (slug) => {
    navigate(`/${slug}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-20 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Featured Properties
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {properties.map((p) => (
            <div
              key={p.id}
              className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-6 cursor-pointer"
              onClick={() => handleCardClick(p.slug)}
            >
              <div className="bg-white rounded-2xl p-5 shadow-lg transition-all duration-300 border border-gray-200 flex flex-col sm:flex-row items-center gap-6 hover:bg-[#fa6304] hover:shadow-2xl group">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-40 h-40 object-cover rounded-xl"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition">
                    {p.name}
                  </h3>
                  <p className="text-gray-700 text-sm group-hover:text-white transition">
                    {p.desc.length > 60 ? p.desc.slice(0, 60) + "..." : p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-indigo-500 hover:text-white"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-indigo-500 hover:text-white"
      >
        ▶
      </button>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  // 🟢 Updated Mapping card titles to App.jsx lowercase routes
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
      className="bg-gradient-to-b from-[#f5f8ff] via-[#eef2ff] to-[#e0e7ff] min-h-screen px-6 md:px-12 py-16 flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🔹 Hero Section */}
      <div className="flex flex-wrap gap-12 justify-between max-w-6xl w-full">
        {/* Left Text */}
        <div className="flex-1 text-gray-900 min-w-[300px]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            UrbanFungi Estates <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
              Discover Your Dream Property
            </span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Buy, rent, or invest in apartments, villas, farmhouses, and
            commercial properties — all verified and trusted by experts.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/apartment">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Explore Properties
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Contact Agent
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center min-w-[300px]">
          <img
            src={heroImage}
            alt="Real estate preview"
            className="max-w-full rounded-xl shadow-2xl border-4 border-indigo-200"
          />
        </div>
      </div>

      {/* Middle Heading */}
      <div className="w-full mt-28 flex justify-center">
        <div className="text-gray-900 text-2xl md:text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2 rounded-full inline-block shadow-md">
          Find Your Perfect Home, Workspace, or Investment.
        </div>
      </div>

      {/* 🔥 Carousel Section */}
      <PropertyCarousel />

      {/* 🏗️ What We Offer Section */}
      <section className="w-full max-w-6xl mt-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            From residential to commercial services — we make property management seamless.
          </p>
        </div>

        {/* Updated Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(serviceRoutes).map(([title, route], index) => {
            const icons = [Building2, HomeIcon, Trees, Landmark, MapPinned, Phone];
            const IconComponent = icons[index];

            return (
              <div
                key={title}
                className="bg-indigo-50 p-6 rounded-xl text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#fa6304] group h-full flex flex-col justify-between"
              >
                <IconComponent size={48} className="text-black group-hover:text-white transition" />
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 group-hover:text-white transition">
                  {title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm group-hover:text-white transition">
                  {title === "Property On-Boarding" && "We prepare the property for renting with inspections and manager support."}
                  {title === "Tenant Discovery" && "Extensive reach ensures we find the best tenants quickly."}
                  {title === "Tenant On Board" && "We conduct background checks and handle all rental paperwork."}
                  {title === "Property Inspections" && "Move-in and periodic inspections with detailed reports."}
                  {title === "Maintenance Services" && "Deep cleaning, painting, and all on-demand property maintenance."}
                  {title === "Personalized Dashboard" && "Online document vault, transaction history, and inspection reports."}
                </p>
                <button
                  className="bg-blue-900 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
                  onClick={() => handleServiceClick(title)}
                >
                  Know More
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
