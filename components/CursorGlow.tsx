"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const hideCursor = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", hideCursor);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {isVisible && (
                <m.div
                    className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block"
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                    }}
                >
                    {/* Outer glow */}
                    <m.div
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl"
                        style={{
                            background: "radial-gradient(circle, rgba(244,70,116,0.4) 0%, rgba(74,222,128,0.3) 50%, transparent 70%)",
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    
                    {/* Inner dot */}
                    <m.div
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#f44674] to-[#4ADE80]"
                        animate={{
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </m.div>
            )}
        </>
    );
}

