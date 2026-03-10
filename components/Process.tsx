"use client";

import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { getSectionSpacing, getSectionContainer, getSectionPadding, getSectionSeparator } from "@/lib/design-utils";

const steps = [
    {
        id: 1,
        number: "01",
        title: "الاستماع والفهم",
        description: "نبدأ بفهم عميق لعلامتك التجارية، أهدافك، وجمهورك المستهدف لنضع أساساً قوياً للمحتوى.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        color: "from-[#f44674] to-[#fd2862]"
    },
    {
        id: 2,
        number: "02",
        title: "البحث والتخطيط",
        description: "نقوم بدراسة شاملة للسوق والمنافسين، ونضع استراتيجية محتوى متكاملة تحقق أهدافك.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        color: "from-[#4ADE80] to-[#22c55e]"
    },
    {
        id: 3,
        number: "03",
        title: "الكتابة الإبداعية",
        description: "نبدع في صياغة محتوى فريد يعكس هويتك، يجذب جمهورك، ويحقق أهدافك التسويقية.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        color: "from-purple-500 to-blue-500"
    },
    {
        id: 4,
        number: "04",
        title: "المراجعة والتحسين",
        description: "نراجع المحتوى بدقة ونجري التعديلات اللازمة لضمان جودة استثنائية ونتائج مثالية.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "from-orange-500 to-yellow-500"
    },
];

export default function Process() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="process" className={`${getSectionSpacing()} bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden ${getSectionSeparator()}`}>
            <AnimatedBackground variant="subtle" />

            <div ref={ref} className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}>
                <SectionHeader 
                    badge="كيف أعمل"
                    title="رحلة"
                    highlight="الإبداع"
                    description="عملية منظمة تضمن جودة استثنائية في كل مشروع"
                    isInView={isInView}
                />

                {/* Process Steps - Desktop (Horizontal Flow) */}
                <div className="hidden lg:block relative">
                    {/* Connection Line */}
                    <m.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#f44674] via-[#4ADE80] via-purple-500 to-orange-500 origin-left rounded-full"
                        style={{ zIndex: 0 }}
                    />

                    <div className="grid grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
                        {steps.map((step, index) => (
                            <m.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.3 + index * 0.2,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="relative"
                            >
                                {/* Icon Circle */}
                                <m.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg relative z-10`}
                                >
                                    {step.icon}
                                </m.div>

                                {/* Number Badge */}
                                <m.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                                    className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-2 w-10 h-10 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-300 shadow-md z-20"
                                >
                                    {step.number}
                                </m.div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 break-words">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                                        {step.description}
                                    </p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>

                {/* Process Steps - Mobile (Vertical) */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <m.div
                            key={step.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + index * 0.15,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ scale: 1.01 }}
                            className="glass-card rounded-3xl p-6 flex items-start gap-6"
                        >
                            {/* Icon and Number */}
                            <div className="relative flex-shrink-0">
                                <m.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                                >
                                    {step.icon}
                                </m.div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                                    {step.number}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 break-words">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                                    {step.description}
                                </p>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

