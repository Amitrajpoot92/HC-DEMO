// src/pages/services/TenantOnBoard.jsx
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
        "TenantOnBoard made moving in seamless. Everything from documentation to verification was handled efficiently.",
      name: "Ravi Sharma",
      designation: "Tenant, Urban Apartments",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Smooth onboarding process and quick support. I felt confident and informed throughout.",
      name: "Neha Singh",
      designation: "Tenant, City Flats",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Easy document submission and verification. TenantOnBoard is truly hassle-free for new tenants.",
      name: "Amit Verma",
      designation: "Tenant, Green Residency",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  const [active, setActive] = useState(0);
  const autoplay = true;

  React.useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  const isActive = (index) => index === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <section className="py-16 px-6 md:px-20 bg-[#0a0a0a] text-center text-white">
      <h2 className="text-3xl font-bold mb-8 text-[#8af6fc] drop-shadow-[0_0_10px_#8af6fc]">
        What Our Tenants Say
      </h2>

      <div className="mx-auto max-w-sm px-4 py-10 md:max-w-4xl md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          {/* Left - Images */}
          <div className="relative h-80 w-full">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.src}
                initial={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.5,
                  scale: isActive(index) ? 1 : 0.9,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  y: isActive(index) ? [0, -50, 0] : 0,
                  zIndex: isActive(index) ? 20 : 0,
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={t.src}
                  alt={t.name}
                  className="h-full w-full rounded-3xl object-cover border-2 border-[#fa6304]/50"
                />
              </motion.div>
            ))}
          </div>

          {/* Right - Text */}
          <div className="flex flex-col justify-center">
            <motion.div
              key={active}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-[#fa6304]">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {testimonials[active].designation}
              </p>
              <p className="text-lg text-gray-200">
                {testimonials[active].quote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Main Page
const TenantOnBoard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TenantOnBoard?",
      answer:
        "TenantOnBoard simplifies the onboarding process — from document upload to verification and agreement signing — all handled securely in one place.",
    },
    {
      question: "How do I submit my documents?",
      answer:
        "You can upload all necessary documents like ID proof, income proof, and rental agreements through our secure dashboard.",
    },
    {
      question: "Is the verification process safe?",
      answer:
        "Yes, all verification is handled securely by certified personnel ensuring privacy and authenticity.",
    },
    {
      question: "Can I sign agreements digitally?",
      answer:
        "Absolutely! TenantOnBoard supports secure digital agreement signing — no paperwork needed.",
    },
    {
      question: "How long does onboarding take?",
      answer:
        "Most tenants complete onboarding within 24–48 hours, depending on verification and approval.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0a0a0a] text-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Tenant Onboarding Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fa6304]/60 to-[#8af6fc]/60"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_#fa6304]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Seamless Tenant Onboarding Experience
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            From document submission to verification, move in with confidence and ease.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-[#fa6304] text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#ff8533]"
          >
            Start Onboarding Now
          </motion.button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#8af6fc] drop-shadow-[0_0_10px_#8af6fc]">
          Hassle-Free Tenant Onboarding
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Upload your documents, complete verifications, and sign agreements digitally — all in one secure platform.
        </p>
      </section>

      {/* Our Process */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-[#fa6304]/10 to-[#8af6fc]/10 rounded-3xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#fa6304]">
          How Tenant Onboarding Works
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          A step-by-step approach to make your move-in smooth and quick.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Register Profile", icon: ClipboardList, desc: "Create your tenant profile with contact details." },
            { title: "Upload Documents", icon: FileText, desc: "Securely upload all required proofs." },
            { title: "Verification", icon: Home, desc: "Certified team verifies your documents quickly." },
            { title: "Digital Agreement", icon: CheckCircle, desc: "E-sign rental agreements with ease." },
            { title: "Move-In Support", icon: Camera, desc: "Get help coordinating your move." },
            { title: "Ongoing Assistance", icon: Globe, desc: "24/7 platform and onboarding support." },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] border border-[#8af6fc]/30 p-6 rounded-2xl text-center shadow-lg hover:shadow-[#fa6304]/30"
            >
              <step.icon className="w-10 h-10 mx-auto mb-4 text-[#fa6304]" />
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#8af6fc]">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Secure document submission",
            "Fast onboarding process",
            "Digital agreements",
            "Transparent communication",
            "Centralized dashboard",
            "Expert move-in support",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-[#111] rounded-xl border border-[#fa6304]/30 hover:shadow-lg"
            >
              <CheckCircle className="w-8 h-8 text-[#fa6304] mt-1" />
              <p className="text-gray-300">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <AnimatedTestimonials />

      {/* FAQs */}
      <section className="py-16 px-6 md:px-20 bg-[#111] rounded-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#fa6304]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0a0a0a] border border-[#8af6fc]/30 rounded-2xl">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-white"
              >
                {faq.question}
                <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }}>
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

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-[#fa6304] to-[#8af6fc] text-black rounded-t-3xl mt-16">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Tenant Onboarding Today
        </h2>
        <p className="mb-6 text-lg">
          Complete onboarding efficiently and move in hassle-free.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-black text-white px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-[#111]"
        >
          Start Onboarding
        </motion.button>
      </section>
    </div>
  );
};

export default TenantOnBoard;
