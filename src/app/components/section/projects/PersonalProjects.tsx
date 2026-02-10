"use client";

import { motion } from "framer-motion";
import { LiveDemoButton } from "../../ui/LiveDemo";
const personalProjects = [
  {
    name: "Dynamic Dashboard",
    url: "https://dynamic-dashboard-jexiyiutz-akhilpanwars-projects.vercel.app/",
    img: "./images/projects/dynamic-dashboard.jpg",
    description:
      "A self-built dynamic dashboard using React, focusing on state management and reusable components.",
  },
  {
    name: "Cat Generator",
    url: "https://catworld.vercel.app",
    img: "./images/projects/cat-generator.jpg",
    description:
      "A personal project that fetches random cat images using public APIs, displaying breed details such as name, origin, temperament, and lifespan. Built to practice async handling, API integration, and dynamic UI rendering in React.",
  },
  {
    name: "Drag & Drop To-Do List",
    url: "https://todo-list-6sscyp3c7-akhilpanwars-projects.vercel.app/",
    img: "./images/projects/todo-dnd.jpg",
    description:
      "A drag-and-drop to-do list application demonstrating advanced React interactions and UX.",
  },
  {
    name: "gemini-clone",
    url: "https://gemini-app-12e3.vercel.app",
    img: "./images/projects/gemini.jpg",
    description:
      "A Gemini-inspired application with OTP-based authentication. For demo purposes, the OTP can be viewed in the browser console during login, showcasing the complete authentication flow and frontend handling.",
  },
  {
    name: "Task Manager",
    url: "https://task-manager-seven-woad-54.vercel.app/",
    img: "./images/projects/task-manager.jpg",
    description:
      "A fully functional Task Manager where you can add, edit, and delete tasks. Tasks are categorized by priority (High, Medium, Low) with different colors for each priority level. Built with React, Next.js, and Tailwind CSS.",
  },
];

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-24 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Personal Projects
      </motion.h2>

      <motion.p
        className="text-center text-slate-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Self-initiated projects built to learn, experiment, and improve
      </motion.p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {personalProjects.map((p, index) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              delay: index * 0.1,
            }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={p.img}
                alt={p.name}
                className="h-40 w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-slate-400 text-sm line-clamp-3">
                {p.description}
              </p>

              {/* Live Demo Button */}
              <LiveDemoButton url={p.url} />
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
