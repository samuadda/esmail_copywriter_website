"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const categories = ["الكل", "محتوى إبداعي", "إعلانات", "سوشيال ميديا", "سيناريوهات"];

const projects = [
    {
        id: 1,
        title: "حملة إعلانية لمنتج تقني",
        category: "إعلانات",
        description: "نصوص إعلانية مبتكرة حققت زيادة 300% في التفاعل",
        image: "/gradient-01.png",
        stats: { views: "50k+", engagement: "300%" }
    },
    {
        id: 2,
        title: "محتوى سوشيال ميديا لعلامة تجارية",
        category: "سوشيال ميديا",
        description: "استراتيجية محتوى متكاملة أدت لزيادة المتابعين بنسبة 250%",
        image: "/gradient-02.png",
        stats: { followers: "250%", posts: "100+" }
    },
    {
        id: 3,
        title: "سيناريو فيديو تسويقي",
        category: "سيناريوهات",
        description: "سكريبت فيديو حقق أكثر من مليون مشاهدة في أسبوع",
        image: "/gradient-04.png",
        stats: { views: "1M+", duration: "2 دقيقة" }
    },
    {
        id: 4,
        title: "مقالات تقنية متخصصة",
        category: "محتوى إبداعي",
        description: "سلسلة مقالات تقنية عززت من مصداقية العلامة التجارية",
        image: "/gradient-05.png",
        stats: { articles: "20+", reads: "100k+" }
    },
    {
        id: 5,
        title: "حملة إعلانات رمضان",
        category: "إعلانات",
        description: "حملة موسمية نالت إعجاب الجمهور وحققت أهداف المبيعات",
        image: "/gradient-06.png",
        stats: { sales: "400%", reach: "500k+" }
    },
    {
        id: 6,
        title: "محتوى قصصي لبراند",
        category: "محتوى إبداعي",
        description: "قصة علامة تجارية ألهمت الآلاف وبنت ارتباطاً عاطفياً قوياً",
        image: "/gradient-07.png",
        stats: { shares: "10k+", comments: "5k+" }
    },
];

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeCategory, setActiveCategory] = useState("الكل");

    const filteredProjects = activeCategory === "الكل" 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="portfolio" className="py-20 sm:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/10 to-[#fd2862]/10 rounded-full blur-3xl"></div>
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
                        الأعمال
                    </motion.span>
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl">
                        مشاريع{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
                            ملهمة
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        نماذج من أعمالي التي صنعت فرقاً وحققت نتائج استثنائية
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white shadow-lg"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    delay: index * 0.1
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 group"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    
                                    {/* Category Badge */}
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        className="absolute top-4 right-4 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#f44674]"
                                    >
                                        {project.category}
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-[#f44674] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        {Object.entries(project.stats).map(([key, value]) => (
                                            <div key={key} className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22c55e]"></div>
                                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                    {value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

