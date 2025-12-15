/**
 * Design Tokens
 * 
 * Centralized design system values for colors, spacing, typography, etc.
 * This ensures consistency across the project and makes theme changes easier.
 */

export const COLORS = {
  primary: {
    DEFAULT: "#f44674",
    dark: "#fd2862",
    light: "#f44674",
    hover: "#ca1d4b",
  },
  secondary: {
    DEFAULT: "#4ADE80",
    dark: "#22c55e",
    light: "#4ADE80",
  },
  gradients: {
    primary: "from-[#f44674] to-[#fd2862]",
    secondary: "from-[#4ADE80] to-[#22c55e]",
    purple: "from-purple-500 to-blue-500",
    orange: "from-orange-500 to-yellow-500",
    pink: "from-pink-500 to-rose-500",
    teal: "from-teal-500 to-cyan-500",
  },
  backgrounds: {
    light: "bg-white dark:bg-gray-900",
    subtle: "bg-gray-50 dark:bg-gray-800",
    card: "bg-white dark:bg-gray-900",
  },
} as const;

export const SPACING = {
  section: {
    py: "py-20 sm:py-28",
    px: "px-4 sm:px-6 lg:px-8",
  },
  container: {
    maxWidth: "max-w-7xl",
    padding: "px-4 mx-auto",
  },
} as const;

export const TYPOGRAPHY = {
  heading: {
    h1: "text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl",
    h2: "text-3xl font-bold sm:text-4xl md:text-5xl",
    h3: "text-2xl font-bold sm:text-3xl",
    h4: "text-xl font-bold sm:text-2xl",
  },
  body: {
    large: "text-lg sm:text-xl",
    base: "text-base",
    small: "text-sm",
    xs: "text-xs",
  },
} as const;

export const ANIMATIONS = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  easing: {
    easeOut: "easeOut",
    easeInOut: "easeInOut",
    spring: "spring",
  },
} as const;

