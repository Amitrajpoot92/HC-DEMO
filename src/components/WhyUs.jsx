 "use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { CheckCircle2, Users, Tag, Cpu, Eye, UserCheck, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Features with dynamic icons based on title
const features = [
  {
    title: "Satisfied Customers",
    desc: "We have a very happy customer base with a high retention rate of more than 80%, one of the highest across the industry.",
    icon: <Users className="w-6 h-6 text-[#fa6304] mr-3" />,
  },
  {
    title: "Competitive Pricing",
    desc: "Propdial offers one of the best pricing for this service across the industry, without compromising on the quality of the service offered.",
    icon: <Tag className="w-6 h-6 text-[#fa6304] mr-3" />,
  },
  {
    title: "Technology At Forefront",
    desc: "Propdial leverages technology to make the process of property management very smooth and efficient, with minimal effort required by the property owners.",
    icon: <Cpu className="w-6 h-6 text-[#fa6304] mr-3" />,
  },
  {
    title: "Full Transparency",
    desc: "Every step of the property management from tenant onboarding to property inspection and maintenance is documented and updated online immediately.",
    icon: <Eye className="w-6 h-6 text-[#fa6304] mr-3" />,
  },
  {
    title: "Experienced Co-Founders",
    desc: "The co-founders including the core team have decades of experience in the property management space and thus are well equipped to solve customer pain points.",
    icon: <UserCheck className="w-6 h-6 text-[#fa6304] mr-3" />,
  },
  {
    title: "Our Wide Network",
    desc: "Our extensive network of offline brokers and vast reach across multiple online platforms will ensure that you get the best clients without much delay.",
    icon: <MapPin className="w-6 h-6 text-[#fa6304] mr-3" />,
  },
];

const WhyUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Animate heading letters when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      {/* Gradient Lines Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-black/0 to-white/5 pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-sans font-semibold text-white tracking-tight flex justify-center flex-wrap">
          {"WHY US".split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={headingVariants}
              initial="hidden"
              animate={controls}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h2>
        <p className="mt-4 text-xl sm:text-2xl font-serif italic text-[#8af6fc]">
          Elevating Properties, Simplifying Management
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-[#8af6fc]">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-16 bg-[#fa6304]/40 blur-3xl opacity-30 rounded-full" />
    </section>
  );
};

export default WhyUs;
