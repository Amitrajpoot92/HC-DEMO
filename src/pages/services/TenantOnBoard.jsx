 // src/pages/services/TenantOnBoard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  ClipboardList,
  UserCheck,
  Gift,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

// IMAGE IMPORT
import heroImage from "../../assets/realestate/ap7.png";

const TenantOnBoard = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      q: "Can I prepare my own agreement?",
      a: "You can, but Propdial offers standard legal templates for compliance and ensures they are legally valid.",
    },
    {
      q: "What if tenant delays payment?",
      a: "We send automatic reminders and handle follow-up communication to ensure timely rent collection.",
    },
    {
      q: "Is the onboarding process fully digital?",
      a: "Yes, all steps including document submission, e-signing, and payments are handled digitally for convenience.",
    },
  ];

  const processSteps = [
    {
      title: "Verification & Approval",
      desc: "Confirm tenant documents and background check for safety and reliability.",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      color: "bg-blue-600",
    },
    {
      title: "Agreement Drafting",
      desc: "Digital rent agreement generated and shared for e-signature.",
      icon: <FileText className="w-8 h-8 text-white" />,
      color: "bg-green-600",
    },
    {
      title: "Deposit Management",
      desc: "Secure deposit collection through digital payment gateway.",
      icon: <CreditCard className="w-8 h-8 text-white" />,
      color: "bg-purple-600",
    },
    {
      title: "Move-in Assistance",
      desc: "Key handover, initial inspection, and inventory checklist.",
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      color: "bg-orange-600",
    },
    {
      title: "Post Move-in Support",
      desc: "Tenant is onboarded into the system for future maintenance requests.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: "bg-red-600",
    },
  ];

  const features = [
    "Online rent agreement and digital signatures",
    "Complete inventory documentation",
    "Tenant welcome kit & onboarding video",
    "Transparent payment receipts",
    "Legal compliance ensured",
    "Zero-paper documentation",
    "Smooth coordination between owner and tenant",
    "24×7 support",
  ];

  const addOnServices = [
    "Utility transfer assistance",
    "Deep cleaning before move-in",
    "Security deposit insurance option",
  ];

  return (
    <div className="bg-[#fdfbe9] text-gray-900 font-sans">
      {/* Hero Section Split */}
      <section className="relative w-full h-[60vh] flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Tenant Onboarding"
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
              Effortless Tenant Onboarding Experience
            </h1>
            <p className="text-lg md:text-xl text-white drop-shadow mb-6">
              Propdial ensures a smooth and legal tenant onboarding process — digitally managed.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Start Tenant Onboarding
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Tenant Onboarding Matters</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Tenant onboarding is the final yet crucial step in rental management. It includes agreement preparation, deposit collection, key handover, and move-in inspection — all handled by Propdial to guarantee a transparent start for both parties.
        </p>
      </section>

      {/* Process Horizontal Cards */}
      <section className="py-16 px-6 md:px-20 bg-[#e5f3ff]">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Step-by-Step Process</h2>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 overflow-x-auto pb-4">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-72 p-6 rounded-xl shadow-lg bg-white border-t-4 border-black"
              whileHover={{ scale: 1.03 }}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step.color} mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features & Benefits Grid */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Features & Benefits</h2>
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

      {/* Add-on Services */}
      <section className="py-16 px-6 md:px-20 bg-[#f0f8ff]">
        <h2 className="text-3xl font-bold mb-10 text-center">Add-on Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {addOnServices.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white rounded-xl shadow-lg border-t-4 border-green-600 w-72 text-center"
            >
              <Gift className="w-8 h-8 text-green-600 mb-3 mx-auto" />
              <p className="font-medium">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg overflow-hidden">
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
        <h2 className="text-3xl font-bold mb-4">Streamline your tenant onboarding today</h2>
        <p className="mb-6 text-lg">Propdial ensures a hassle-free, legal, and smooth process for both owners and tenants.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Start Tenant Onboarding
        </motion.button>
      </section>
    </div>
  );
};

export default TenantOnBoard;
