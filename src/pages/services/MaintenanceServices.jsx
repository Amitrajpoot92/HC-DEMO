 // src/pages/services/MaintenanceServices.jsx
import React from "react";
import {
  CheckCircle,
  Wrench,
  ShieldCheck,
  UserCheck,
  ClipboardList,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

// --- IMAGE IMPORT ---
import heroImage from "../../assets/realestate/ap7.png";

const MaintenanceServices = () => {
  return (
    <div className="bg-[#fdfbe9] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Maintenance Services Banner"
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
            Hassle-Free Property Maintenance
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white drop-shadow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Quick repairs, verified technicians, and 24×7 service — all managed digitally.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Book Maintenance Now
          </motion.button>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Keeping Your Property in Top Shape
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Maintenance is the backbone of property management. Propdial provides a network of trusted professionals for every repair and maintenance need — ensuring your property remains in top condition year-round.
        </p>
      </section>

      {/* Categories of Maintenance */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Categories of Maintenance
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Plumbing & Sanitary Repairs",
            "Electrical & Lighting Work",
            "Painting & Interior Finishing",
            "Appliance Repair (AC, Fridge, etc.)",
            "Deep Cleaning & Pest Control",
            "Carpentry & Furniture Fixing",
            "Civil & Waterproofing Work",
          ].map((category, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 border-black text-center"
            >
              <Wrench className="w-10 h-10 text-black mx-auto mb-4" />
              <p className="font-semibold text-gray-800">{category}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Workflow
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Raise Request",
              desc: "Submit a service request via your dashboard or mobile app.",
              icon: <ClipboardList className="w-10 h-10 text-black" />,
            },
            {
              title: "Technician Assigned",
              desc: "A qualified technician is assigned within 2 hours.",
              icon: <UserCheck className="w-10 h-10 text-black" />,
            },
            {
              title: "Work Completed",
              desc: "Repairs are done efficiently and quality is verified.",
              icon: <CheckCircle className="w-10 h-10 text-black" />,
            },
            {
              title: "Report & Photos",
              desc: "You receive a report and photos of the completed work.",
              icon: <Camera className="w-10 h-10 text-black" />,
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4 p-6 bg-[#fdfbe9] rounded-xl shadow hover:shadow-lg transition"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-center">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Verified service partners",
            "Transparent pricing",
            "Real-time status tracking",
            "Emergency 24×7 support",
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <ShieldCheck className="w-8 h-8 text-black mt-1" />
              <p className="text-gray-800 font-medium">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Quick turnaround",
            "Reliable professionals",
            "Preventive maintenance plans",
            "Peace of mind for owners abroad",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 bg-[#fdfbe9] rounded-xl shadow hover:shadow-lg transition"
            >
              <CheckCircle className="w-8 h-8 text-black mt-1" />
              <p className="text-gray-800 font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra Services */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-8 text-center">Extra Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            "AMC (Annual Maintenance Contract)",
            "Post-tenant cleaning packages",
            "Renovation coordination",
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md bg-gray-50"
            >
              <CheckCircle className="w-6 h-6 mx-auto mb-3 text-black" />
              <p className="font-medium">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Q: How are service charges calculated?</h3>
            <p className="text-gray-700 mt-2">
              A: Based on work type, material, and technician category.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Q: Do you offer warranty?</h3>
            <p className="text-gray-700 mt-2">
              A: Yes, we offer 30-day service warranty on most jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-600 to-green-800 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Book maintenance with Propdial
        </h2>
        <p className="mb-6 text-lg">
          Because your property deserves the best care.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Book Now
        </motion.button>
      </section>
    </div>
  );
};

export default MaintenanceServices;
