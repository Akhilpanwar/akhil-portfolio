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
    `
Frontend Developer with 4 years of experience building scalable, responsive, and high-performance web applications using React.js, Next.js, JavaScript (ES6+), HTML5, and CSS3. Strong expertise in React Hooks, component-driven architecture, and Redux Toolkit for predictable state management.

Hands-on experience working with UI libraries such as Ant Design (Antd), Material UI, and Tailwind CSS, focusing on clean UI design, accessibility, and reusable components. Skilled in REST API integration, performance optimization, and debugging using browser DevTools to deliver smooth and user-focused interfaces.

Proficient in testing with Jest, version control using Git, and working in Agile environments with Jira. Passionate about building maintainable codebases, collaborating efficiently with cross-functional teams, and delivering performance-optimized frontend solutions across devices.
`,
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
