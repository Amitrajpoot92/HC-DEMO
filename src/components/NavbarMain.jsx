 // src/components/NavbarMain.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const navLinkClasses = ({ isActive }) =>
    `transition hover:text-yellow-400 ${
      isActive ? "text-yellow-400 font-semibold" : "text-white"
    }`;

  // Services names from Home.jsx "What We Offer" section
  const services = [
    "Property On-Boarding",
    "Tenant Discovery",
    "Tenant On Board",
    "Property Inspections",
    "Maintenance Services",
    "Personalized Dashboard",
  ];

  return (
    <header
      className="flex justify-between items-center px-8 py-4 sticky top-0 z-50 w-full text-white backdrop-blur-sm bg-[#0f0425]/80 shadow-md font-orbitron"
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      {/* Logo */}
      <div className="text-xl md:text-2xl font-medium tracking-wider uppercase">
        UrbanFungi Estates
      </div>

      {/* Mobile menu toggle */}
      <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          menuOpen
            ? "flex flex-col items-center gap-4 py-4 absolute top-full left-0 right-0 bg-[#0f0425] md:hidden"
            : "hidden md:flex flex-1 justify-center items-center gap-8"
        }`}
      >
        <NavLink to="/" className={navLinkClasses} onClick={closeMenu}>
          Home
        </NavLink>

        {/* Services Dropdown */}
        <div className="relative group md:ml-4">
          <button
            onClick={toggleServices}
            className="flex items-center gap-1 transition hover:text-yellow-400 text-white"
          >
            Services <FiChevronDown />
          </button>

          {/* Desktop dropdown */}
          <div className="hidden md:group-hover:flex absolute top-full left-1/2 transform -translate-x-1/2 bg-[#0f0425] flex-col py-2 w-64 rounded shadow-lg">
            {services.map((s, i) => (
              <NavLink
                to={`/services/${s.replace(/\s+/g, "-").toLowerCase()}`}
                key={i}
                className="px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
              >
                {s}
              </NavLink>
            ))}
          </div>

          {/* Mobile dropdown */}
          {menuOpen && servicesOpen && (
            <div className="flex flex-col mt-2 bg-[#1b0737] rounded w-full">
              {services.map((s, i) => (
                <NavLink
                  to={`/services/${s.replace(/\s+/g, "-").toLowerCase()}`}
                  key={i}
                  className="px-4 py-2 text-white hover:bg-yellow-500 hover:text-black transition"
                  onClick={() => {
                    closeMenu();
                    setServicesOpen(false);
                  }}
                >
                  {s}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavbarMain;
