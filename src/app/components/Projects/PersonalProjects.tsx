"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const personalProjects = [
  {
    name: "Dynamic Dashboard",
    url: "https://dynamic-dashboard-jexiyiutz-akhilpanwars-projects.vercel.app/",
    img: "/dynamic-dashboard.jpg",
    description:
      "A self-built dynamic dashboard using React, focusing on state management and reusable components.",
  },
  {
    name: "Cat Generator",
    url: "https://catworld-44ql5qdnz-akhilpanwars-projects.vercel.app/",
    img: "/cat-generator.jpg",
    description:
      "A personal project that fetches random cat images using public APIs, displaying breed details such as name, origin, temperament, and lifespan. Built to practice async handling, API integration, and dynamic UI rendering in React.",
  },
  {
    name: "Drag & Drop To-Do List",
    url: "https://todo-list-6sscyp3c7-akhilpanwars-projects.vercel.app/",
    img: "/todo-dnd.jpg",
    description:
      "A drag-and-drop to-do list application demonstrating advanced React interactions and UX.",
  },
  {
    name: "gemini-clone",
    url: "https://gemini-app-tau-six.vercel.app/Register",
    img: "/gemini.jpg",
    description:
      "A Gemini-inspired application with OTP-based authentication. For demo purposes, the OTP can be viewed in the browser console during login, showcasing the complete authentication flow and frontend handling.",
  },
  {
    name: "Task Manager",
    url: "https://task-manager-seven-woad-54.vercel.app/",
    img: "/task-manager.jpg",
    description:
      "A fully functional Task Manager where you can add, edit, and delete tasks. Tasks are categorized by priority (High, Medium, Low) with different colors for each priority level. Built with React, Next.js, and Tailwind CSS.",
  },
];

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">
        My Personal Projects
      </h2>
      <p className="text-center text-slate-400 mb-12">
        Self-initiated projects built to learn, experiment, and improve
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {personalProjects.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Link href={p.url} target="_blank">
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-slate-400 text-sm">{p.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
