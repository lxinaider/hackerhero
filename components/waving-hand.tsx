"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function WavingHeading() {
  const [phase, setPhase] = useState<"emoji" | "text">("emoji");

  useEffect(() => {
    const t = setTimeout(() => setPhase("text"), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-32">
      <AnimatePresence mode="sync">
        {phase === "emoji" ? (
          <motion.span
            key="emoji"
            className="text-8xl select-none"
            style={{ display: "inline-block", originX: 0.7, originY: 0.9 }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 24, -14, 24, -10, 16, 0],
            }}
            exit={{ opacity: 0, scale: 0.4, filter: "blur(12px)" }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
              rotate: {
                delay: 0.3,
                duration: 1.6,
                ease: "easeInOut",
                times: [0, 0.15, 0.35, 0.55, 0.7, 0.85, 1],
              },
            }}
          >
            👋
          </motion.span>
        ) : (
          <motion.h1
            key="text"
            className="text-8xl font-extrabold font-serif"
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, scale: 1.3, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Safedu
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}
