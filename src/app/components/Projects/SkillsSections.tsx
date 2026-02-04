"use client";

import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
  ],
  "State Management": ["Redux", "Redux Toolkit", "React Hooks"],
  "UI & Styling": [
    "Ant Design (Antd)",
    "Material UI",
    "Tailwind CSS",
    "Component-driven Architecture",
    "Responsive Design",
  ],
  "APIs & Performance": [
    "REST API Integration",
    "Performance Optimization",
    "Lazy Loading",
    "Code Splitting",
  ],
  "Testing & Tools": [
    "Jest",
    "Browser DevTools",
    "Debugging",
    "Git",
    "Agile (Jira)",
  ],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-black/40 py-24 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-slate-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Technologies and tools I use to build scalable frontend applications
      </motion.p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-900 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full
                  bg-white/5 border border-white/10 text-slate-300"
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
