 // src/pages/services/PropertyInspections.jsx
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
        "PropertyInspections gave me a detailed and accurate report of my property. Extremely professional team!",
      name: "Ravi Sharma",
      designation: "Owner, Urban Apartments",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "The inspection process was smooth, transparent, and thorough. Highly recommend their services.",
      name: "Neha Singh",
      designation: "Property Manager, City Flats",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Fast, reliable, and detailed inspection reports. PropertyInspections makes property management easy.",
      name: "Amit Verma",
      designation: "Owner, Green Residency",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fa6304]/10 via-black to-[#8af6fc]/10" />
      <h2 className="text-4xl font-bold mb-10 relative z-10">
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

// ✅ Main Page Component
const PropertyInspections = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is PropertyInspections?",
      answer:
        "PropertyInspections provides professional property inspection reports to help owners and managers monitor property condition and maintenance needs efficiently.",
    },
    {
      question: "How do inspections work?",
      answer:
        "Certified inspectors visit the property, examine structural and aesthetic aspects, document findings, and provide detailed reports with photos.",
    },
    {
      question: "Can inspections be scheduled online?",
      answer:
        "Yes, inspections can be booked online at a convenient date and time through our platform.",
    },
    {
      question: "Are inspection reports reliable?",
      answer:
        "Absolutely! All reports are detailed, verified, and provide accurate representation of property conditions.",
    },
    {
      question: "Do you provide follow-up support?",
      answer:
        "Yes, our team provides guidance on maintenance priorities and any additional inspections if needed.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Property Inspection Banner"
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
            Professional Property Inspections
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Accurate, detailed, and timely inspection services for property owners and managers.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#fa6304] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#ff8645] transition"
          >
            Schedule Inspection
          </motion.button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#0a0a0a] via-black to-[#111]">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-[#8af6fc]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Keep Your Property in Top Condition
        </motion.h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          PropertyInspections provides a thorough assessment of your property’s condition. Identify issues early, plan maintenance, and ensure tenant safety and satisfaction.
        </p>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 md:px-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fa6304]/10 via-transparent to-[#8af6fc]/10" />
        <h2 className="text-4xl font-bold mb-10 text-center text-[#fa6304]">
          How Property Inspections Work
        </h2>
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {[
            {
              title: "Book Inspection",
              desc: "Schedule a property inspection online at a convenient date and time.",
              icon: <ClipboardList className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "On-Site Assessment",
              desc: "Certified inspector visits your property and examines all key aspects.",
              icon: <Home className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Detailed Report",
              desc: "Receive a comprehensive report with images, condition notes, and recommendations.",
              icon: <FileText className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Maintenance Advice",
              desc: "Professional guidance on priority repairs and upkeep for your property.",
              icon: <CheckCircle className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Follow-Up Support",
              desc: "Our team is available for any queries or additional inspections if needed.",
              icon: <Camera className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Record Management",
              desc: "All reports are stored digitally for future reference and compliance.",
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

      {/* Benefits */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#111] via-black to-[#0a0a0a]">
        <h2 className="text-4xl font-bold mb-10 text-center text-[#8af6fc]">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Certified and professional inspectors",
            "Accurate and detailed reports",
            "Quick and efficient inspections",
            "Digital records for easy access",
            "Expert advice for maintenance planning",
            "Peace of mind for property owners",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-[#181818] rounded-xl border border-[#8af6fc]/20 shadow-lg hover:border-[#8af6fc]/50 transition"
            >
              <CheckCircle className="w-8 h-8 text-[#fa6304] mt-1" />
              <p className="text-gray-300">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Animated Testimonials Section */}
      <AnimatedTestimonials />

      {/* FAQs */}
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
                    transition={{ duration: 0.4, ease: "easeInOut" }}
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

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-[#fa6304] to-[#8af6fc] text-black">
        <h2 className="text-4xl font-bold mb-4">
          Schedule Your Property Inspection Today
        </h2>
        <p className="mb-6 text-lg text-black/80">
          Ensure your property remains in top condition with our professional inspection services.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-black text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          Schedule Inspection
        </motion.button>
      </section>
    </div>
  );
};

export default PropertyInspections;
