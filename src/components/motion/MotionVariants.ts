import { Variants } from "framer-motion";

export const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DURATION_DEFAULT = 0.55;
export const DISTANCE_DEFAULT = 32;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: DISTANCE_DEFAULT,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_DEFAULT,
      ease: EASE_PREMIUM,
    },
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -DISTANCE_DEFAULT,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_DEFAULT,
      ease: EASE_PREMIUM,
    },
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -42,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 42,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASE_PREMIUM,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_PREMIUM,
    },
  },
};
