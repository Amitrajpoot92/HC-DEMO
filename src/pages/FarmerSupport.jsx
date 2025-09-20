import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Handshake, Sprout, Phone, Mail } from "lucide-react";

// --- IMAGE IMPORTS ---
import heroImage from "../assets/hero.webp"; // Your existing hero image
// Dummy images for the "Community in Action" gallery
import img1 from "../assets/mushrooms/Img1.png";
import img2 from "../assets/mushrooms/Img2.png";
import img3 from "../assets/mushrooms/Img3.png";
import img4 from "../assets/mushrooms/Img4.png";
import img5 from "../assets/mushrooms/Img5.png";
import img6 from "../assets/mushrooms/Img6.png";
// You can also use the AI generated ones (farmer-support-hero.png, farmer-collaboration.png, modern-mushroom-farm.png)
// import farmerSupportHero from '../assets/farmer-support-hero.png'; // If you want a specific image for this hero
// import farmerCollaboration from '../assets/farmer-collaboration.png';
// import modernMushroomFarm from '../assets/modern-mushroom-farm.png';

// --- HERO SECTION COMPONENT (adapted for Farmer Support) ---
const HeroSection = () => (
  <motion.div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
    <motion.img
      src={heroImage} // Using your existing hero.webp
      alt="Farmers and Mushrooms Banner"
      className="absolute inset-0 w-full h-full object-cover blur-sm"
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
    />
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10 text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Empowering Our Mushroom Farmers
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-green-200 mt-2 drop-shadow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        // Growing together for a sustainable future of fungi.
      </motion.p>
    </div>
  </motion.div>
);

// --- MAIN FARMER SUPPORT PAGE COMPONENT ---
export default function FarmerSupportPage() {
  const dummyGalleryImages = [img1, img2, img3, img4, img5, img6]; // Using your mushroom images as placeholders

  // Simple state for a form (can be expanded)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "", // e.g., "Sell Mushrooms", "Cultivation Help", "Collaboration"
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Farmer Inquiry:", formData);
    alert("Thank you for your interest! We will get back to you soon.");
    // Here you would typically send this data to a backend service
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <HeroSection />

      <main className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24">
        {/* Why Partner With Us? */}
        <motion.section
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Partner With MushroomMart?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We believe in fostering strong relationships with local farmers. By
            partnering with us, you gain access to a wider market, expert
            guidance, and a community dedicated to sustainable mushroom
            cultivation.
          </p>
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-green-500/20 text-center flex flex-col items-center"
            >
              <Leaf size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Sustainable Growth
              </h3>
              <p className="text-gray-400">
                Join a network committed to eco-friendly farming practices.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-green-500/20 text-center flex flex-col items-center"
            >
              <Handshake size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Fair Market Access
              </h3>
              <p className="text-gray-400">
                Sell your produce at competitive prices directly to consumers.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-green-500/20 text-center flex flex-col items-center"
            >
              <Sprout size={48} className="text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Expert Cultivation
              </h3>
              <p className="text-gray-400">
                Receive guidance and resources from our mycological experts.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* How We Support You */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4">
            How We Support You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-green-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Cultivation Guidance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're new to mushroom farming or looking to optimize
                your yield, our team of mycologists offers personalized advice,
                resources, and best practices. From substrate preparation to
                pest management, we're here to help you succeed.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-green-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Market & Sales Collaboration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Connect your fresh produce directly with our growing customer
                base. We provide a reliable platform and logistics support,
                ensuring your high-quality mushrooms reach enthusiasts and chefs
                efficiently, maximizing your returns.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Community in Action (Image Gallery) */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4">
            Our Community in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyGalleryImages.map((imgSrc, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden aspect-video"
              >
                <img
                  src={imgSrc}
                  alt={`Mushroom farm / collaboration ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Get in Touch Section (Contact Form) */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4">
            Get in Touch with Us
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-green-500/20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Are you a farmer interested in growing mushrooms, selling your
                harvest, or exploring collaboration opportunities? We'd love to
                hear from you. Fill out the form below, and our team will get
                back to you shortly.
              </p>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3">
                  <Phone size={20} className="text-green-400" /> +91-XXXXXXXXXX
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={20} className="text-green-400" />{" "}
                  farmers@mushroommart.com
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-700 border border-green-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-700 border border-green-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-700 border border-green-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-700 border border-green-500/30 text-white focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="">I'm interested in...</option>
                <option value="Sell Mushrooms">Selling My Mushrooms</option>
                <option value="Cultivation Help">Cultivation Guidance</option>
                <option value="Collaboration">Collaboration Opportunity</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us more about your needs or farm (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 rounded-lg bg-slate-700 border border-green-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Submit Inquiry <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
