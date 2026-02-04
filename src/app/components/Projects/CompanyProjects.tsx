"use client";

import { motion } from "framer-motion";
import { LiveDemoButton } from "./LiveDemo";

const companyProjects = [
  {
    name: "VoicePing",
    url: "https://voiceping.net/en/",
    img: "/voiceping.jpg",
    description:
      "Worked as a Frontend Developer on a real-time voice and audio conferencing platform.",
  },
  {
    name: "Umaid CF",
    url: "https://www.umaidcf.in/",
    img: "/umaidCf.png",
    description:
      "Contributed to the frontend of a community funding platform with focus on UI and usability.",
  },

  {
    name: "Stusphere SIS",
    url: "https://stusphere.org/sis/",
    img: "/stusphere.png",
    description:
      "Worked on a Student Information System with dashboards and role-based views.",
  },
];

export default function CompanyProjects() {
  return (
    <section id="company-projects" className="bg-black/40 py-24 px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Company Projects
      </motion.h2>

      <motion.p
        className="text-center text-slate-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Projects I worked on professionally as a Frontend Developer
      </motion.p>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {companyProjects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              delay: i * 0.1,
            }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative flex-1 min-w-[280px] max-w-sm bg-slate-900
              rounded-2xl overflow-hidden border border-white/10 shadow-lg"
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

            {/* Glow Overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl
              bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10
              opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
