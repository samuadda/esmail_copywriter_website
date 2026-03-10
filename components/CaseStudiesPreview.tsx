"use client";

import { m, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies-data";
import CaseStudyCard from "./case-studies/CaseStudyCard";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { PRIMARY_CTA_CLASSES, FOCUS_RING, getSectionSpacing, getSectionPadding, getSectionContainer, getSectionSeparator } from "@/lib/design-utils";

export default function CaseStudiesPreview() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const prefersReducedMotion = useReducedMotion();
    
    // Get latest 3 case studies
    const featuredCaseStudies = getAllCaseStudies().slice(0, 3);

    if (featuredCaseStudies.length === 0) return null;
    
    return (
        <section className={`${getSectionSpacing()} bg-white dark:bg-gray-900 relative overflow-hidden ${getSectionSeparator()}`}>
            <AnimatedBackground variant="geometric" />

            <div ref={ref} className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}>
                <SectionHeader 
                    badge="دراسات الحالة"
                    title="نتائج"
                    highlight="مثبتة"
                    description="كيف ساعدت العلامات التجارية على تحقيق أهدافها من خلال الكتابة الاستراتيجية. دراسات حالة حقيقية عن الاستراتيجيات والنتائج."
                    isInView={isInView}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredCaseStudies.map((caseStudy, index) => (
                        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/case-studies"
                        className={`inline-flex items-center gap-2 px-8 py-4 ${PRIMARY_CTA_CLASSES} hover:scale-105 ${FOCUS_RING}`}
                    >
                        <TrendingUp className="w-5 h-5" />
                        شاهد كل دراسات الحالة <ArrowLeft className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

