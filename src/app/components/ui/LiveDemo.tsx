"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type LiveDemoButtonProps = {
  url: string;
};

export function LiveDemoButton({ url }: LiveDemoButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;

    setClicked(true);

    setTimeout(() => {
      window.open(url, "_blank");
      setClicked(false);
    }, 1300);
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={clicked}
      className="relative mt-auto overflow-hidden inline-flex items-center gap-2
    text-sm font-semibold text-cyan-400
    cursor-pointer
    disabled:cursor-not-allowed"
      whileHover={!clicked ? { gap: "12px" } : {}}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-md border border-cyan-400/50"
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={{ opacity: 1, scale: 1 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      {/* Slow fill / shadow */}
      <motion.span
        className="absolute inset-0 bg-linear-to-r from-cyan-400/20 via-cyan-400/40 to-cyan-400/20"
        initial={{ x: "-100%" }}
        animate={clicked ? { x: "0%" } : { x: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Button Text */}
      <motion.span
        className="relative z-10 "
        animate={clicked ? { x: 10, opacity: 0.85 } : { x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        Live Demo
      </motion.span>

      {/* Arrow */}
      <motion.span
        className="relative z-10"
        animate={clicked ? { x: 14 } : { x: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        →
      </motion.span>
    </motion.button>
  );
}
