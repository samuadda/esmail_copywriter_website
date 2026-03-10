"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({ 
    children, 
    className = "" 
}: { 
    children: React.ReactNode; 
    className?: string 
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        x.set((clientX - centerX) * 0.5); // Increase strength for noticeable effect
        y.set((clientY - centerY) * 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <m.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseXSpring, y: mouseYSpring }}
            className={`inline-block ${className}`}
        >
            {children}
        </m.div>
    );
}

