"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PRIMARY_GRADIENT, SECONDARY_GRADIENT } from "@/lib/design-utils";

export default function AnimatedBackground() {
    const prefersReducedMotion = useReducedMotion();
    
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
            <motion.div
                animate={prefersReducedMotion ? {} : {
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className={`absolute top-20 right-10 w-96 h-96 bg-gradient-to-br ${PRIMARY_GRADIENT}/20 rounded-full blur-3xl`}
            />
            <motion.div
                animate={prefersReducedMotion ? {} : {
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className={`absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br ${SECONDARY_GRADIENT}/20 rounded-full blur-3xl`}
            />
        </div>
    );
}

