"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../layout";
import { Footer } from "../layout";
import { sections } from "@/lib/routes";

export default function MainPage() {
  const [showSplash, setShowSplash] = useState(true);
  console.log("Header:", Header);
  console.log("Footer:", Footer);
  console.log("sections:", sections);
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
          {/* Critical (Above the fold) */}
          <Header />
          {/* Below the fold (Lazy loaded via DRY mapping) */}
          {sections.map(({ name, Component }) => (
            <Component key={name} />
          ))}
          <Footer />
        </div>
      )}
    </main>
  );
}
