 import React from "react";
import { FiClipboard, FiCheckCircle, FiFileText, FiBarChart2 } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-1">Work Flow</p>
      <p className="text-slate-500 mb-4">Property Management Services</p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Property On-Boarding"
          subtitle="Property onboarding initiates by collecting pertinent data: ownership details, property type, and existing leases, fueling our management system efficiently."
          href="#"
          Icon={FiClipboard}
          hoverColor="#fa6304"
        />
        <Card
          title="Inspection & Agreement"
          subtitle="Propdial initiates a property inspection to evaluate its condition, guiding maintenance decisions. We facilitate lease agreement signings for clarity and mutual consent."
          href="#"
          Icon={FiCheckCircle}
          hoverColor="#8af6fc"
        />
        <Card
          title="Financial & Legal Compliance"
          subtitle="Propdial maintains thorough property financial records, delivering regular statements to owners. We guarantee property compliance with local, state, and government laws."
          href="#"
          Icon={FiFileText}
          hoverColor="#fa6304"
        />
        <Card
          title="Reporting & Communication"
          subtitle="Propdial delivers periodic property reports to owners, including updates on property status, financial performance, and noteworthy developments."
          href="#"
          Icon={FiBarChart2}
          hoverColor="#8af6fc"
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href, hoverColor }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      {/* Custom hover gradient */}
      <div
        className="absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"
        style={{ background: `linear-gradient(to right, ${hoverColor}, ${hoverColor})` }}
      />

      {/* Background icon */}
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-black-400 group-hover:rotate-12 transition-transform duration-300" />
      
      {/* Card content */}
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-black transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-black relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-black relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
