"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  // puedes exponer props para ajustar la animación si quieres
  duration?: number;
  y?: number;
};

export default function AnimateIn({
  children,
  className = "",
  duration = 0.6,
  y = 16,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
