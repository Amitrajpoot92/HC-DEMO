import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ShoppingCart,
  Zap,
  Star,
  Quote,
  User,
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

// --- IMAGE IMPORTS ---
import heroImage from "../assets/hero.webp";
import img1 from "../assets/mushrooms/Img1.png";
import img2 from "../assets/mushrooms/Img2.png";
import img3 from "../assets/mushrooms/Img3.png";
import img4 from "../assets/mushrooms/Img4.png";
import img5 from "../assets/mushrooms/Img5.png";
import img6 from "../assets/mushrooms/Img6.png";

// --- MOCK DATA ---
const mushroomData = [
  {
    id: 1,
    name: "Shiitake",
    image: img1,
    category: "Culinary",
    price: 12.99,
    fullDescription:
      "Shiitake mushrooms are prized for their rich, savory taste and health benefits. They are excellent in soups, sauces, and as a meat substitute.",
  },
  {
    id: 2,
    name: "Oyster",
    image: img2,
    category: "Gourmet",
    price: 10.5,
    fullDescription:
      "Oyster mushrooms have a subtle, delicate flavor and are incredibly versatile, making them a favorite for sautés, pastas, and soups.",
  },
  {
    id: 3,
    name: "Lion's Mane",
    image: img3,
    category: "Medicinal",
    price: 18.0,
    fullDescription:
      "Lion's Mane is renowned for its crab or lobster-like flavor and its potential neuroprotective benefits.",
  },
  {
    id: 4,
    name: "Portobello",
    image: img4,
    category: "Culinary",
    price: 8.75,
    fullDescription:
      "Portobello mushrooms are a fantastic, hearty vegetarian option for grilling as burgers or stuffing due to their deep, meaty texture.",
  },
  {
    id: 5,
    name: "Morel",
    image: img5,
    category: "Gourmet",
    price: 45.0,
    fullDescription:
      "Morels are a gourmet wild mushroom sought-after by chefs worldwide for their complex, earthy flavor.",
  },
  {
    id: 6,
    name: "Chanterelle",
    image: img6,
    category: "Gourmet",
    price: 25.0,
    fullDescription:
      "Golden Chanterelles are known for their beautiful color, slightly fruity aroma, and a taste that is subtly peppery.",
  },
];

// --- NEW TESTIMONIAL DATA (8 Reviews) ---
const testimonialData = [
  {
    id: 1,
    name: "Sarah L.",
    stars: 5,
    quote:
      "The freshest shiitake I've ever had. Made my stir-fry incredible and the delivery was so fast!",
  },
  {
    id: 2,
    name: "Mike R.",
    stars: 5,
    quote:
      "I tried the Lion's Mane for its health benefits, and I'm amazed. The quality is top-notch.",
  },
  {
    id: 3,
    name: "Jessica Chen",
    stars: 5,
    quote:
      "MushroomMart is my go-to for gourmet mushrooms. The Chanterelles were perfect for my risotto.",
  },
  {
    id: 4,
    name: "David Kim",
    stars: 5,
    quote:
      "The Monthly Discovery Box is fantastic! It's a joy to try a new, exotic mushroom every month.",
  },
  {
    id: 5,
    name: "Emily White",
    stars: 4,
    quote:
      "Great quality Portobellos, perfect for grilling. The website is beautiful and easy to use.",
  },
  {
    id: 6,
    name: "Tom Hernandez",
    stars: 5,
    quote:
      "As a chef, I rely on quality ingredients. MushroomMart delivers every single time. The morels were exceptional.",
  },
  {
    id: 7,
    name: "Chloe Garcia",
    stars: 5,
    quote:
      "The packaging is excellent, ensuring the mushrooms arrive fresh and undamaged. Highly recommend!",
  },
  {
    id: 8,
    name: "Ben Carter",
    stars: 5,
    quote:
      "I'm new to cooking with gourmet mushrooms, and this site has made it so accessible. The oyster mushrooms were a great start.",
  },
];

// --- HERO SECTION ---
const HeroSection = () => (
  <motion.div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
    <motion.img
      src={heroImage}
      alt="Exotic Mushrooms Banner"
      className="absolute inset-0 w-full h-full object-cover blur-sm"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
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
       // Fresh, Organic, and Delivered to Your Door
      </motion.p>
    </div>
  </motion.div>
);

// --- MUSHROOM CAROUSEL ---
const MushroomCarousel = ({ mushrooms, onMushroomClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000 })]
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
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {mushrooms.map((mushroom) => (
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
  );
};

// --- REDESIGNED TESTIMONIALS CAROUSEL (Corrected Arrow Centering) ---
const TestimonialsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className="bg-slate-900/50 py-16">
            {/* The 'relative' class has been REMOVED from this container */}
            <div className="w-full max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
                
                {/* This NEW 'relative' wrapper now correctly positions the arrows */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {testimonialData.map((testimonial) => (
                                <div className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4" key={testimonial.id}>
                                    <div className="relative h-full bg-slate-800 p-8 rounded-xl border border-green-500/20 flex flex-col justify-between">
                                        <Quote className="absolute top-4 right-4 text-green-500/10" size={64} />
                                        <div className="z-10">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mr-4">
                                                    <User className="text-green-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold">{testimonial.name}</p>
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(testimonial.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollPrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-800/50 text-white p-2 rounded-full hover:bg-green-500 transition-colors z-10"><ChevronLeft size={24} /></button>
                    <button onClick={scrollNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-800/50 text-white p-2 rounded-full hover:bg-green-500 transition-colors z-10"><ChevronRight size={24} /></button>
                </div>
            </div>
        </div>
    );
};

// --- PRODUCT MODAL ---
const MushroomModal = ({ mushroom, onClose }) => {
  if (!mushroom) return null;
  const handleAddToCart = () => {
    toast.success(`${mushroom.name} added to cart!`, {
      style: { background: "#1e293b", color: "#fff" },
      iconTheme: { primary: "#22c55e", secondary: "#fff" },
    });
  };
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
          <img
            src={mushroom.image}
            alt={mushroom.name}
            className="w-full h-full object-cover rounded-xl"
          />
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
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
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

// --- MAIN PAGE COMPONENT ---
export default function MushroomsPage() {
  const [selectedMushroom, setSelectedMushroom] = useState(null);
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Culinary", "Gourmet", "Medicinal"];
  const filteredMushrooms =
    filter === "All"
      ? mushroomData
      : mushroomData.filter((m) => m.category === filter);

  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Our Signature Collection
          </h2>
          <div className="flex justify-center gap-2 md:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors ${
                  filter === category
                    ? "bg-green-600 text-white"
                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <MushroomCarousel
            mushrooms={filteredMushrooms}
            onMushroomClick={setSelectedMushroom}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <TestimonialsSection />
        </motion.div>
      </main>
      <MushroomModal
        mushroom={selectedMushroom}
        onClose={() => setSelectedMushroom(null)}
      />
    </div>
  );
}
