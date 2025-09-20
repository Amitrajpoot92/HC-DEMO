import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, X, ShoppingCart, Zap } from "lucide-react";

// --- CORRECTED IMAGE IMPORTS ---
// Images from 'src' must be imported using relative paths
import heroImage from "../assets/hero.webp";
import img1 from "../assets/mushrooms/Img1.png";
import img2 from "../assets/mushrooms/Img2.png";
import img3 from "../assets/mushrooms/Img3.png";
import img4 from "../assets/mushrooms/Img4.png";
import img5 from "../assets/mushrooms/Img5.png";
import img6 from "../assets/mushrooms/Img6.png";

// --- MOCK DATA: Now using imported images ---
const mushroomData = [
  {
    id: 1,
    name: "Shiitake",
    image: img1,
    shortDescription: "Earthy and smoky, perfect for stir-fries.",
    fullDescription:
      "Shiitake mushrooms are prized for their rich, savory taste and health benefits. They have been a culinary staple in Asia for hundreds of years and are excellent in soups, sauces, and as a meat substitute.",
    price: 12.99,
  },
  {
    id: 2,
    name: "Oyster",
    image: img2,
    shortDescription: "Delicate, mild flavor with a velvety texture.",
    fullDescription:
      "Oyster mushrooms are named for their fan-like shape. They have a subtle, delicate flavor and are incredibly versatile, making them a favorite for sautés, pastas, and soups.",
    price: 10.5,
  },
  {
    id: 3,
    name: "Lion's Mane",
    image: img3,
    shortDescription: "Unique seafood-like taste, often compared to crab.",
    fullDescription:
      "Lion's Mane is a unique mushroom with a shaggy appearance. It is renowned for its crab or lobster-like flavor and texture, as well as its potential neuroprotective benefits.",
    price: 18.0,
  },
  {
    id: 4,
    name: "Portobello",
    image: img4,
    shortDescription: "Large, meaty, and perfect for grilling or stuffing.",
    fullDescription:
      "Portobello mushrooms are mature cremini mushrooms with a deep, meaty texture and flavor. They are a fantastic, hearty vegetarian option for grilling as burgers or stuffing.",
    price: 8.75,
  },
  {
    id: 5,
    name: "Morel",
    image: img5,
    shortDescription: "A rare, prized delicacy with a nutty, woodsy flavor.",
    fullDescription:
      "Morels are a gourmet wild mushroom with a distinctive honeycomb appearance. They cannot be farmed, making them a rare and sought-after ingredient by chefs worldwide for their complex, earthy flavor.",
    price: 45.0,
  },
  {
    id: 6,
    name: "Chanterelle",
    image: img6,
    shortDescription: "Fruity aroma and a peppery, delicate taste.",
    fullDescription:
      "Golden Chanterelles are one of the most popular wild mushrooms. They are known for their beautiful color, slightly fruity aroma, and a taste that is subtly peppery and delicious.",
    price: 25.0,
  },
];

const HeroSection = () => (
  <motion.div
    className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.img
      src={heroImage}
      alt="Exotic Mushrooms Banner"
      className="absolute inset-0 w-full h-full object-cover blur-sm"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10 text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Discover Nature's Finest Fungi
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-green-200 mt-2 drop-shadow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        Fresh, Organic, and Delivered to Your Door
      </motion.p>
    </div>
  </motion.div>
);

const MushroomCarousel = ({ onMushroomClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2000 })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
        Our Signature Collection
      </h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {mushroomData.map((mushroom) => (
              <motion.div
                className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 pl-4"
                key={mushroom.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="group relative bg-slate-800/50 rounded-xl p-6 border border-green-500/20 cursor-pointer transition-all duration-300 text-center shadow-[0_0_15px_rgba(74,222,128,0)] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] hover:border-green-500/50"
                  onClick={() => onMushroomClick(mushroom)}
                >
                  <img
                    src={mushroom.image}
                    alt={mushroom.name}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-white mt-4">
                    {mushroom.name}
                  </h3>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 bg-slate-800/50 text-white p-2 rounded-full hover:bg-green-500 transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 bg-slate-800/50 text-white p-2 rounded-full hover:bg-green-500 transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const MushroomModal = ({ mushroom, onClose }) => {
  if (!mushroom) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-slate-900 rounded-2xl border border-green-500/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
          <div className="w-full h-full">
            <img
              src={mushroom.image}
              alt={mushroom.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl font-extrabold text-white mb-2">
              {mushroom.name}
            </h2>
            <p className="text-2xl font-bold text-green-400 mb-4">
              ${mushroom.price.toFixed(2)}
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              {mushroom.fullDescription}
            </p>
            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
                <Zap size={20} /> Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function MushroomsPage() {
  const [selectedMushroom, setSelectedMushroom] = useState(null);

  const handleMushroomClick = (mushroom) => {
    setSelectedMushroom(mushroom);
  };

  const handleCloseModal = () => {
    setSelectedMushroom(null);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
      <HeroSection />
      <main>
        <MushroomCarousel onMushroomClick={handleMushroomClick} />
      </main>
      <MushroomModal mushroom={selectedMushroom} onClose={handleCloseModal} />
    </div>
  );
}
