 import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Sprout, ShoppingBasket, Calendar, BookOpen, Users, Phone } from "lucide-react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="flex justify-between items-center px-8 py-4 sticky top-0 z-50 w-full text-gray-900 backdrop-blur-sm bg-[#fdfbe9]/90 font-orbitron"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      {/* Logo */}
      <div className="text-xl md:text-2xl font-medium tracking-wider uppercase">
        MushroomMart
      </div>

      {/* Hamburger (mobile) */}
      <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      {/* Nav Links */}
      <nav
        className={`${
          menuOpen
            ? "flex flex-col items-center gap-4 py-4 absolute top-full left-0 right-0 bg-[#fdfbe9] md:hidden backdrop-blur-md shadow-lg"
            : "hidden md:flex items-center gap-8"
        }`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            `uppercase text-sm tracking-wide transition-colors ${
              isActive
                ? "text-[#f3cc00] border-b-2 border-[#f3cc00]"
                : "text-gray-900 hover:text-[#95e500]"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/mushrooms"
          onClick={closeMenu}
          className={({ isActive }) =>
            `uppercase text-sm tracking-wide transition-colors ${
              isActive
                ? "text-[#f3cc00] border-b-2 border-[#f3cc00]"
                : "text-gray-900 hover:text-[#95e500]"
            }`
          }
        >
          Mushrooms
        </NavLink>

        <NavLink
          to="/events"
          onClick={closeMenu}
          className={({ isActive }) =>
            `uppercase text-sm tracking-wide transition-colors ${
              isActive
                ? "text-[#f3cc00] border-b-2 border-[#f3cc00]"
                : "text-gray-900 hover:text-[#95e500]"
            }`
          }
        >
          Events
        </NavLink>

        <NavLink
          to="/farmer-support"
          onClick={closeMenu}
          className={({ isActive }) =>
            `uppercase text-sm tracking-wide transition-colors ${
              isActive
                ? "text-[#f3cc00] border-b-2 border-[#f3cc00]"
                : "text-gray-900 hover:text-[#95e500]"
            }`
          }
        >
          Farmer Support
        </NavLink>

        {/* Services Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="uppercase text-sm tracking-wide text-gray-900 hover:text-[#95e500]">
            Services
          </button>
          <div
            className={`absolute top-full left-0 right-0 md:left-auto md:right-0 mt-2 bg-[#fdfbe9] shadow-lg rounded-md py-2 w-full md:w-64 transition-all duration-200 ${
              servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Link
              to="/farmer-support"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-900 hover:text-white hover:bg-gradient-to-r hover:from-[#95e500] hover:to-[#f3cc00] rounded-md transition"
            >
              <Sprout size={18} className="text-[#95e500]" />
              Cultivation Support
            </Link>
            <Link
              to="/mushrooms"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-900 hover:text-white hover:bg-gradient-to-r hover:from-[#95e500] hover:to-[#f3cc00] rounded-md transition"
            >
              <ShoppingBasket size={18} className="text-[#f3cc00]" />
              Buy Fresh Mushrooms
            </Link>
            <Link
              to="/events"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-900 hover:text-white hover:bg-gradient-to-r hover:from-[#95e500] hover:to-[#f3cc00] rounded-md transition"
            >
              <Calendar size={18} className="text-[#95e500]" />
              Community Events
            </Link>
            <Link
              to="/knowledge"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-900 hover:text-white hover:bg-gradient-to-r hover:from-[#95e500] hover:to-[#f3cc00] rounded-md transition"
            >
              <BookOpen size={18} className="text-[#f3cc00]" />
              Knowledge Hub
            </Link>
            <Link
              to="/community"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-900 hover:text-white hover:bg-gradient-to-r hover:from-[#95e500] hover:to-[#f3cc00] rounded-md transition"
            >
              <Users size={18} className="text-[#95e500]" />
              Farmer Community
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-2 text-sm font-semibold text-gray-900 hover:text-white hover:bg-gradient-to-r hover:from-[#95e500] hover:to-[#f3cc00] rounded-md transition"
            >
              <Phone size={18} className="text-[#f3cc00]" />
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMain;
