"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import CompanyProjects from "../Projects/CompanyProjects";
import PersonalProjects from "../Projects/PersonalProjects";
import Contact from "../Contact";

export default function MainPage() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="min-h-screen bg-linear-to-br from-black via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: { duration: 1, ease: "easeInOut" },
            }}
            onAnimationComplete={() => {
              setTimeout(() => setShowSplash(false), 800);
            }}
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

      {/* Main Content */}
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Header />

          <Hero />
          <About />
          <CompanyProjects />
          <PersonalProjects />
          <Contact />
        </motion.div>
      )}
    </main>
  );
}
