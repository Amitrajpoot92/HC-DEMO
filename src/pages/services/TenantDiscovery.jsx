 "use client";
import React, { useState } from "react";
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
import heroImage from "../../assets/realestate/ap_poster.png";

// ✅ Animated Testimonials Component
const AnimatedTestimonials = () => {
  const testimonials = [
    {
      quote:
        "The platform helped me find tenants quickly. The process is smooth and reliable.",
      name: "Ravi Sharma",
      designation: "Owner, Urban Apartments",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Tenant screening was thorough and transparent. I now have trustworthy tenants without hassle.",
      name: "Neha Singh",
      designation: "Property Manager, City Flats",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Easy-to-use platform and quick results. Finding tenants has never been this efficient.",
      name: "Amit Verma",
      designation: "Owner, Green Residency",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  const [active, setActive] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fa6304]/10 via-black to-[#8af6fc]/10" />
      <h2 className="text-4xl font-bold mb-10 relative z-10">
        What Our Users Say
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

// ✅ Main Page Component
const TenantDiscovery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does Tenant Discovery work?",
      answer:
        "List your property, get verified tenant profiles, and connect with tenants directly for smooth renting.",
    },
    {
      question: "Is tenant screening included?",
      answer:
        "Yes, we provide background and credit checks for tenants to ensure reliable occupancy.",
    },
    {
      question: "Can I schedule viewings through the platform?",
      answer:
        "Absolutely! You can schedule property viewings and track tenant interactions via your dashboard.",
    },
    {
      question: "Are there any fees for using Tenant Discovery?",
      answer:
        "Our platform charges a small service fee for successful tenant placements. Listing and browsing are free.",
    },
    {
      question: "Is my property information secure?",
      answer:
        "Yes, all data is encrypted and only shared with potential tenants with your permission.",
    },
  ];

  const toggleFAQ = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Tenant Discovery Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#fa6304] mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Discover Reliable Tenants for Your Property
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            From screening to secure agreements, find the perfect match for your property.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#fa6304] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#ff8645] transition"
          >
            List Your Property Now
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
          Hassle-Free Tenant Discovery
        </motion.h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          Finding reliable tenants can be challenging. TenantDiscovery makes it simple — list your property, 
          get verified tenant profiles, schedule viewings, and connect securely with tenants all in one platform.
        </p>
      </section>

      {/* ---------------- PROCESS SECTION ---------------- */}
      <section className="py-20 px-6 md:px-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fa6304]/10 via-transparent to-[#8af6fc]/10" />
        <h2 className="text-4xl font-bold mb-10 text-center text-[#fa6304]">
          How Tenant Discovery Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {[
            { title: "List Property", desc: "Submit property details and images.", icon: <ClipboardList /> },
            { title: "Tenant Screening", desc: "Get verified tenant profiles.", icon: <FileText /> },
            { title: "Schedule Viewings", desc: "Arrange visits via dashboard.", icon: <Home /> },
            { title: "Secure Agreements", desc: "Generate and share digital contracts.", icon: <CheckCircle /> },
            { title: "Track Interactions", desc: "Monitor all tenant activity easily.", icon: <Camera /> },
            { title: "Ongoing Support", desc: "Assistance for any platform queries.", icon: <Globe /> },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-[#111]/80 border border-[#fa6304]/20 shadow-lg hover:shadow-[#fa6304]/40 hover:scale-105 transition transform"
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-4 text-[#8af6fc]">
                {React.cloneElement(step.icon, { className: "w-10 h-10" })}
              </div>
              <h3 className="text-xl font-semibold text-center text-[#fa6304] mb-2">{step.title}</h3>
              <p className="text-gray-300 text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- BENEFITS ---------------- */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#111] via-black to-[#0a0a0a]">
        <h2 className="text-4xl font-bold mb-10 text-center text-[#8af6fc]">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Verified tenant profiles for peace of mind",
            "Quick tenant placement",
            "Transparent communication and agreements",
            "Online scheduling of viewings",
            "Secure property information",
            "Centralized dashboard for easy management",
          ].map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-[#181818] rounded-xl border border-[#8af6fc]/20 shadow-lg hover:border-[#8af6fc]/50 transition"
            >
              <CheckCircle className="w-8 h-8 text-[#fa6304] mt-1" />
              <p className="text-gray-300">{b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <AnimatedTestimonials />

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#fa6304]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111] border border-[#fa6304]/30 rounded-2xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-200"
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
                    transition={{ duration: 0.4 }}
                    className="px-4 pb-4 text-gray-400"
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
        <h2 className="text-4xl font-bold mb-4">
          Start finding reliable tenants today.
        </h2>
        <p className="mb-6 text-lg text-black/80">
          List your property on TenantDiscovery and connect with trusted tenants effortlessly.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-black text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default TenantDiscovery;
