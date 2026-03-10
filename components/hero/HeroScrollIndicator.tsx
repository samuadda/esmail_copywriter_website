"use client";

import { m } from "framer-motion";

interface HeroScrollIndicatorProps {
    href: string;
    label: string;
    prefersReducedMotion: boolean | null;
}

export function HeroScrollIndicator({ href, label, prefersReducedMotion }: HeroScrollIndicatorProps) {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.5 }}
            className="flex justify-center mt-12"
        >
            <m.a
                href={href}
                animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#f44674] dark:hover:text-[#f44674] transition-colors"
            >
                <span className="text-sm font-medium">{label}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </m.a>
        </m.div>
    );
}
