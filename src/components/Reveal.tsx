"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const off = reduce ? OFFSET.none : OFFSET[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: off.x, y: off.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
