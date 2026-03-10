"use client";

import { m, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { getSectionSpacing, getSectionPadding, getSectionContainer } from "@/lib/design-utils";

const skills = [
    { name: "الكتابة الإبداعية", level: 95, color: "from-[#f44674] to-[#fd2862]" },
    { name: "الكتابة الإعلانية", level: 90, color: "from-[#4ADE80] to-[#22c55e]" },
    { name: "كتابة المحتوى", level: 92, color: "from-purple-500 to-blue-500" },
    { name: "السيناريو", level: 88, color: "from-orange-500 to-yellow-500" },
    { name: "السوشيال ميديا", level: 93, color: "from-pink-500 to-rose-500" },
    { name: "SEO Writing", level: 85, color: "from-teal-500 to-cyan-500" },
];

function AnimatedCounter({ target, isInView }: { target: number; isInView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, isInView]);

    return <span>{count}%</span>;
}

export default function Skills() {
    const prefersReducedMotion = useReducedMotion();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="skills" className={`${getSectionSpacing()} bg-gray-50 dark:bg-gray-800 relative overflow-hidden`}>
            <AnimatedBackground variant="orange-yellow" />

            <div ref={ref} className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}>
                <SectionHeader 
                    badge="المهارات"
                    title="ما الذي"
                    highlight="أتقنه؟"
                    description="مهارات متخصصة صقلتها سنوات من الخبرة والتعلم المستمر"
                    isInView={isInView}
                />

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <m.div
                            key={skill.name}
                            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (index % 2 === 0 ? -50 : 50) }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.6,
                                delay: prefersReducedMotion ? 0 : index * 0.1,
                                type: prefersReducedMotion ? undefined : "spring",
                                stiffness: 100
                            }}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
                        >
                            {/* Skill Name and Percentage */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    {skill.name}
                                </h3>
                                <m.span
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}
                                >
                                    <AnimatedCounter target={skill.level} isInView={isInView} />
                                </m.span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <m.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                    transition={{
                                        duration: 1.5,
                                        delay: 0.3 + index * 0.1,
                                        ease: "easeOut"
                                    }}
                                    className={`h-full bg-gradient-to-r ${skill.color} relative`}
                                >
                                    {/* Shimmer Effect */}
                                    <m.div
                                        animate={{
                                            x: ["-100%", "200%"]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: 1 + index * 0.2
                                        }}
                                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                                    />
                                </m.div>
                            </div>
                        </m.div>
                    ))}
                </div>

                {/* Additional Info */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        أستخدم مزيجاً من الإبداع والاستراتيجية لصياغة محتوى يحقق أهدافك التسويقية
                        ويلامس مشاعر جمهورك. كل مشروع هو فرصة جديدة للابتكار والتميز.
                    </p>
                </m.div>
            </div>
        </section>
    );
}

