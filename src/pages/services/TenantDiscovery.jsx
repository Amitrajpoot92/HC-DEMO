 // src/pages/services/TenantDiscovery.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  UserCheck,
  ClipboardList,
  MapPin,
  FileText,
} from "lucide-react";

// IMAGE IMPORT
import heroImage from "../../assets/realestate/ap3.png";

const TenantDiscovery = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      q: "How do you verify tenants?",
      a: "We use KYC, employment verification, and police background checks to ensure reliability.",
    },
    {
      q: "Do I get to approve the final tenant?",
      a: "Yes, you have the final authority before confirmation.",
    },
    {
      q: "Can I track tenant discovery progress?",
      a: "Absolutely! You get real-time status updates on every step through your dashboard.",
    },
  ];

  const processSteps = [
    {
      title: "Requirement Collection",
      desc: "We collect details about your property, preferences, and ideal tenant type.",
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      color: "bg-blue-600",
    },
    {
      title: "Tenant Shortlisting",
      desc: "Our system matches tenants based on budget, profession, and location.",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      color: "bg-green-600",
    },
    {
      title: "Verification",
      desc: "Every tenant goes through identity, employment, and rental history verification.",
      icon: <FileText className="w-8 h-8 text-white" />,
      color: "bg-purple-600",
    },
    {
      title: "Property Visit",
      desc: "Coordinated visits with shortlisted tenants to inspect the property.",
      icon: <MapPin className="w-8 h-8 text-white" />,
      color: "bg-orange-600",
    },
    {
      title: "Selection & Handover",
      desc: "Owners get the final choice and confirmation notification for tenant handover.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: "bg-red-600",
    },
  ];

  const features = [
    "Background & police verification",
    "Smart tenant matching algorithm",
    "Real-time status tracking",
    "Documented screening reports",
    "Reduce vacancy time",
    "Eliminate fraudulent tenants",
    "Verified properties only",
    "Transparent rental process",
  ];

  return (
    <div className="bg-[#fdfbe9] text-gray-900 font-sans">
      {/* Hero Section Split */}
      <section className="relative w-full h-[60vh] flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Tenant Discovery"
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl px-6 md:px-16">
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-6 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Find Verified Tenants with Ease
            </h1>
            <p className="text-lg md:text-xl text-white drop-shadow mb-6">
              Propdial helps you find reliable, background-checked tenants for your property quickly.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Discover Tenants Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          How It Works
        </h2>
        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-12">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="mb-12 ml-6 md:ml-12 flex flex-col md:flex-row items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step.color}`}>
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-700 mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 md:px-20 bg-[#e5f3ff]">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Features & Benefits
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
              <p className="font-medium">{f}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Client Testimonial</h2>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow">
          <p className="italic text-gray-700 mb-4">
            “I got a verified tenant in less than a week — no brokers, no hidden charges. Propdial handled everything smoothly.”
          </p>
          <h4 className="font-semibold text-black">— Sanjana Verma, Gurgaon</h4>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveFAQ(activeFAQ === idx ? null : idx)
                }
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800"
              >
                {faq.q}
                <span>{activeFAQ === idx ? "-" : "+"}</span>
              </button>
              {activeFAQ === idx && (
                <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-600 to-green-800 text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s find your next tenant</h2>
        <p className="mb-6 text-lg">Start your tenant discovery process today!</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Discover Tenants
        </motion.button>
      </section>
    </div>
  );
};

export default TenantDiscovery;
