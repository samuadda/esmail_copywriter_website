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
            {/* Background blobs — use CSS animations instead of JS-driven framer-motion for less main-thread work */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/20 to-[#fd2862]/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4ADE80]/20 to-[#22c55e]/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob-slow" />

            {/* Particles — only show on lg+ screens to reduce mobile main-thread work */}
            {!prefersReducedMotion && (
                <div className="hidden lg:contents">
                    {particles.map((particle) => (
                        <m.div
                            key={particle.id}
                            animate={{ y: [0, -100, 0], x: [0, particle.xMovement, 0], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.id * 0.5, ease: "easeInOut" }}
                            className="absolute w-2 h-2 bg-gradient-to-r from-[#f44674] to-[#4ADE80] rounded-full"
                            style={{ left: `${particle.left}%`, bottom: `${particle.bottom}%` }}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
