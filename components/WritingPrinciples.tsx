"use client";

import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Zap, Award, Star, Shield } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { getSectionSeparator } from "@/lib/design-utils";
import type { WritingPrinciplesContent } from "@/lib/page-content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    target: Target,
    heart: Heart,
    zap: Zap,
    award: Award,
    star: Star,
    shield: Shield,
};

interface WritingPrinciplesProps {
    content?: WritingPrinciplesContent;
}

export default function WritingPrinciples({ content }: WritingPrinciplesProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const principles = content?.principles || [
        { iconName: "target", title: "الوضوح قبل الجمال", description: "الكلمات الجميلة لا قيمة لها إذا لم تكن واضحة. أبدأ بالوضوح، ثم أضف الجمال." },
        { iconName: "heart", title: "الفهم قبل الكتابة", description: "لا يمكنك كتابة رسالة مؤثرة دون فهم عميق لجمهورك، مخاوفهم، أحلامهم، وما يحفزهم." },
        { iconName: "zap", title: "النتيجة قبل الإبداع", description: "الإبداع أداة، وليس هدفاً. كل كلمة يجب أن تخدم هدفاً واضحاً: التحويل، البناء، أو التأثير." },
        { iconName: "award", title: "المصداقية قبل المبيعات", description: "المصداقية تُبنى على المدى الطويل. لا أبيع منتجاً، أبني علاقة ثقة تدوم." },
    ];

    return (
        <section className={`py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden ${getSectionSeparator()}`}>
            <AnimatedBackground variant="minimal" />

            <div ref={ref} className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    badge={content?.badge || "مبادئي"}
                    title={content?.title || "فلسفة"}
                    highlight={content?.highlight || "الكتابة"}
                    description={content?.description || "المبادئ التي أؤمن بها وأطبقها في كل مشروع. ليست قواعد جامدة، بل إرشادات تساعدني على كتابة محتوى يحول."}
                    isInView={isInView}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {principles.map((principle, index) => {
                        const Icon = ICON_MAP[principle.iconName] || Target;
                        return (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f44674]/10 to-[#fd2862]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="w-7 h-7 text-[#f44674]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {principle.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {principle.description}
                                </p>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
