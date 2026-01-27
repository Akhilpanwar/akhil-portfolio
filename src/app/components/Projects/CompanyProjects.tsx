"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    img: "/umaidcf.png",
    description:
      "Contributed to the frontend of a community funding platform with focus on UI and usability.",
  },
  {
    name: "MRPropTek",
    url: "https://mrproptek.com/",
    img: "/mrproptek.jpg",
    description:
      "Developed and maintained responsive UI for a real-estate technology website.",
  },
  {
    name: "Stusphere SIS",
    url: "https://stusphere.org/sis/",
    img: "/stusphere.png",
    description:
      "Worked on a Student Information System with dashboards and role-based views.",
  },
  {
    name: "SpaceHero",
    url: "https://spacehero.in/",
    img: "/spacehero.png",
    description:
      "Built interactive and animated UI components for a valet web platform.",
  },
];

export default function CompanyProjects() {
  return (
    <section id="company-projects" className="bg-black/40 py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">Company Projects</h2>
      <p className="text-center text-slate-400 mb-12">
        Projects I worked on professionally as a Frontend Developer
      </p>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {companyProjects.map((p, i) => (
          <motion.div
            key={p.name}
            className="flex-1 min-w-[280px] max-w-sm"
            whileHover={{ y: -8, scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: i * 0.1,
            }}
          >
            <Link href={p.url} target="_blank">
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
