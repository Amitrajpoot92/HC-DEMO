 import { motion } from "framer-motion";
import heroImage from "../assets/hero.webp";
import { Link } from "react-router-dom";  
import { Sprout, ShoppingBasket, Calendar, Users, BookOpen, Phone } from "lucide-react";

const Home = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-[#fdfbe9] via-[#f4fce3] to-[#e8f8f0] min-h-screen px-6 md:px-12 py-16 flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="flex flex-wrap gap-12 justify-between max-w-6xl w-full">
        {/* Left Text */}
        <div className="flex-1 text-gray-900 min-w-[300px]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            MushroomMart <br />
            <span className="bg-gradient-to-r from-green-600 via-lime-500 to-yellow-500 bg-clip-text text-transparent font-extrabold">
              Buy, Learn & Grow with
            </span>{" "}
            the Mushroom Community
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Discover everything about mushrooms – from organic cultivation to
            healthy recipes and community events. All in one place 🍄
          </p>

          <div className="flex flex-wrap gap-4">
            {/* Primary Button */}
            <Link to="/mushrooms">
              <button className="bg-gradient-to-r from-green-500 via-lime-400 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Explore Mushrooms
              </button>
            </Link>

            {/* Outline Button */}
            <button className="border-2 border-green-600 text-green-700 px-6 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:bg-green-600 hover:text-white">
              Request a Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center min-w-[300px]">
          <img
            src={heroImage}
            alt="Mushroom preview"
            className="max-w-full rounded-xl shadow-2xl border-4 border-yellow-200"
          />
        </div>
      </div>

      {/* Middle Heading */}
      <div className="w-full mt-28 flex justify-center">
        <div className="text-gray-900 text-2xl md:text-2xl font-semibold bg-gradient-to-r from-green-500 via-lime-400 to-yellow-400 px-6 py-2 rounded-full inline-block shadow-md">
          Fresh Mushrooms, Healthy Living, Strong Community.
        </div>
      </div>

      {/* Feature Section */}
      <section className="w-full max-w-6xl mt-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore our services for farmers, mushroom enthusiasts, and healthy food lovers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Cultivation Guide */}
          <Link to="/farmer-support">
            <div className="bg-green-100 p-8 rounded-xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-200 hover:to-yellow-100 cursor-pointer h-full flex flex-col justify-between">
              <Sprout size={48} className="mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">Cultivation Support</h3>
              <p className="text-gray-700">
                Learn mushroom farming techniques, get expert help, and grow organic mushrooms.
              </p>
            </div>
          </Link>

          {/* Buy Fresh Mushrooms */}
          <Link to="/mushrooms">
            <div className="bg-green-100 p-8 rounded-xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-200 hover:to-yellow-100 cursor-pointer h-full flex flex-col justify-between">
              <ShoppingBasket size={48} className="mx-auto text-yellow-500" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">Buy Fresh Mushrooms</h3>
              <p className="text-gray-700">
                Order fresh, organic, and exotic mushrooms directly from trusted farmers.
              </p>
            </div>
          </Link>

          {/* Events */}
          <Link to="/events">
            <div className="bg-green-100 p-8 rounded-xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-200 hover:to-yellow-100 cursor-pointer h-full flex flex-col justify-between">
              <Calendar size={48} className="mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">Community Events</h3>
              <p className="text-gray-700">
                Join workshops, mushroom festivals, and farmer meetups near you.
              </p>
            </div>
          </Link>

          {/* Knowledge Hub */}
          <div className="bg-green-100 p-8 rounded-xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-200 hover:to-yellow-100 h-full flex flex-col justify-between">
            <BookOpen size={48} className="mx-auto text-green-700" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">Knowledge Hub</h3>
            <p className="text-gray-700">
              Access guides, recipes, and research to understand mushrooms better.
              </p>
          </div>

          {/* Farmer Community */}
          <div className="bg-green-100 p-8 rounded-xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-200 hover:to-yellow-100 h-full flex flex-col justify-between">
            <Users size={48} className="mx-auto text-yellow-500" />
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">Farmer Community</h3>
            <p className="text-gray-700">
              Connect with fellow mushroom growers and share knowledge & experiences.
            </p>
          </div>

          {/* Contact */}
          <Link to="/contact">
            <div className="bg-green-100 p-8 rounded-xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-200 hover:to-yellow-100 cursor-pointer h-full flex flex-col justify-between">
              <Phone size={48} className="mx-auto text-green-600" />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">Contact Us</h3>
              <p className="text-gray-700">
                Have questions? Reach out for support and collaboration.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
