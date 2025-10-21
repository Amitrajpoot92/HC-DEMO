 // src/pages/services/MaintenanceServices.jsx
"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  FileText,
  Camera,
  Home,
  ClipboardList,
  Globe,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../../assets/realestate/ap3.png";

// ✅ Animated Testimonials Component
const AnimatedTestimonials = () => {
  const testimonials = [
    {
      quote:
        "The maintenance team is always prompt and professional. Their service has kept our property in perfect condition.",
      name: "Ravi Sharma",
      designation: "Owner, Urban Apartments",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Quick response and excellent workmanship. The platform makes scheduling maintenance hassle-free.",
      name: "Neha Singh",
      designation: "Property Manager, City Flats",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Reliable, efficient, and professional. Maintenance has never been easier.",
      name: "Amit Verma",
      designation: "Owner, Green Residency",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fa6304]/10 via-black to-[#8af6fc]/10" />
      <h2 className="text-4xl font-bold mb-10 relative z-10 text-[#8af6fc]">
        What Our Clients Say
      </h2>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <motion.img
            src={testimonials[active].src}
            alt={testimonials[active].name}
            className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-[#fa6304]/50"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-left">
            <p className="text-lg italic text-gray-300 mb-4">
              “{testimonials[active].quote}”
            </p>
            <h3 className="text-2xl font-semibold text-[#fa6304]">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-400">
              {testimonials[active].designation}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ✅ Main Component
const MaintenanceServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of maintenance services do you provide?",
      answer:
        "We provide electrical, plumbing, HVAC, carpentry, painting, cleaning, and general repair services for residential and commercial properties.",
    },
    {
      question: "How can I schedule a maintenance request?",
      answer:
        "You can schedule a service request directly from your dashboard or by contacting our customer support.",
    },
    {
      question: "What is the response time for maintenance requests?",
      answer:
        "Our team responds within 24 hours for general requests, and urgent cases are prioritized for immediate attention.",
    },
    {
      question: "Are your technicians certified?",
      answer:
        "Yes, all our technicians are trained, certified, and background-checked to ensure high-quality service.",
    },
    {
      question: "Do you provide service guarantees?",
      answer:
        "Yes, we provide a 30-day satisfaction guarantee for all maintenance services completed through our platform.",
    },
  ];

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Maintenance Services Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#fa6304] mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Maintenance Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            From repairs to regular upkeep — we ensure your property remains in
            perfect condition with professional care.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#fa6304] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#ff8645] transition"
          >
            Schedule Service Now
          </motion.button>
        </div>
      </section>

      {/* ---------------- INTRO SECTION ---------------- */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#0a0a0a] via-black to-[#111]">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-[#8af6fc]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hassle-Free Property Maintenance
        </motion.h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          Maintaining a property can be stressful. Our Maintenance Services make
          it simple — from preventive care to emergency repairs, handled by
          certified professionals.
        </p>
      </section>

      {/* ---------------- PROCESS SECTION ---------------- */}
      <section className="py-20 px-6 md:px-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fa6304]/10 via-transparent to-[#8af6fc]/10" />
        <h2 className="text-4xl font-bold mb-10 text-center text-[#fa6304]">
          Our Process (Step-by-Step)
        </h2>
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {[
            {
              title: "Request Service",
              desc: "Submit a maintenance request online with details about your issue.",
              icon: <ClipboardList className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Assign Technician",
              desc: "We assign a certified technician suited for your specific service.",
              icon: <FileText className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "On-Site Service",
              desc: "Technician visits your property for inspection or repair work.",
              icon: <Home className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Quality Check",
              desc: "All work is verified to meet our high-quality standards.",
              icon: <CheckCircle className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Documentation",
              desc: "You receive reports and invoices in your online dashboard.",
              icon: <Camera className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Follow-Up & Support",
              desc: "Post-service support and preventive tips are provided.",
              icon: <Globe className="w-10 h-10 text-[#8af6fc]" />,
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-[#111]/80 border border-[#fa6304]/20 shadow-lg hover:shadow-[#fa6304]/40 hover:scale-105 transition transform"
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-center text-[#fa6304] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300 text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- BENEFITS SECTION ---------------- */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#111] via-black to-[#0a0a0a]">
        <h2 className="text-4xl font-bold mb-10 text-center text-[#8af6fc]">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Certified and experienced technicians",
            "Quick response and transparent pricing",
            "Digital reports and invoices",
            "Preventive maintenance for long-term savings",
            "Online scheduling and tracking",
            "Peace of mind for property owners",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-[#111]/80 border border-[#fa6304]/20 rounded-xl shadow hover:shadow-[#fa6304]/40 transition"
            >
              <CheckCircle className="w-8 h-8 text-[#fa6304] mt-1" />
              <p className="text-gray-300 font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <AnimatedTestimonials />

      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="py-20 px-6 md:px-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#8af6fc]/10 via-transparent to-[#fa6304]/10" />
        <h2 className="text-4xl font-bold mb-8 text-center text-[#fa6304]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111]/80 border border-[#8af6fc]/20 rounded-2xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-100"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#8af6fc]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-4 pb-4 text-gray-300 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="py-20 text-center bg-gradient-to-r from-[#fa6304] to-[#8af6fc] text-black">
        <h2 className="text-4xl font-bold mb-4">Keep Your Property in Shape</h2>
        <p className="mb-6 text-lg">
          Let us handle your maintenance — trusted, fast, and reliable service.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-black text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          Schedule a Service
        </motion.button>
      </section>
    </div>
  );
};

export default MaintenanceServices;
