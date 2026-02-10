"use client";
import { motion } from "framer-motion";
import { ABOUT_PARAGRAPHS } from "@/lib";
const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.25, duration: 0.6 },
  }),
};

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        {/* Heading */}
        <h2 className="font-bold md:mb-6  text-white text-[clamp(2rem,5vw,3.5rem)]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.span>
        </h2>

        {/* Content */}
        <div className="max-w-3xl">
          {ABOUT_PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={fadeInLeft}
              className="mb-6 text-slate-300 leading-relaxed text-[clamp(1rem,1.1vw,1.125rem)]"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
