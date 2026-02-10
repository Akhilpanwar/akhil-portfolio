"use client";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // <-- correct easing array
  },
};

export default function Hero() {
  return (
    <section
      id="Hero"
      className="md:h-screen flex flex-col items-center md:pt-0 md:items-center md:justify-center text-center px-6"
    >
      <motion.img
        src="./profile/profile.jpg"
        alt="Profile"
        className="md:w-80 md:h-80 w-30 h-30 rounded-full justify-center object-cover mb-6 border-4 border-slate-600"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      />

      <motion.div
        className="flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold">
          Hi, I’m Akhil Panwar 👋
        </motion.h1>

        <motion.p variants={item} className="mt-4 text-2xl text-slate-300">
          Frontend Developer • React • TypeScript
        </motion.p>
      </motion.div>
    </section>
  );
}
