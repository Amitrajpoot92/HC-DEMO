 "use client";
import React from "react";
import { motion } from "framer-motion";

// 🖼️ Import the image from the correct path
import apPoster from "../assets/realestate/ap_poster.png";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden px-6 sm:px-10 lg:px-16 py-20">
      {/* 🔹 Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-95" />

      {/* 🔹 Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#fa6304] drop-shadow-lg">
          About Propdial
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Your Trusted Property Management Partner
        </p>
      </motion.div>

      {/* 🔹 Main Content Grid */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            <span className="text-[#8af6fc] font-semibold">Established in 2014,</span>{" "}
            Propdial is a leading property management company offering complete{" "}
            <span className="text-white font-medium">360° solutions</span> for property
            management and care-taking services.
          </p>

          <p>
            We efficiently handle{" "}
            <span className="text-white font-medium">
              property onboarding, tenant screening, and maintenance
            </span>{" "}
            to ensure a seamless experience for owners and tenants alike.
          </p>

          <p>
            Every step of your property’s journey — from inspection and market
            analysis to lease agreements and upkeep — is managed with
            transparency and professionalism.
          </p>

          <p>
            <span className="text-[#fa6304] font-semibold">
              At Propdial, customer satisfaction is our top priority.
            </span>{" "}
            We value long-term relationships built on trust, communication, and
            consistent service quality.
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-[#fa6304] rounded-full text-white font-semibold text-lg shadow-lg hover:bg-[#ff7b29] transition-all duration-300"
          >
            Know More
          </motion.a>
        </motion.div>

        {/* RIGHT: Animated Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* Central Main Image */}
          <motion.img
            src={apPoster}
            alt="Property main"
            className="w-[70%] md:w-[75%] rounded-3xl shadow-[0_0_30px_rgba(250,99,4,0.3)] border border-[#1e1e1e]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Floating Side Images */}
          <motion.img
            src={apPoster}
            alt="Floating"
            className="absolute top-[-40px] left-[5%] w-28 md:w-40 rounded-xl shadow-xl border border-[#1e1e1e]"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          <motion.img
            src={apPoster}
            alt="Floating"
            className="absolute bottom-[-40px] right-[5%] w-32 md:w-44 rounded-xl shadow-xl border border-[#1e1e1e]"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          <motion.img
            src={apPoster}
            alt="Floating"
            className="absolute top-[30%] right-[-40px] w-28 md:w-40 rounded-xl shadow-xl border border-[#1e1e1e]"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
