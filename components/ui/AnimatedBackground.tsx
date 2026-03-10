"use client";

import { m, useReducedMotion } from "framer-motion";
import { PRIMARY_GRADIENT, SECONDARY_GRADIENT } from "@/lib/design-utils";

type BackgroundVariant = 
    | "default" 
    | "purple-blue" 
    | "orange-yellow" 
    | "minimal" 
    | "geometric"
    | "accent-only"
    | "subtle";

interface AnimatedBackgroundProps {
    variant?: BackgroundVariant;
}

const variantConfigs: Record<BackgroundVariant, {
    bubbles: Array<{
        gradient: string;
        position: { top?: string; bottom?: string; left?: string; right?: string };
        size: string;
        animation: {
            x: number[];
            y: number[];
            scale: number[];
        };
        duration: number;
        delay?: number;
        opacity?: number;
    }>;
}> = {
    default: {
        bubbles: [
            {
                gradient: PRIMARY_GRADIENT,
                position: { top: "5rem", right: "2.5rem" },
                size: "w-96 h-96",
                animation: { x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] },
                duration: 20,
            },
            {
                gradient: SECONDARY_GRADIENT,
                position: { bottom: "5rem", left: "2.5rem" },
                size: "w-96 h-96",
                animation: { x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.15, 1] },
                duration: 25,
                delay: 1,
            },
        ],
    },
    "purple-blue": {
        bubbles: [
            {
                gradient: "from-purple-500 to-blue-500",
                position: { top: "10rem", left: "10%" },
                size: "w-80 h-80",
                animation: { x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.1, 1] },
                duration: 22,
            },
            {
                gradient: "from-blue-400 to-cyan-400",
                position: { bottom: "8rem", right: "15%" },
                size: "w-72 h-72",
                animation: { x: [0, -25, 0], y: [0, 35, 0], scale: [1, 1.2, 1] },
                duration: 28,
                delay: 0.5,
            },
        ],
    },
    "orange-yellow": {
        bubbles: [
            {
                gradient: "from-yellow-400 to-amber-400",
                position: { bottom: "12rem", left: "25%" },
                size: "w-80 h-80",
                animation: { x: [0, 45, 0], y: [0, -30, 0], scale: [1, 1.1, 1] },
                duration: 26,
                delay: 1.2,
                opacity: 10,
            },
        ],
    },
    minimal: {
        bubbles: [
            {
                gradient: PRIMARY_GRADIENT,
                position: { top: "50%", right: "5%" },
                size: "w-64 h-64",
                animation: { x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.05, 1] },
                duration: 30,
            },
        ],
    },
    geometric: {
        bubbles: [
            {
                gradient: "from-pink-400 to-rose-400",
                position: { bottom: "10rem", right: "30%" },
                size: "w-64 h-64",
                animation: { x: [0, -40, 0], y: [0, -25, 0], scale: [1, 1.15, 1] },
                duration: 25,
                delay: 0.8,
            },
            {
                gradient: "from-teal-400 to-cyan-400",
                position: { top: "60%", left: "10%" },
                size: "w-56 h-56",
                animation: { x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.1, 1] },
                duration: 27,
                delay: 1.5,
            },
        ],
    },
    "accent-only": {
        bubbles: [
            {
                gradient: SECONDARY_GRADIENT,
                position: { top: "20%", right: "10%" },
                size: "w-96 h-96",
                animation: { x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] },
                duration: 23,
            },
        ],
    },
    subtle: {
        bubbles: [
            {
                gradient: "from-purple-400 to-blue-400",
                position: { top: "5%", left: "5%" },
                size: "w-56 h-56",
                animation: { x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] },
                duration: 32,
                opacity: 8,
            },
            {
                gradient: "from-orange-400 to-yellow-400",
                position: { bottom: "5%", right: "5%" },
                size: "w-48 h-48",
                animation: { x: [0, -25, 0], y: [0, 30, 0], scale: [1, 1.1, 1] },
                duration: 35,
                delay: 1.5,
                opacity: 10,
            },
        ],
    },
};

export default function AnimatedBackground({ variant = "default" }: AnimatedBackgroundProps) {
    const prefersReducedMotion = useReducedMotion();
    const config = variantConfigs[variant];
    
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
            {config.bubbles.map((bubble, index) => (
                <m.div
                    key={index}
                    animate={prefersReducedMotion ? {} : {
                        x: bubble.animation.x,
                        y: bubble.animation.y,
                        scale: bubble.animation.scale,
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: bubble.delay || 0,
                    }}
                    className={`absolute ${bubble.size} bg-gradient-to-br ${bubble.gradient}/${bubble.opacity || 20} rounded-full blur-[100px]`}
                    style={{
                        ...bubble.position,
                    }}
                />
            ))}
        </div>
    );
}

