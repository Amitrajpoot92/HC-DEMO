// src/pages/EventsPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, X } from "lucide-react";

// --- IMAGE IMPORTS ---
import apartment1 from "../assets/realestate/ap1.png";
import apartment2 from "../assets/realestate/ap2.png";
import apartment3 from "../assets/realestate/ap3.png";
import apartment4 from "../assets/realestate/ap4.png";
import apartment5 from "../assets/realestate/ap5.png";
import apartment6 from "../assets/realestate/ap6.png";
import apartment7 from "../assets/realestate/ap7.png";
import apartment8 from "../assets/realestate/ap8.png";

// --- MOCK DATA FOR PAST EVENTS ONLY ---
const eventsData = [
  {
    id: 3,
    status: "past",
    name: "Beachside Villa Showcase",
    location: "Goa",
    date: "August 2025",
    description:
      "We showcased luxurious villas with stunning beach views. Attendees enjoyed guided tours and exclusive booking offers.",
    image: apartment7,
    gallery: [apartment1, apartment2, apartment3, apartment4, apartment5, apartment6],
  },
  {
    id: 4,
    status: "past",
    name: "Urban Condo Event",
    location: "Mumbai",
    date: "June 2025",
    description:
      "A successful condo launch event in Mumbai with interactive walkthroughs, networking opportunities, and special discounts.",
    image: apartment8,
    gallery: [apartment4, apartment5, apartment6, apartment1, apartment2, apartment3],
  },
];

// --- EVENT MODAL ---
const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#fdfbe9] rounded-2xl border border-green-500/30 w-full max-w-5xl h-full max-h-[90vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full overflow-y-auto p-4 md:p-6 bg-white rounded-l-2xl">
            <div className="grid grid-cols-1 gap-4">
              {event.gallery.map((imgSrc, index) => (
                <motion.img
                  key={index}
                  src={imgSrc}
                  alt={`${event.name} gallery ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>
          <div className="relative flex flex-col p-8 bg-slate-900/80 rounded-r-2xl text-white">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>
            <h2 className="text-4xl font-extrabold mb-4">{event.name}</h2>
            <div className="flex items-center gap-4 text-green-400 mb-2">
              <Calendar size={20} />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-4 text-green-400 mb-6">
              <MapPin size={20} />
              <span>{event.location}</span>
            </div>
            <div className="border-t border-green-500/20 pt-6">
              <p className="text-gray-100 leading-relaxed">{event.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- EVENTS PAGE (ONLY PAST EVENTS) ---
export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const pastEvents = eventsData.filter((e) => e.status === "past");

  return (
    <div className="bg-[#fdfbe9] min-h-screen font-sans text-gray-900 py-16">
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />

      {/* Past Events Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto px-4"
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
              onClick={() => setSelectedEvent(event)}
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
    </div>
  );
}
