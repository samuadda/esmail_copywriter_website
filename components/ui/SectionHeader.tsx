"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    badge: string;
    title: string;
    highlight: string;
    description?: string;
    isInView: boolean;
}

export default function SectionHeader({ badge, title, highlight, description, isInView }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-[#f44674] bg-[#f44674]/10 rounded-full border border-[#f44674]/20"
            >
                {badge}
            </motion.span>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl">
                {title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
                    {highlight}
                </span>
            </h2>
            {description && (
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </motion.div>
    );
}

