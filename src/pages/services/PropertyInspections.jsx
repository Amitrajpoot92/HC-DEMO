 // src/pages/services/PropertyInspections.jsx
import React from "react";
import {
  CheckCircle,
  Camera,
  FileText,
  ClipboardList,
  Home,
  Wrench,
  Info,
  ShieldCheck, // ✅ Add this
} from "lucide-react";
import { motion } from "framer-motion";

// --- IMAGE IMPORT ---
import heroImage from "../../assets/realestate/ap_poster.png";

const PropertyInspections = () => {
  return (
    <div className="bg-[#fdfbe9] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Property Inspections Banner"
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Regular Property Inspections You Can Rely On
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white drop-shadow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We monitor your property like it’s our own — ensuring it stays in
            perfect shape.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Schedule Your Inspection
          </motion.button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Detailed Inspections for Peace of Mind
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          For NRI owners or those living away, periodic property inspections are
          essential. Propdial provides detailed photo/video-based reports after
          every visit so you can rest assured your property is safe and well-maintained.
        </p>
      </section>

      {/* Types of Inspections */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Types of Inspections
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Choose from our flexible inspection services based on your needs.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Move-in Inspection",
              desc: "Before tenant occupies the property to document initial condition.",
              icon: <Home className="w-10 h-10 text-black" />,
            },
            {
              title: "Move-out Inspection",
              desc: "After tenant vacates, to assess damage or maintenance needs.",
              icon: <ClipboardList className="w-10 h-10 text-black" />,
            },
            {
              title: "Periodic Inspection",
              desc: "Scheduled every 3 or 6 months to keep your property in check.",
              icon: <ShieldCheck className="w-10 h-10 text-black" />,
            },
            {
              title: "On-demand Inspection",
              desc: "Owner can request inspection anytime for instant review.",
              icon: <Wrench className="w-10 h-10 text-black" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 border-black"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
              <p className="text-gray-700 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inspection Report Details */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Inspection Report Includes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: "Property photos and videos", icon: <Camera className="w-8 h-8 text-black" /> },
            { text: "Maintenance condition report", icon: <FileText className="w-8 h-8 text-black" /> },
            { text: "Tenant feedback", icon: <Info className="w-8 h-8 text-black" /> },
            { text: "Repair recommendations", icon: <Wrench className="w-8 h-8 text-black" /> },
            { text: "Meter readings (electricity/water)", icon: <ClipboardList className="w-8 h-8 text-black" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              {item.icon}
              <p className="text-gray-800 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-10 text-center">Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Prevents property damage early",
            "Transparency with visual proof",
            "Peace of mind for owners living away",
            "Helps maintain property value",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="w-8 h-8 text-black mt-1" />
              <p className="text-gray-800 font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Q: Can I schedule an inspection anytime?</h3>
            <p className="text-gray-700 mt-2">
              A: Yes, we offer on-demand inspections for managed properties.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Q: Will I get photos and videos?</h3>
            <p className="text-gray-700 mt-2">
              A: Yes, high-resolution visuals are included in every report.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-600 to-green-800 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Protect your property with Propdial’s professional inspection services
        </h2>
        <p className="mb-6 text-lg">Schedule your inspection today and stay worry-free.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Book Inspection Now
        </motion.button>
      </section>
    </div>
  );
};

export default PropertyInspections;
