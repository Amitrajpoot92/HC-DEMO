import {
  Twitter,
  Linkedin,
  Mail,
  Instagram,
  Home,
  ShoppingBasket,
  Calendar,
  Sprout,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#0a0215] text-gray-300 w-full mt-16"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      {/* Top Section */}
      <div className="w-full max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand & Mission */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
            MushroomMart
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            🍄 Fresh, organic, and exotic mushrooms delivered with care.
            Supporting farmers and bringing nature’s goodness to your plate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-lime-400">Explore</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Home size={16} className="text-green-400" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="/mushrooms"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <ShoppingBasket size={16} className="text-orange-400" />
                <span>Mushrooms</span>
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Calendar size={16} className="text-cyan-400" />
                <span>Events</span>
              </a>
            </li>
            <li>
              <a
                href="/farmer-support"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Sprout size={16} className="text-lime-500" />
                <span>Farmer Support</span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-teal-400" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-lime-400">
            Get in Touch
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-green-400" />
              <a
                href="mailto:info@mushroommart.com"
                className="hover:text-green-300 transition-colors"
              >
                info@mushroommart.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={18} className="text-sky-400" />
              <a
                href="https://twitter.com/mushroommart"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors"
              >
                @MushroomMart
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={18} className="text-blue-500" />
              <a
                href="https://linkedin.com/company/mushroommart"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                MushroomMart
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={18} className="text-pink-500" />
              <a
                href="https://instagram.com/mushroommart"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                @mushroommart
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="w-full text-center text-gray-500 text-sm py-6">
        &copy; {new Date().getFullYear()} MushroomMart. All rights reserved.
      </div>
    </footer>
  );
}
