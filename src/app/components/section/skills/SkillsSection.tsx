"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib";
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-black/40 py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-3"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-slate-400 text-sm sm:text-base mb-10 sm:mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Technologies and tools I use to build scalable frontend applications
      </motion.p>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-slate-900 border border-white/10 rounded-2xl p-5 sm:p-6"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs sm:text-sm rounded-full
                  bg-white/5 border border-white/10 text-slate-300 whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
