"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  staggerItem,
} from "./MotionVariants";

interface MotionFadeProps {
  children: React.ReactNode;
  variant?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn";
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
  once?: boolean;
}

const variantMap = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
};

export const MotionFade: React.FC<MotionFadeProps> = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration,
  className = "",
  viewportAmount = 0.2,
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const selectedVariant = variantMap[variant];

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      transition={
        delay || duration
          ? {
              delay,
              ...(duration ? { duration } : {}),
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionStaggerGroup: React.FC<{
  children: React.ReactNode;
  className?: string;
  viewportAmount?: number;
  once?: boolean;
}> = ({ children, className = "", viewportAmount = 0.15, once = true }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionStaggerChild: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
};

export default MotionFade;
