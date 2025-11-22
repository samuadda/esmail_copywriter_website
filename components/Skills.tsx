"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="skills" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/10 to-[#fd2862]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4ADE80]/10 to-[#22c55e]/10 rounded-full blur-3xl"></div>
            </div>

            <div ref={ref} className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-[#f44674] bg-[#f44674]/10 rounded-full border border-[#f44674]/20"
                    >
                        المهارات
                    </motion.span>
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl">
                        ما الذي{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
                            أتقنه؟
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        مهارات متخصصة صقلتها سنوات من الخبرة والتعلم المستمر
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
                        >
                            {/* Skill Name and Percentage */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    {skill.name}
                                </h3>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}
                                >
                                    <AnimatedCounter target={skill.level} isInView={isInView} />
                                </motion.span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
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
                                    <motion.div
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
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        أستخدم مزيجاً من الإبداع والاستراتيجية لصياغة محتوى يحقق أهدافك التسويقية
                        ويلامس مشاعر جمهورك. كل مشروع هو فرصة جديدة للابتكار والتميز.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

