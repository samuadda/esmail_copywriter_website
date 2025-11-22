"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        id: 1,
        title: "كتابة المحتوى الإبداعي",
        description: "محتوى متميز يعكس هوية علامتك التجارية ويجذب جمهورك المستهدف بأسلوب مبتكر ومؤثر.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        color: "from-[#f44674] to-[#fd2862]"
    },
    {
        id: 2,
        title: "الكتابة الإعلانية",
        description: "نصوص إعلانية قوية تحول القراء إلى عملاء، مع رسائل واضحة ومباشرة تحقق أهدافك التسويقية.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
        ),
        color: "from-[#4ADE80] to-[#22c55e]"
    },
    {
        id: 3,
        title: "كتابة المقالات",
        description: "مقالات احترافية ومتخصصة تثري المحتوى الرقمي وتعزز من مصداقية علامتك التجارية.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        color: "from-purple-500 to-blue-500"
    },
    {
        id: 4,
        title: "السيناريو والسكريبت",
        description: "كتابة سيناريوهات وسكريبتات مبتكرة للفيديوهات والمحتوى المرئي بأسلوب سلس ومشوق.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        color: "from-orange-500 to-yellow-500"
    },
    {
        id: 5,
        title: "السوشيال ميديا",
        description: "محتوى سوشيال ميديا جذاب ومناسب لكل منصة، يزيد من التفاعل ويبني مجتمعاً حول علامتك.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        ),
        color: "from-pink-500 to-rose-500"
    },
    {
        id: 6,
        title: "القصص والروايات",
        description: "سرد قصصي مميز يأسر القراء ويترك انطباعاً دائماً، سواء كان للعلامات التجارية أو المحتوى الأدبي.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        color: "from-teal-500 to-cyan-500"
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="services" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
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
                        الخدمات
                    </motion.span>
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl">
                        ما الذي{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
                            أقدمه؟
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        حلول كتابية متكاملة تلبي احتياجاتك وتحقق أهدافك
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50, rotateX: -15 }}
                            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: index * 0.1
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                z: 50,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 relative group"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                            >
                                {service.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover Effect Gradient */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(244, 70, 116, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-[#fd2862] hover:to-[#ca1d4b] text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-all duration-300"
                    >
                        <span>ابدأ مشروعك الآن</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

