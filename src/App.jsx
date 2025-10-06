// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import NavbarMain from "./components/NavbarMain";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Apartment from "./pages/Apartment";
import Villa from "./pages/Villa";
import Farmhouse from "./pages/Farmhouse";
import Commercial from "./pages/Commercial";
import Land from "./pages/Land";

// Services Pages
import PropertyOnBoarding from "./pages/services/PropertyOnBoarding";
import TenantDiscovery from "./pages/services/TenantDiscovery";
import TenantOnBoard from "./pages/services/TenantOnBoard";
import PropertyInspections from "./pages/services/PropertyInspections";
import MaintenanceServices from "./pages/services/MaintenanceServices";
import PersonalizedDashboard from "./pages/services/PersonalizedDashboard";

function App() {
  return (
    <div className="bg-[#0f0425] min-h-screen flex flex-col font-inter text-white">
      
      {/* Navbar */}
      <NavbarMain />

      {/* Main Content */}
      <main className="flex-1 font-serif">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/villa" element={<Villa />} />
          <Route path="/farmhouse" element={<Farmhouse />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/land" element={<Land />} />

          {/* Services Routes */}
          <Route path="/services/property-on-boarding" element={<PropertyOnBoarding />} />
          <Route path="/services/tenant-discovery" element={<TenantDiscovery />} />
          <Route path="/services/tenant-on-board" element={<TenantOnBoard />} />
          <Route path="/services/property-inspections" element={<PropertyInspections />} />
          <Route path="/services/maintenance-services" element={<MaintenanceServices />} />
          <Route path="/services/personalized-dashboard" element={<PersonalizedDashboard />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
