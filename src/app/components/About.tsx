// about.tsx
"use client";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const paragraphs = [
    "I’m a frontend developer with 3+ years of experience building scalable, responsive, and user-focused web applications using React, Next.js, and TypeScript.",
    "I have hands-on experience with Redux Toolkit, Git, Material UI, Tailwind CSS, and Framer Motion, and I enjoy crafting clean UI architectures with smooth animations and predictable state management.",
    "I focus on writing maintainable, reusable components, collaborating efficiently using Git, and delivering performance-optimized interfaces that provide a great user experience across devices.",
  ];

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.span>
        </h2>

        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            custom={i}
            variants={fadeInLeft}
            className="text-slate-300 leading-relaxed mb-4"
          >
            {p}
          </motion.p>
        ))}
      </motion.div>

      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-2xl shadow-lg"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
      />
    </section>
  );
}
