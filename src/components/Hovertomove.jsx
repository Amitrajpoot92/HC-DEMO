 "use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ap2 from "../assets/realestate/ap2.png";

const ROTATION_RANGE = 32.5;

// Typing words for heading (like Hero.jsx)
const words = ["Rent", "Apartment", "Villa", "Plaza", "Property"];

const Example = () => {
  // Typing effect for heading
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 120;
    let currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="w-full bg-black text-white py-12 px-4 md:px-8 lg:px-12 font-sans min-h-screen flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 w-full">
        {/* Tilt Card */}
        <div className="w-full md:w-1/3 flex justify-center items-start">
          <TiltCard />
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <FAQSection text={text} />
        </div>
      </div>
    </div>
  );
};

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 120, damping: 12 });
  const ySpring = useSpring(y, { stiffness: 120, damping: 12 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY / height - 0.5) * ROTATION_RANGE) * -1;
    const rY = (mouseX / width - 0.5) * ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-full rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
    >
      <img
        src={ap2}
        alt="Building"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fa6304]/30 to-[#8af6fc]/20 pointer-events-none shadow-2xl" />
    </motion.div>
  );
};

const FAQSection = ({ text }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is PROPDIAL?",
      answer:
        "Propdial is a Property Management and Maintenance company designed to serve homeowners and help them manage their property hassle-free.",
    },
    {
      question: "What is PMS?",
      answer:
        "PMS stands for Property Management Services we provide, which includes:",
      list: [
        "Renting/Leasing – we will find tenants for you",
        "Tenant background verification and rental agreement",
        "Rent collection and bill payment",
        "Quarterly property inspection with photos",
        "Maintenance as needed (painting, plumbing, electrical work, etc.)",
      ],
    },
    {
      question: "What is the use of PMS agreement?",
      answer:
        "PMS is a legal document that allows us to work on your behalf when managing your property. It authorizes us to handle tenant coordination, repairs, rent collection, and more.",
    },
    {
      question: "I don’t need full PMS services. Can I just rent my property?",
      answer:
        "We provide renting services only to properties under our Property Management Services.",
    },
    {
      question: "Why do you ask for 15 days BROKERAGE?",
      answer:
        "We pass brokerage fees to our brokers so they prioritize your property. Propdial does not keep any brokerage.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-black rounded-3xl p-6 shadow-2xl border border-[#fa6304] overflow-hidden flex flex-col max-h-[90vh]">
      {/* Animated Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#fa6304] mb-2">
        Smart Investments, Smarter Living{" "}
        <span
          className="text-transparent stroke-white"
          style={{ WebkitTextStroke: "1px white" }}
        >
          {text}
        </span>
      </h2>
      <p className="text-lg md:text-xl text-[#8af6fc] mb-6">
        Top 5 Common Queries Clarified
      </p>

      <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-white/20 pb-2">
            <button
              onClick={() => toggleFAQ(idx)}
              className="flex justify-between w-full items-center text-left focus:outline-none"
            >
              <span className="font-semibold text-white">{`${idx + 1}. ${faq.question}`}</span>
              {activeIndex === idx ? (
                <HiChevronUp className="text-xl text-[#fa6304]" />
              ) : (
                <HiChevronDown className="text-xl text-[#fa6304]" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === idx && (
                <motion.div
                  key={`faq-${idx}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mt-2 text-gray-200 text-left overflow-hidden"
                >
                  <p>{faq.answer}</p>
                  {faq.list && (
                    <ul className="list-disc ml-5 mt-1">
                      {faq.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 bg-[#fa6304] text-white rounded-full hover:bg-[#ff8645] transition-all duration-200 self-start">
        More FAQ
      </button>
    </div>
  );
};

export default Example;
