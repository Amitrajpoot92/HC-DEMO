 "use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// 🖼️ Local images
import rf5 from "../assets/RentalFraud/rf5.png";
import rf4 from "../assets/RentalFraud/rf4.png";
import rf2 from "../assets/RentalFraud/rf2.png";

export default function RentFraud() {
  // --- Rent Fraud Cases Data ---
  const fraudCases = [
    {
      title: "Bengaluru Lease Scam (₹50 Crore)",
      details:
        "In September 2025, Bengaluru police arrested three individuals involved in a massive property leasing scam. The accused, agents of Catena Homes India Pvt Ltd, misled tenants into paying large sums for leases, while property owners remained unaware. Hundreds of families were left in financial distress.",
      source: "The Indian Express",
      link: "https://indianexpress.com/article/cities/bangalore/bengaluru-property-firm-dupes-hundreds-in-lease-scam-10257603/?utm_source=chatgpt.com",
      src: rf5,
    },
    {
      title: "Panchkula Online Rental Scam (₹2.2 Lakh)",
      details:
        "In May 2025, a retired Haryana official was defrauded of ₹2.2 lakh in an online rental scam. The fraudsters posed as army officials and convinced the victim to pay a deposit for a non-existent property.",
      source: "Hindustan Times",
      link: "https://www.hindustantimes.com/cities/chandigarh-news/panchkula-man-loses-2-2-lakh-in-online-rental-scam-101748467010242.html?utm_source=chatgpt.com",
      src: rf4,
    },
    {
      title: "Bhopal Online Car Rental Scam (₹2.5 Crore Assets Seized)",
      details:
        "In January 2025, a cyber-fraud gang operating through an online car rental app was uncovered in Bhopal. Police seized assets worth ₹2.5 crore, including high-end cars, mobile phones, and cash-counting machines.",
      source: "The Times of India",
      link: "https://timesofindia.indiatimes.com/city/bhopal/online-car-rent-scam-5-held-2-5-cr-assets-seized/articleshow/117753640.cms?utm_source=chatgpt.com",
      src: rf2,
    },
  ];

  // --- Props (autoplay, active slide handling) ---
  const autoplay = true;
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % fraudCases.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + fraudCases.length) % fraudCases.length);
  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  // --- Hero-style typing animation (single text only) ---
  const headingWord = "Rental Fraud";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? headingWord.substring(0, prev.length - 1)
          : headingWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === headingWord) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <div className="w-full h-screen bg-black text-white py-12 px-4 md:px-8 lg:px-12 font-sans">
      {/* --- Heading Section --- */}
      <div className="text-center mb-4">
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-wide uppercase"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px white",
          }}
        >
          {text}
        </h1>
        <p className="mt-1 text-lg md:text-xl text-[#8af6fc]">
          Stay Informed: Latest News and Alerts on Rental Scams
        </p>
      </div>

      <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2 h-full items-center">
        {/* Left Image Section */}
        <div className="flex items-center justify-center h-full">
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {fraudCases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    zIndex: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    zIndex: isActive(index)
                      ? 40
                      : fraudCases.length + 2 - index,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    zIndex: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={caseItem.src}
                    alt={caseItem.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full object-cover object-center rounded-3xl"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fa6304]/30 to-[#8af6fc]/20 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center h-full">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-[#fa6304]">
              {fraudCases[active].title}
            </h3>
            <p className="text-sm text-[#8af6fc]">{fraudCases[active].source}</p>
            <motion.p className="mt-4 text-lg text-gray-300">
              {fraudCases[active].details.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* Know More Button */}
            <motion.a
              href={fraudCases[active].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-6 py-2 font-sans text-base font-semibold rounded-full bg-[#fa6304] text-white border-2 border-transparent hover:bg-[#ff8645] transition-all duration-200"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              Know More
            </motion.a>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fa6304] hover:bg-[#ff8645] transition-colors shadow-lg"
              >
                <IconArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fa6304] hover:bg-[#ff8645] transition-colors shadow-lg"
              >
                <IconArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
