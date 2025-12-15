"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PRIMARY_BADGE, PRIMARY_GRADIENT_TEXT, getHeadingClasses, getBodyClasses } from "@/lib/design-utils";

interface SectionHeaderProps {
    badge: string;
    title: string;
    highlight: string;
    description?: string;
    isInView: boolean;
}

export default function SectionHeader({ badge, title, highlight, description, isInView }: SectionHeaderProps) {
    const prefersReducedMotion = useReducedMotion();
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-center mb-16"
        >
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.2 }}
                className={`inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full ${PRIMARY_BADGE}`}
            >
                {badge}
            </motion.span>
            <h2 className={`${getHeadingClasses("h2")} text-gray-800 dark:text-white`}>
                {title}{" "}
                <span className={PRIMARY_GRADIENT_TEXT}>
                    {highlight}
                </span>
            </h2>
            {description && (
                <p className={`mt-4 ${getBodyClasses("large")} text-gray-600 dark:text-gray-300 max-w-2xl mx-auto break-words`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}

