"use client";

import { m, useReducedMotion } from "framer-motion";
import { Brain, Feather } from "lucide-react";
import { OrbitingCircles } from "./ui/orbiting-circles";

export default function PhilosophyAnimation() {
    const prefersReducedMotion = useReducedMotion();
    
    return (
        <div className="relative h-96 w-full rounded-3xl overflow-hidden bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 flex items-center justify-center group shadow-sm hover:shadow-md transition-all duration-500">
            {/* Animated Background Grid */}
            <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ 
                    backgroundImage: 'radial-gradient(#f44674 1px, transparent 1px)', 
                    backgroundSize: '24px 24px' 
                }}
                aria-hidden="true"
            />

            {/* Glowing Orbs Background */}
            <m.div
                animate={prefersReducedMotion ? {} : {
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 bg-[#f44674]/10 rounded-full blur-3xl"
                aria-hidden="true"
            />
            <m.div
                animate={prefersReducedMotion ? {} : {
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute w-64 h-64 bg-[#4ADE80]/10 rounded-full blur-3xl"
                aria-hidden="true"
            />

            {/* Orbital System */}
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Central Hub */}
                <m.div 
                    initial={{ scale: 0.9 }}
                    animate={prefersReducedMotion ? { scale: 1 } : {
                        scale: [0.95, 1, 0.95],
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="relative z-20 px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700 shadow-2xl text-center min-w-[160px]"
                >
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f44674] to-[#4ADE80]">
                        علم + فن
                    </span>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium tracking-wide">
                        سيكولوجية + إبداع
                    </div>
                </m.div>

                {/* Orbiting Circles */}
                <OrbitingCircles
                    className="size-14"
                    duration={prefersReducedMotion ? 0 : 10}
                    radius={160}
                    path={true}
                    iconSize={56}
                >
                    {/* Science Orbit (Logic/Brain) - Green */}
                    <m.div 
                        className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl border-2 border-[#4ADE80]/20 shadow-xl flex items-center justify-center text-[#4ADE80] relative z-10 group/icon"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Brain className="w-7 h-7" aria-hidden="true" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#4ADE80]/20 blur-lg -z-10 rounded-full group-hover/icon:bg-[#4ADE80]/30 transition-colors" />
                    </m.div>

                    {/* Art Orbit (Creativity/Feather) - Pink */}
                    <m.div 
                        className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl border-2 border-[#f44674]/20 shadow-xl flex items-center justify-center text-[#f44674] relative z-10 group/icon"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Feather className="w-7 h-7" aria-hidden="true" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#f44674]/20 blur-lg -z-10 rounded-full group-hover/icon:bg-[#f44674]/30 transition-colors" />
                    </m.div>
                </OrbitingCircles>
            </div>
        </div>
    );
}

