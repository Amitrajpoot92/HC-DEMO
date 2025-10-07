 // src/pages/services/PropertyOnBoarding.jsx
import React from "react";
import {
  CheckCircle,
  FileText,
  Camera,
  Home,
  ClipboardList,
  UserCheck,
  Globe,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

// --- IMAGE IMPORT ---
import heroImage from "../../assets/realestate/ap_poster.png";

const PropertyOnBoarding = () => {
  return (
    <div className="bg-[#fdfbe9] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Property Onboarding Banner"
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
            List Your Property with Propdial
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white drop-shadow"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From verification to listing — we handle everything so you can enjoy
            stress-free property management.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Start Onboarding Now
          </motion.button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Simplifying Your Property Management
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Owning a property is one thing, managing it is another challenge.
          Propdial’s Property Onboarding Service simplifies the entire process —
          from data collection, property inspection, document verification, and
          professional photography to creating a perfect listing on our platform.
          <br />
          <br />
          Whether you are an NRI owner or living in another city, our team ensures your property gets
          listed fast and professionally to attract the best tenants.
        </p>
      </section>

      {/* Our Process */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Process (Step-by-Step)
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          A streamlined and transparent process designed to make property onboarding quick and efficient.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Property Registration",
              desc: "Fill out a short online form with property details like type, location, size, expected rent, and amenities.",
              icon: <ClipboardList className="w-10 h-10 text-black" />,
            },
            {
              title: "Document Collection",
              desc: "Submit ownership proof, ID, and address documents digitally using our secure upload system.",
              icon: <FileText className="w-10 h-10 text-black" />,
            },
            {
              title: "On-Site Visit",
              desc: "Our field team visits your property for physical verification and inspection to assess condition and readiness.",
              icon: <Home className="w-10 h-10 text-black" />,
            },
            {
              title: "Professional Photoshoot",
              desc: "High-quality images are captured to make your property stand out and attract quality tenants faster.",
              icon: <Camera className="w-10 h-10 text-black" />,
            },
            {
              title: "Agreement & Onboarding",
              desc: "Once verified, we sign a property management agreement outlining terms and services clearly.",
              icon: <CheckCircle className="w-10 h-10 text-black" />,
            },
            {
              title: "Listing Creation",
              desc: "Property is uploaded on our platform and syndicated across partner websites for maximum reach.",
              icon: <Globe className="w-10 h-10 text-black" />,
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 border-black"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Included Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            "Property verification & KYC",
            "Legal documentation support",
            "Rental pricing guidance",
            "Marketing & listing management",
            "Dedicated relationship manager",
            "Tenant-ready property setup",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md bg-gray-50"
            >
              <CheckCircle className="w-6 h-6 mx-auto mb-3 text-black" />
              <p className="font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits - Improved Design */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-10 text-center">Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "100% paperless onboarding process",
            "Verified and transparent workflow",
            "Access to thousands of potential tenants",
            "Full owner control through personalized dashboard",
            "Time-saving and cost-effective management",
            "Professional property presentation",
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

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow">
          <p className="italic text-gray-700 mb-4">
            “Propdial made property listing simple and fast. My flat was live within 48 hours! Their team handled everything professionally.”
          </p>
          <h4 className="font-semibold text-black">— Rohit Agarwal, Pune</h4>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-20 bg-[#fdfbe9]">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="font-semibold text-lg">Q: How long does onboarding take?</h3>
            <p className="text-gray-700 mt-2">
              A: Usually 2–3 days after the physical inspection and document verification process.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Q: Can I list multiple properties?</h3>
            <p className="text-gray-700 mt-2">
              A: Yes, there’s no limit — we manage all of them centrally through your single dashboard.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Q: Do I need to be physically present for onboarding?</h3>
            <p className="text-gray-700 mt-2">
              A: No, the entire onboarding process can be handled digitally and remotely.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-600 to-green-800 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start your property onboarding journey today.
        </h2>
        <p className="mb-6 text-lg">
          Let Propdial take care of the rest — your trusted partner in property management.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-black px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default PropertyOnBoarding;
