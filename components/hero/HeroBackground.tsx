"use client";

import { m } from "framer-motion";

interface Particle {
    id: number;
    xMovement: number;
    duration: number;
    bottom: number;
    left: number;
}

interface HeroBackgroundProps {
    prefersReducedMotion: boolean | null;
    particles: Particle[];
}

export function HeroBackground({ prefersReducedMotion, particles }: HeroBackgroundProps) {
    return (
        <>
            <m.div
                animate={prefersReducedMotion ? {} : { x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/20 to-[#fd2862]/20 rounded-full blur-3xl"
            />
            <m.div
                animate={prefersReducedMotion ? {} : { x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4ADE80]/20 to-[#22c55e]/20 rounded-full blur-3xl"
            />
            <m.div
                animate={prefersReducedMotion ? {} : { rotate: [0, 360], scale: [1, 1.05, 1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
            />
            {particles.map((particle) => (
                <m.div
                    key={particle.id}
                    animate={prefersReducedMotion ? {} : { y: [0, -100, 0], x: [0, particle.xMovement, 0], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: particle.duration, repeat: Infinity, delay: particle.id * 0.5, ease: "easeInOut" }}
                    className="absolute w-2 h-2 bg-gradient-to-r from-[#f44674] to-[#4ADE80] rounded-full"
                    style={{ left: `${particle.left}%`, bottom: `${particle.bottom}%` }}
                />
            ))}
        </>
    );
}
