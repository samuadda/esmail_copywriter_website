"use client";

import { m, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {/* Animated gradient progress bar */}
            <m.div
                className="fixed top-0 left-0 right-0 h-1 origin-left z-50 overflow-hidden"
                style={{ scaleX }}
            >
                <m.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 0%"]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-full h-full"
                    style={{
                        background: "linear-gradient(90deg, #f44674, #4ADE80, #a855f7, #f44674)",
                        backgroundSize: "200% 100%"
                    }}
                />
            </m.div>
            
            {/* Glow effect */}
            <m.div
                className="fixed top-0 left-0 right-0 h-8 origin-left z-40 pointer-events-none"
                style={{ 
                    scaleX,
                    background: "linear-gradient(180deg, rgba(244,70,116,0.2) 0%, transparent 100%)",
                    filter: "blur(8px)"
                }}
            />
        </>
    );
}

