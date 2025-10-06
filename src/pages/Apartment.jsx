 // src/pages/Apartment.jsx
import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Zap,
  Star,
  Quote,
  User,
  Plus,
  Minus,
  Calendar,
  MapPin,
  X,
} from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

// --- IMAGE IMPORTS ---
import heroImage from "../assets/realestate/ap_poster.png";
import apartment1 from "../assets/realestate/ap1.png";
import apartment2 from "../assets/realestate/ap2.png";
import apartment3 from "../assets/realestate/ap3.png";
import apartment4 from "../assets/realestate/ap4.png";
import apartment5 from "../assets/realestate/ap5.png";
import apartment6 from "../assets/realestate/ap6.png";
import apartment7 from "../assets/realestate/ap7.png";
import apartment8 from "../assets/realestate/ap8.png";

// --- MOCK DATA ---
const apartmentData = [
  {
    id: 1,
    slug: "apartment1",
    name: "Oceanview Apartment",
    image: apartment1,
    category: "Luxury",
    price: 250000,
    fullDescription:
      "Stunning ocean views with modern interiors. Spacious rooms with top-class amenities.",
  },
  {
    id: 2,
    slug: "apartment2",
    name: "City Center Apartment",
    image: apartment2,
    category: "Premium",
    price: 180000,
    fullDescription:
      "Located in the heart of the city, close to shopping and entertainment. Modern design and comfort.",
  },
  {
    id: 3,
    slug: "apartment3",
    name: "Garden View Apartment",
    image: apartment3,
    category: "Luxury",
    price: 220000,
    fullDescription:
      "Beautiful green views, perfect for family living. Spacious balconies and eco-friendly design.",
  },
  {
    id: 4,
    slug: "apartment4",
    name: "Penthouse Suite",
    image: apartment4,
    category: "Premium",
    price: 400000,
    fullDescription:
      "Luxurious penthouse with private terrace and city skyline views. Ideal for high-end living.",
  },
  {
    id: 5,
    slug: "apartment5",
    name: "Lakefront Apartment",
    image: apartment5,
    category: "Luxury",
    price: 300000,
    fullDescription:
      "Serene lakefront views with modern amenities. Perfect for relaxation and peaceful living.",
  },
  {
    id: 6,
    slug: "apartment6",
    name: "Modern Loft",
    image: apartment6,
    category: "Premium",
    price: 200000,
    fullDescription:
      "Industrial style lofts with open space design. Located in trendy neighborhoods.",
  },
  {
    id: 7,
    slug: "apartment7",
    name: "Suburban Apartment",
    image: apartment7,
    category: "Affordable",
    price: 120000,
    fullDescription:
      "Perfect for families seeking quiet suburban living. Spacious and well-planned interiors.",
  },
  {
    id: 8,
    slug: "apartment8",
    name: "Downtown Studio",
    image: apartment8,
    category: "Affordable",
    price: 90000,
    fullDescription:
      "Compact and modern studio apartment in the city center. Ideal for singles or couples.",
  },
];

// --- TESTIMONIALS ---
const testimonialData = [
  {
    id: 1,
    name: "Emily W.",
    stars: 5,
    quote: "Amazing apartments! The interiors and location exceeded my expectations.",
  },
  {
    id: 2,
    name: "David K.",
    stars: 5,
    quote: "The buying experience was smooth and professional. Highly recommend!",
  },
  {
    id: 3,
    name: "Sophia L.",
    stars: 5,
    quote: "Beautiful apartments with great amenities. The views are breathtaking.",
  },
];

// --- HERO SECTION ---
const HeroSection = () => (
  <motion.div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
    <motion.img
      src={heroImage}
      alt="Luxury Apartments Banner"
      className="absolute inset-0 w-full h-full object-cover blur-sm"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
    />
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Discover Your Dream Home
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-white mt-2 drop-shadow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Premium Apartments With Modern Amenities
      </motion.p>
    </div>
  </motion.div>
);

// --- CAROUSEL ---
const ApartmentCarousel = ({ apartments, onImageClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000 })]
  );
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {apartments.map((apt) => (
            <motion.div
              key={apt.id}
              className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 pl-4 cursor-pointer"
              onClick={() => onImageClick(apt.slug)}
            >
              <div className="group relative bg-white rounded-xl p-6 border border-green-300/30 text-center transition-shadow duration-300 shadow-[0_0_15px_rgba(74,222,128,0)] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]">
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-gray-900 mt-4">{apt.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 text-gray-900 p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 text-gray-900 p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

// --- PRODUCT LIST SECTION ---
const ProductListSection = ({ apartments, productRefs }) => (
  <div className="w-full max-w-7xl mx-auto py-16 px-4 space-y-24">
    {apartments.map((apt, index) => (
      <div
        key={apt.id}
        id={apt.slug}
        ref={productRefs[apt.slug]}
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12`}
      >
        <motion.div
          className={`relative group ${index % 2 !== 0 ? "md:order-last" : ""}`}
          initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-sm mx-auto aspect-square">
            <div className="absolute -inset-4 bg-green-200/40 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={apt.image}
              alt={apt.name}
              className="relative w-full h-full object-cover rounded-full shadow-2xl shadow-gray-400/50"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: index % 2 !== 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">{apt.name}</h2>
          <p className="text-3xl font-bold text-green-600 mb-5">${apt.price.toLocaleString()}</p>
          <p className="text-gray-800 leading-relaxed">{apt.fullDescription}</p>
        </motion.div>
      </div>
    ))}
  </div>
);

// --- PAST PROPERTY SHOWCASE SECTION (added from EventsPage) ---
const pastEvents = [
  {
    id: 3,
    name: "Beachside Villa Showcase",
    location: "Goa",
    date: "August 2025",
    description:
      "We showcased luxurious villas with stunning beach views. Attendees enjoyed guided tours and exclusive booking offers.",
    image: apartment7,
  },
  {
    id: 4,
    name: "Urban Condo Event",
    location: "Mumbai",
    date: "June 2025",
    description:
      "A successful condo launch event in Mumbai with interactive walkthroughs, networking opportunities, and special discounts.",
    image: apartment8,
  },
];

const PastPropertyShowcases = () => (
  <motion.section
    className="w-full max-w-7xl mx-auto px-4 py-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl font-bold text-green-900 mb-8 border-l-4 border-green-500 pl-4">
      Past Property Showcases
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pastEvents.map((event) => (
        <div
          key={event.id}
          className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg"
        >
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white">{event.name}</h3>
            <p className="text-green-400 flex items-center gap-2 mt-1">
              <MapPin size={16} /> {event.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

// --- TESTIMONIALS ---
const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="bg-green-50 py-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonialData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4"
                >
                  <div className="relative h-full bg-white p-8 rounded-xl border border-green-200/50 flex flex-col justify-between shadow-md">
                    <Quote className="absolute top-4 right-4 text-green-200/50" size={64} />
                    <div className="z-10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <User className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-gray-900 font-bold">{testimonial.name}</p>
                          <div className="flex text-yellow-500">
                            {[...Array(testimonial.stars)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/70 text-gray-900 p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/70 text-gray-900 p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ApartmentPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Luxury", "Premium", "Affordable"];
  const filteredApartments =
    filter === "All"
      ? apartmentData
      : apartmentData.filter((a) => a.category === filter);

  const productRefs = apartmentData.reduce((acc, apt) => {
    acc[apt.slug] = useRef(null);
    return acc;
  }, {});

  const handleImageClick = (slug) => {
    productRefs[slug].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = productRefs[id]?.current;
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location, productRefs]);

  return (
    <div className="bg-[#fdfbe9] min-h-screen text-gray-900 font-sans">
      <Toaster position="top-center" />
      <HeroSection />
      <main>
        <motion.div
          className="w-full max-w-7xl mx-auto py-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Our Exclusive Apartments
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore premium apartments, from luxurious penthouses to cozy studios, designed for modern living.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  filter === cat
                    ? "bg-green-600 text-white"
                    : "bg-green-100 text-gray-800 hover:bg-green-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ApartmentCarousel apartments={filteredApartments} onImageClick={handleImageClick} />
        </motion.div>

        {/* 👇 New Section Added Below Carousel */}
        <PastPropertyShowcases />

        <ProductListSection apartments={filteredApartments} productRefs={productRefs} />
        <TestimonialsSection />
      </main>
    </div>
  );
}
