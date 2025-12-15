/**
 * Design Token Utilities
 * 
 * Helper functions to apply design tokens as Tailwind classes.
 * Since Tailwind uses static class names, we return actual Tailwind class strings.
 */

import { SPACING, TYPOGRAPHY } from "./design-tokens";

/**
 * Primary CTA button classes (gradient primary)
 */
export const PRIMARY_CTA_CLASSES = "bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-[#fd2862] hover:to-[#ca1d4b] text-white font-bold rounded-full shadow-lg transition-all duration-300";

/**
 * Secondary CTA button classes (outline style)
 */
export const SECONDARY_CTA_CLASSES = "bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold rounded-full border-2 border-gray-200 dark:border-gray-700 hover:border-[#f44674] transition-all duration-300";

/**
 * Primary gradient classes
 */
export const PRIMARY_GRADIENT = "from-[#f44674] to-[#fd2862]";

/**
 * Secondary gradient classes
 */
export const SECONDARY_GRADIENT = "from-[#4ADE80] to-[#22c55e]";

/**
 * Primary gradient text classes
 */
export const PRIMARY_GRADIENT_TEXT = "text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]";

/**
 * Primary color text classes
 */
export const PRIMARY_TEXT = "text-[#f44674]";

/**
 * Primary badge classes
 */
export const PRIMARY_BADGE = "text-[#f44674] bg-[#f44674]/10 border border-[#f44674]/20";

/**
 * Focus ring classes for interactive elements (buttons, links)
 */
export const FOCUS_RING = "focus:outline-none focus:ring-2 focus:ring-[#f44674]/50 focus:ring-offset-2";

/**
 * Focus ring classes for form inputs (lighter opacity)
 */
export const FOCUS_RING_INPUT = "focus:border-[#f44674] focus:ring-2 focus:ring-[#f44674]/20";

/**
 * Get section spacing classes
 */
export function getSectionSpacing() {
  return SPACING.section.py;
}

/**
 * Get section container classes
 */
export function getSectionContainer() {
  return `${SPACING.container.padding} ${SPACING.container.maxWidth}`;
}

/**
 * Get section padding classes
 */
export function getSectionPadding() {
  return SPACING.section.px;
}

/**
 * Get heading typography classes
 */
export function getHeadingClasses(level: "h1" | "h2" | "h3" | "h4") {
  return TYPOGRAPHY.heading[level];
}

/**
 * Get body typography classes
 */
export function getBodyClasses(size: "large" | "base" | "small" | "xs" = "base") {
  return TYPOGRAPHY.body[size];
}

