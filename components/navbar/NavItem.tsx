"use client";

import { useState } from "react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NavItemProps {
    href: string;
    label: string;
    isActive?: boolean;
    delay?: number;
    isSpecial?: boolean;
}

export function NavItem({ href, label, isActive, delay = 0, isSpecial }: NavItemProps) {
    const prefersReducedMotion = useReducedMotion();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={href} passHref legacyBehavior>
            <m.a
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => !prefersReducedMotion && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-medium relative min-w-0 overflow-hidden no-underline",
                    isActive ? "text-[#f44674] dark:text-[#f44674]" : "text-gray-700 dark:text-gray-200",
                    isSpecial ? "text-gray-900 dark:text-white font-bold" : ""
                )}
            >
                {!isActive && !isSpecial && (
                    <m.div
                        className="absolute inset-0 rounded-xl bg-gray-100 dark:bg-gray-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 0.8 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                )}
                {isActive && !isSpecial && (
                    <m.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl bg-[#f44674]/10 dark:bg-[#f44674]/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
                <span className="relative z-10 truncate block">{label}</span>
            </m.a>
        </Link>
    );
}
