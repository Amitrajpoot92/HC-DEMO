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
import heroImage from "../../assets/realestate/ap3.png";

// ✅ Animated Testimonials Component
const AnimatedTestimonials = () => {
  const testimonials = [
    {
      quote:
        "The personalized dashboard makes managing my properties and requests super easy!",
      name: "Ravi Sharma",
      designation: "Property Owner, Urban Apartments",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "I can track maintenance requests, payments, and tenant details all in one place.",
      name: "Neha Singh",
      designation: "Property Manager, City Flats",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "The dashboard is user-friendly and keeps all my property info organized.",
      name: "Amit Verma",
      designation: "Owner, Green Residency",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fa6304]/10 via-black to-[#8af6fc]/10" />
      <h2 className="text-4xl font-bold mb-10 relative z-10 text-[#fa6304]">
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

// ✅ Main Dashboard Page Component
const PersonalizedDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What can I do from the dashboard?",
      answer:
        "You can manage your properties, track maintenance requests, view tenant info, payments, and important notifications—all in one place.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, all your information is securely stored and encrypted. Only authorized users can access your dashboard.",
    },
    {
      question: "Can I view past requests and history?",
      answer:
        "Absolutely! The dashboard provides complete history of maintenance requests, payments, and interactions.",
    },
    {
      question: "Can multiple users access the dashboard?",
      answer:
        "Yes, you can provide access to team members or property managers with customized permissions.",
    },
    {
      question: "Is it mobile-friendly?",
      answer:
        "Yes, the dashboard is fully responsive and works seamlessly on desktop, tablet, and mobile devices.",
    },
  ];

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Dashboard Banner"
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
            Your Personalized Dashboard
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Manage properties, tenants, and maintenance efficiently — all in one place.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#fa6304] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#ff8645] transition"
          >
            Go to Dashboard
          </motion.button>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#0a0a0a] via-black to-[#111]">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-[#8af6fc]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Streamlined Property Management
        </motion.h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          Our personalized dashboard centralizes your property management tasks — 
          track requests, payments, tenant info, and notifications effortlessly.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 md:px-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fa6304]/10 via-transparent to-[#8af6fc]/10" />
        <h2 className="text-4xl font-bold mb-10 text-center text-[#fa6304]">
          Dashboard Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {[
            {
              title: "Manage Properties",
              desc: "View and control all your properties from one centralized dashboard.",
              icon: <Home className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Track Maintenance",
              desc: "Submit, monitor, and manage maintenance requests efficiently.",
              icon: <ClipboardList className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Tenant Info & Payments",
              desc: "Access tenant details and track rent or payment records.",
              icon: <FileText className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Real-Time Notifications",
              desc: "Stay updated with instant alerts and activity reports.",
              icon: <Globe className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Secure Documents",
              desc: "Store and manage property documents safely online.",
              icon: <Camera className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "24/7 Support",
              desc: "Dedicated support for your property management queries.",
              icon: <CheckCircle className="w-10 h-10 text-[#8af6fc]" />,
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl bg-[#111]/80 border border-[#fa6304]/20 shadow-lg hover:shadow-[#fa6304]/40 hover:scale-105 transition"
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-center text-[#fa6304] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#111] via-black to-[#0a0a0a]">
        <h2 className="text-4xl font-bold mb-10 text-center text-[#8af6fc]">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Centralized property management system",
            "Real-time tracking of requests and updates",
            "Secure document storage",
            "Tenant info & payment tracking",
            "Instant notifications and reports",
            "Mobile-friendly responsive interface",
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

      {/* TESTIMONIALS */}
      <AnimatedTestimonials />

      {/* FAQ SECTION */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#fa6304]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111] border border-[#8af6fc]/20 rounded-2xl shadow-md"
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
                  <ChevronDown className="w-5 h-5 text-[#fa6304]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 pb-4 text-gray-400 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-gradient-to-r from-[#fa6304] to-[#ff8645] text-white">
        <h2 className="text-4xl font-bold mb-4">
          Manage Your Properties Effortlessly
        </h2>
        <p className="mb-6 text-lg text-white/90">
          Experience the power of a smart and personalized dashboard.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-black text-white px-8 py-3 font-semibold rounded-full shadow-lg hover:bg-[#111] transition"
        >
          Access Dashboard
        </motion.button>
      </section>
    </div>
  );
};

export default PersonalizedDashboard;
