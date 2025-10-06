 // src/components/Footer.jsx

import { Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#0a0215] text-gray-300 w-full mt-16 border-t border-gray-800"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      {/* 🔹 Top Section */}
      <div className="w-full max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 🏡 Brand & Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            UrbanFungi Estates
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            🏠 Explore luxurious apartments, modern villas, peaceful farmhouses, and prime commercial spaces. 
            Your dream property is just a click away!
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Explore</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/apartment" className="hover:text-yellow-400 transition-colors">
                Apartment
              </a>
            </li>
            <li>
              <a href="/villa" className="hover:text-yellow-400 transition-colors">
                Villa
              </a>
            </li>
            <li>
              <a href="/farmhouse" className="hover:text-yellow-400 transition-colors">
                Farmhouse
              </a>
            </li>
            <li>
              <a href="/commercial" className="hover:text-yellow-400 transition-colors">
                Commercial
              </a>
            </li>
            <li>
              <a href="/land" className="hover:text-yellow-400 transition-colors">
                Land
              </a>
            </li>
          </ul>
        </div>

        {/* ✉️ Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-400">Get in Touch</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-pink-400" />
              <a
                href="mailto:info@urbanfungi.com"
                className="hover:text-pink-400 transition-colors"
              >
                info@urbanfungi.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={18} className="text-sky-400" />
              <a
                href="https://twitter.com/UrbanFungi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                @UrbanFungi
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={18} className="text-blue-500" />
              <a
                href="https://linkedin.com/company/urbanfungi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                UrbanFungi Estates
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-green-400" />
              <span>Bhopal, Madhya Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔹 Divider */}
      <div className="w-full border-t border-gray-800"></div>

      {/* 🔹 Bottom Section */}
      <div className="w-full text-center text-gray-500 text-sm py-6">
        &copy; {new Date().getFullYear()} UrbanFungi Estates. All rights reserved.
      </div>
    </footer>
  );
}
