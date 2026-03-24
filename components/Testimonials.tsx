"use client";

import { m, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { getSectionSpacing, getSectionPadding, getSectionContainer } from "@/lib/design-utils";
import type { Testimonial } from "@/lib/testimonials-data";

interface TestimonialsProps {
    testimonials?: Testimonial[];
    header?: {
        badge: string;
        title: string;
        highlight: string;
        description: string;
    };
}

function StarRating({ rating, delay }: { rating: number; delay: number }) {
    const prefersReducedMotion = useReducedMotion();
    return (
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
                <m.svg
                    key={index}
                    initial={{ opacity: 0, scale: 0, rotate: prefersReducedMotion ? 0 : -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                        type: prefersReducedMotion ? undefined : "spring",
                        stiffness: 200,
                        delay: prefersReducedMotion ? 0 : delay + index * 0.1
                    }}
                    className={`w-5 h-5 ${
                        index < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </m.svg>
            ))}
        </div>
    );
}

export default function Testimonials({ testimonials = [], header }: TestimonialsProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="testimonials" className={`${getSectionSpacing()} bg-gray-50 dark:bg-gray-800 relative overflow-hidden`}>
            <AnimatedBackground variant="minimal" />

            <div ref={ref} className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}>
                <SectionHeader
                    badge={header?.badge ?? "آراء العملاء"}
                    title={header?.title ?? "ماذا يقول"}
                    highlight={header?.highlight ?? "عملائي؟"}
                    description={header?.description ?? "شهادات حقيقية من عملاء حققوا نجاحات استثنائية"}
                    isInView={isInView}
                />

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <m.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50, rotateX: -20 }}
                            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
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
                            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 relative"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 left-6 text-6xl text-[#f44674]/10 font-serif">
                                &ldquo;
                            </div>

                            {/* Star Rating */}
                            <StarRating rating={testimonial.rating} delay={0.3 + index * 0.1} />

                            {/* Content */}
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 relative z-10">
                                {testimonial.content}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center text-2xl shadow-lg">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 dark:text-white">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.role} - {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

