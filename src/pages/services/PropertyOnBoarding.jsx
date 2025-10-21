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
        "The attention to detail and innovative features have completely transformed our workflow. Exactly what we've been looking for.",
      name: "Matt Laricy",
      designation: "Americorp Real Estate Lead of Laricy",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Patrick Shino",
      designation: "FULTON GRACE REALTY | SK Group",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Sam Shaffer",
      designation: "Chicago Properties",
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
const PropertyOnBoarding = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Property Onboarding?",
      answer:
        "It’s the process of registering and verifying your property details on our platform so that it becomes visible to potential customers.",
    },
    {
      question: "How long does the onboarding process take?",
      answer:
        "Usually, it takes 24–48 hours after you submit all required documents and property details.",
    },
    {
      question: "What documents are required?",
      answer:
        "You need to provide ownership proof, valid ID, and address verification documents.",
    },
    {
      question: "Can I update my property details later?",
      answer:
        "Yes, you can easily update your property details anytime from your personalized dashboard.",
    },
    {
      question: "Is there any fee for onboarding?",
      answer:
        "No, onboarding is completely free. A small commission applies only when bookings occur.",
    },
  ];

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Property Onboarding Banner"
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
            Property Onboarding
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            From verification to listing — experience seamless onboarding with
            smart automation and transparency.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#fa6304] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#ff8645] transition"
          >
            Start Onboarding Now
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
          Simplifying Property Management
        </motion.h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
          Managing your property shouldn’t be stressful. Our Onboarding Service
          ensures every step — from document verification to professional
          listing — is smooth, digital, and transparent.
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
              title: "Property Registration",
              desc: "Fill out a quick online form with details like type, location, size, and rent expectations.",
              icon: <ClipboardList className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Document Collection",
              desc: "Upload ownership proof, ID, and address documents securely online.",
              icon: <FileText className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "On-Site Visit",
              desc: "Our team inspects and verifies your property’s condition and readiness.",
              icon: <Home className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Professional Photoshoot",
              desc: "We capture high-quality photos to attract quality tenants faster.",
              icon: <Camera className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Agreement & Onboarding",
              desc: "Once verified, we sign a clear property management agreement.",
              icon: <CheckCircle className="w-10 h-10 text-[#8af6fc]" />,
            },
            {
              title: "Listing Creation",
              desc: "Your property goes live on our platform and partner sites for max visibility.",
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

      {/* ---------------- BENEFITS ---------------- */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#111] via-black to-[#0a0a0a]">
        <h2 className="text-4xl font-bold mb-10 text-center text-[#8af6fc]">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "100% paperless onboarding process",
            "Verified and transparent workflow",
            "Access to thousands of potential tenants",
            "Full owner control with a personalized dashboard",
            "Time-saving and cost-effective management",
            "Professional property presentation",
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
          Start your property onboarding journey today.
        </h2>
        <p className="mb-6 text-lg text-black/80">
          Let Propdial take care of the rest — your trusted partner in property
          management.
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

export default PropertyOnBoarding;
