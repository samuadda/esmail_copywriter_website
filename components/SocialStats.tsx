"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";

const socialStats = [
    {
        platform: "YouTube",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
        ),
        followers: "5K+",
        metric: "مشترك",
        color: "from-red-500 to-red-600",
        engagement: "22% معدل التفاعل"
    },
    {
        platform: "Twitter/X",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        ),
        followers: "8K+",
        metric: "متابع",
        color: "from-gray-800 to-gray-900",
        engagement: "18% معدل التفاعل"
    },
    {
        platform: "Instagram",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ),
        followers: "25K+",
        metric: "متابع",
        color: "from-pink-500 to-purple-500",
        engagement: "15% معدل التفاعل"
    },
    {
        platform: "LinkedIn",
        icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
        followers: "15K+",
        metric: "متابع",
        color: "from-blue-500 to-blue-600",
        engagement: "12% معدل التفاعل"
    },
];

const overallStats = [
    {
        number: 500,
        suffix: "K+",
        label: "إجمالي المشاهدات",
        color: "from-[#f44674] to-[#fd2862]",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        )
    },
    {
        number: 50,
        suffix: "K+",
        label: "إجمالي المتابعين",
        color: "from-[#4ADE80] to-[#22c55e]",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        number: 10,
        suffix: "K+",
        label: "إجمالي التفاعلات",
        color: "from-purple-500 to-blue-500",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        number: 100,
        suffix: "+",
        label: "محتوى منشور",
        color: "from-orange-500 to-yellow-500",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        )
    },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
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

    return <span>{count}{suffix}</span>;
}

export default function SocialStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            <AnimatedBackground />
            
            <div ref={ref} className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <SectionHeader 
                    badge="وجودي الرقمي"
                    title="أرقام"
                    highlight="تتحدث"
                    description="إحصائيات حقيقية من منصات التواصل الاجتماعي"
                    isInView={isInView}
                />

                {/* Overall Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {overallStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 text-center relative overflow-hidden group"
                        >
                            {/* Glow Effect */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />
                            
                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="mb-3"
                                >
                                    {stat.icon}
                                </motion.div>

                                {/* Number */}
                                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                    <AnimatedCounter target={stat.number} suffix={stat.suffix} isInView={isInView} />
                                </div>

                                {/* Label */}
                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Media Platforms */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
                        وجودي على{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
                            منصات التواصل
                        </span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {socialStats.map((platform, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className={`bg-gradient-to-br ${platform.color} rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden group cursor-pointer`}
                            >
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div 
                                        className="mb-4"
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {platform.icon}
                                    </motion.div>

                                    {/* Platform Name */}
                                    <p className="text-sm opacity-90 mb-2">{platform.platform}</p>

                                    {/* Followers */}
                                    <div className="text-3xl font-bold mb-1">{platform.followers}</div>
                                    <div className="text-sm opacity-90 mb-3">{platform.metric}</div>

                                    {/* Engagement */}
                                    <div className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
                                        {platform.engagement}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                        هل تريد بناء تأثير مماثل؟ دعنا نبني علامتك معاً!
                    </p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(244, 70, 116, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-[#fd2862] hover:to-[#ca1d4b] text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300"
                    >
                        <span>ابدأ رحلة التأثير</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

