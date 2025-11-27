"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="about" className="py-20 sm:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
            <AnimatedBackground />

            <div ref={ref} className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <SectionHeader 
                    badge="من أنا"
                    title="قصتي مع"
                    highlight="الكلمات"
                    isInView={isInView}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            للمرء نصيب من اسمه، فمنا من يحمل اسمه كهوية، ومنا من يستلهم منه طريقه.
                            أما أنا، فقد أخذت من اسمي{" "}
                            <span className="font-bold text-[#f44674]">إسماعيل</span> الإسماع،
                            ومن{" "}
                            <span className="font-bold text-[#f44674]">إبراهيم</span> الإبرام.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            أؤمن بأن الكلمات ليست مجرد حروف مرصوصة، بل هي جسور تربط بين الأفكار
                            والمشاعر، وأدوات تحول الرؤى إلى واقع. كاتب محتوى إبداعي، أساعد قادة
                            الفكر وأصحاب الرؤى على التواصل مع جمهورهم بطريقة تلامس القلوب وتحقق
                            الأثر.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            من خلال خبرتي في صناعة المحتوى، تعلمت أن كل مشروع هو قصة فريدة تحتاج
                            إلى صوت خاص. سواء كنت تبحث عن محتوى يبني الثقة، أو قصة تلهم، أو رسالة
                            تترك أثراً - أنا هنا لأحول أفكارك إلى كلمات تصنع الفرق.
                        </p>

                        {/* Quality Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4ADE80]/10 to-[#22c55e]/10 border border-[#4ADE80]/30 rounded-2xl p-4 mt-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#22c55e] flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-800 dark:text-white">جودة مضمونة</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">التزام كامل بالتميز والاحترافية</p>
                            </div>
                        </motion.div>

                        {/* Signature Phrase */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 1 }}
                            className="mt-8 text-center lg:text-right"
                        >
                            <p className="font-arabic text-xl text-[#f44674]/80 font-medium tracking-wider leading-relaxed">
                                "فاسعوا يكن آخر سعيكم زمزما"
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {/* Stat 1 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gradient-to-br from-[#f44674]/10 to-[#fd2862]/10 border border-[#f44674]/20 rounded-3xl p-8 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862] mb-2"
                            >
                                +5
                            </motion.div>
                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">سنوات خبرة</p>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gradient-to-br from-[#4ADE80]/10 to-[#22c55e]/10 border border-[#4ADE80]/20 rounded-3xl p-8 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-[#22c55e] mb-2"
                            >
                                +100
                            </motion.div>
                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">مشروع مكتمل</p>
                        </motion.div>

                        {/* Stat 3 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-8 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
                                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-2"
                            >
                                +50
                            </motion.div>
                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">عميل راضٍ</p>
                        </motion.div>

                        {/* Stat 4 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-3xl p-8 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-2"
                            >
                                100%
                            </motion.div>
                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">نسبة الجودة</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

