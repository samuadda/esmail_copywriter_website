"use client";

import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import { ABOUT_CONTENT } from "@/lib/content";
import { getSectionSpacing, getSectionPadding, getSectionContainer, getBodyClasses, getSectionSeparator } from "@/lib/design-utils";

interface AboutProps {
    content?: typeof ABOUT_CONTENT;
}

export default function About({ content: CONTENT = ABOUT_CONTENT }: AboutProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="about" className={`${getSectionSpacing()} bg-white dark:bg-gray-900 relative overflow-hidden ${getSectionSeparator()}`}>

            <div ref={ref} className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}>
                <SectionHeader 
                    badge={CONTENT.badge}
                    title={CONTENT.title}
                    highlight={CONTENT.highlight}
                    isInView={isInView}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <m.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6 min-w-0"
                    >
                        {CONTENT.paragraphs.map((paragraph, index) => (
                            <p key={index} className={`${getBodyClasses("large")} text-gray-600 dark:text-gray-300 leading-relaxed break-words`}>
                                {paragraph.split("إسماعيل").map((part, i, arr) => {
                                    if (i === arr.length - 1) return part;
                                    return (
                                        <span key={i}>
                                            {part}
                                            <span className="font-bold text-[#f44674]">إسماعيل</span>
                                        </span>
                                    );
                                })}
                            </p>
                        ))}

                        {/* Quality Badge */}
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4ADE80]/10 to-[#22c55e]/10 border border-[#4ADE80]/30 rounded-2xl p-4 mt-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#22c55e] flex items-center justify-center shadow-lg flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-gray-800 dark:text-white break-words">{CONTENT.qualityBadge.title}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 break-words">{CONTENT.qualityBadge.description}</p>
                            </div>
                        </m.div>
                    </m.div>

                    {/* Stats Grid */}
                    <m.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {CONTENT.stats.map((stat, index) => {
                            const gradientColors = [
                                "from-[#f44674] to-[#fd2862]",
                                "from-[#4ADE80] to-[#22c55e]",
                                "from-purple-500 to-blue-500",
                                "from-orange-500 to-yellow-500",
                            ];
                            const borderColors = [
                                "border-[#f44674]/20",
                                "border-[#4ADE80]/20",
                                "border-purple-500/20",
                                "border-orange-500/20",
                            ];
                            const bgColors = [
                                "from-[#f44674]/10 to-[#fd2862]/10",
                                "from-[#4ADE80]/10 to-[#22c55e]/10",
                                "from-purple-500/10 to-blue-500/10",
                                "from-orange-500/10 to-yellow-500/10",
                            ];
                            
                            return (
                                <m.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className={`bg-gradient-to-br ${bgColors[index]} border ${borderColors[index]} rounded-3xl p-8 text-center min-w-0`}
                                >
                                    <m.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.5 + index * 0.1 }}
                                        className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradientColors[index]} mb-2 break-words`}
                                    >
                                        {stat.value}
                                    </m.div>
                                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 break-words">{stat.label}</p>
                                </m.div>
                            );
                        })}
                    </m.div>
                </div>
            </div>
        </section>
    );
}
