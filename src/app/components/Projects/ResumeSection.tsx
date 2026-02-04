"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center bg-slate-900
        border border-white/10 rounded-3xl p-10 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Download Resume</h2>
        <p className="text-slate-400 mb-8">
          A detailed overview of my experience, skills, and professional work
        </p>

        <a
          href="./Akhil_CV.docx"
          download
          className="inline-flex items-center gap-3 px-6 py-3
          rounded-full bg-cyan-500 hover:bg-cyan-400
          text-black font-semibold transition"
        >
          <Download size={18} />
          Download Resume
        </a>

        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl
          bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"
        />
      </motion.div>
    </section>
  );
}
