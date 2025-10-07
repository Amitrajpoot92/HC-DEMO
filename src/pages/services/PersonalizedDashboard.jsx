 // src/pages/services/PersonalizedDashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ClipboardList,
  UserCheck,
  ShieldCheck,
  CreditCard,
  FileText,
  Camera,
} from "lucide-react";

// --- IMAGE IMPORT ---
import heroImage from "../../assets/realestate/ap7.png"; // replace with dashboard mockup if available
import dashboardMockup from "../../assets/realestate/ap1.png"; // optional

const PersonalizedDashboard = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Dashboard Hero"
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Your Property, Managed from Anywhere
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white drop-shadow mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with our all-in-one owner and tenant dashboard.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-white text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Login to Dashboard
          </motion.button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Dashboard Overview
        </h2>
        <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          The Propdial Dashboard centralizes everything related to your property — from rent collection 
          and inspection reports to maintenance requests and document management — all under one secure platform.
        </p>
      </section>

      {/* Owner & Tenant Dashboard Features */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-10 text-center">Owner Dashboard Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Real-time rent collection tracking",
            "Digital receipts and payment history",
            "Inspection reports and images",
            "Maintenance request approvals",
            "Occupancy & vacancy insights",
            "Document management (agreements, ID proofs)",
            "Notifications for due dates",
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <ClipboardList className="w-8 h-8 text-green-600 mt-1" />
              <p className="text-gray-800 font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Tenant Dashboard Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Pay rent online",
            "Download receipts instantly",
            "Raise maintenance requests",
            "Track service progress",
            "View agreements and inspection reports",
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-[#fdfbe9] rounded-xl shadow hover:shadow-lg transition"
            >
              <UserCheck className="w-8 h-8 text-blue-600 mt-1" />
              <p className="text-gray-800 font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-6 md:px-20 bg-[#f0f4f8]">
        <h2 className="text-3xl font-bold mb-10 text-center">Additional Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Multi-property management",
            "Expense analytics",
            "Secure cloud backup",
            "Email/SMS alerts",
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <ShieldCheck className="w-8 h-8 text-purple-600 mt-1" />
              <p className="text-gray-800 font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Full transparency for both parties",
            "Accessible from any device",
            "Saves time and manual tracking",
            "Makes property management simple and digital",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-[#fdfbe9] rounded-xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="w-8 h-8 text-green-500 mt-1" />
              <p className="text-gray-800 font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-6 md:px-20 bg-[#f0f4f8] text-center">
        <h2 className="text-3xl font-bold mb-8">Dashboard Preview</h2>
        <p className="text-gray-700 mb-6">
          Quick view of key metrics like Rent Due, Inspection Pending, and Maintenance in Progress.
        </p>
        <motion.img
          src={dashboardMockup}
          alt="Dashboard Mockup"
          className="mx-auto rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Q: Is the dashboard free?</h3>
            <p className="text-gray-700 mt-2">
              A: Yes, available for all onboarded owners and tenants.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Q: Can I access it on mobile?</h3>
            <p className="text-gray-700 mt-2">
              A: Yes, fully responsive for mobile and desktop.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Experience Next-Level Property Management
        </h2>
        <p className="mb-6 text-lg">
          Sign in to your Propdial Dashboard today!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Login Now
        </motion.button>
      </section>

    </div>
  );
};

export default PersonalizedDashboard;
