 // src/components/StatsSection.jsx
import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 10, suffix: "K+", label: "Beautiful Properties" },
  { number: 15, suffix: "+", label: "Years of Experience" },
  { number: 20, suffix: "+", label: "Cities Presence in India" },
  { number: 25, suffix: "K+", label: "Happy Customers" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="w-full py-12" // height aur kam (top-bottom 3rem)
      style={{ backgroundColor: "#fa6304" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center text-white relative overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: [0, -10, 0], opacity: 1 } : {}}
            transition={{
              duration: 4, // animation slow
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.4,
            }}
          >
            <span className="text-5xl sm:text-6xl font-bold relative z-10">
              {isInView && (
                <CountUp end={stat.number} duration={2} separator=",">
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              )}
              {stat.suffix}
            </span>
            <span className="mt-2 text-lg sm:text-xl font-medium z-10">
              {stat.label}
            </span>

            {/* Shiny effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-white/40 opacity-30 animate-[shimmer_2s_infinite]"></span>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-[shimmer_2s_infinite] {
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
