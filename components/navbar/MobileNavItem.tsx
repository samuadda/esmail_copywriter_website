"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavItemProps } from "./NavItem";

export function MobileNavItem({ href, label, isActive, delay = 0, isSpecial }: NavItemProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <Link href={href} passHref legacyBehavior>
            <m.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay }}
                whileHover={prefersReducedMotion ? {} : { x: 6, transition: { duration: 0.2, ease: "easeOut" } }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 relative min-w-0 group/mobile overflow-hidden no-underline",
                    isActive ? "text-[#f44674] dark:text-[#f44674]" : "text-gray-700 dark:text-gray-200"
                )}
            >
                <m.div
                    className={cn(
                        "absolute inset-0 rounded-xl transition-all duration-300",
                        isActive
                            ? "bg-[#f44674]/10 dark:bg-[#f44674]/20"
                            : "bg-gray-100/0 dark:bg-gray-800/0 group-hover/mobile:bg-gray-100/80 dark:group-hover/mobile:bg-gray-800/80"
                    )}
                    initial={false}
                />
                {!isActive && !isSpecial && (
                    <m.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#f44674] to-[#fd2862] rounded-l-full"
                        initial={false}
                        whileHover={prefersReducedMotion ? {} : { height: "60%", transition: { duration: 0.3, ease: "easeOut" } }}
                    />
                )}
                <span className="relative z-10 flex items-center gap-2 min-w-0">
                    <span className="truncate">{label}</span>
                    {isSpecial && (
                        <m.span
                            className="w-2 h-2 rounded-full bg-[#4ADE80] flex-shrink-0"
                            animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            aria-hidden="true"
                        />
                    )}
                </span>
            </m.a>
        </Link>
    );
}
