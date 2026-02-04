"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../Header";
import Hero from "../Hero";

/* ---------------- Lazy Loaded Sections (Below the fold) ---------------- */

const About = dynamic(() => import("../About"), { ssr: false });
const SkillsSection = dynamic(() => import("./SkillsSections"), { ssr: false });
const CompanyProjects = dynamic(() => import("../Projects/CompanyProjects"), {
  ssr: false,
});
const PersonalProjects = dynamic(() => import("../Projects/PersonalProjects"), {
  ssr: false,
});
const ResumeSection = dynamic(() => import("./ResumeSection"), {
  ssr: false,
});
const Contact = dynamic(() => import("../Contact"), { ssr: false });

/* ---------------------------------------------------------------------- */

export default function MainPage() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="min-h-screen bg-linear-to-br from-black via-slate-900 to-slate-800 text-white">
      {/* ---------------- Splash Screen ---------------- */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: { duration: 1, delay: 0.8, ease: "easeInOut" },
            }}
            onAnimationComplete={() => setShowSplash(false)}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-wide text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              Hi there! 👋 Just a moment…
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- Main Content ---------------- */}
      {!showSplash && (
        <div className="fade-in">
          <Header />

          {/* Critical (Above the fold) */}
          <Hero />

          {/* Below the fold (Lazy loaded) */}
          <About />
          <SkillsSection />
          <CompanyProjects />
          <PersonalProjects />
          <ResumeSection />
          <Contact />
        </div>
      )}
    </main>
  );
}
