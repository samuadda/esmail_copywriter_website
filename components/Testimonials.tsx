"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";

const testimonials = [
    {
        id: 1,
        name: "أحمد المالكي",
        role: "مدير تسويق",
        company: "شركة النجاح التقني",
        content: "إسماعيل ليس مجرد كاتب محتوى، بل شريك استراتيجي فهم رؤيتنا وحولها إلى كلمات أثرت في جمهورنا وحققت نتائج مذهلة. احترافية عالية والتزام بالمواعيد.",
        rating: 5,
        avatar: "👨‍💼"
    },
    {
        id: 2,
        name: "سارة العتيبي",
        role: "مؤسسة",
        company: "براند للأزياء",
        content: "تعاملت مع عدة كتّاب من قبل، لكن إسماعيل متميز بأسلوبه الإبداعي وقدرته على فهم هوية العلامة التجارية. المحتوى الذي كتبه لنا زاد مبيعاتنا بنسبة 200%.",
        rating: 5,
        avatar: "👩‍💼"
    },
    {
        id: 3,
        name: "خالد السعيد",
        role: "مدير عام",
        company: "مؤسسة الإبداع",
        content: "جودة استثنائية في الكتابة، فهم عميق للسوق، وسرعة في التنفيذ. إسماعيل محترف حقيقي وأنصح به بشدة لأي شركة تبحث عن محتوى يحدث فرقاً.",
        rating: 5,
        avatar: "🧑‍💼"
    },
    {
        id: 4,
        name: "نورة الدوسري",
        role: "مديرة محتوى",
        company: "وكالة سمارت ميديا",
        content: "إسماعيل يمتلك موهبة فريدة في تحويل الأفكار المعقدة إلى محتوى بسيط ومؤثر. عملنا معه في عدة مشاريع وكانت النتائج دائماً تفوق التوقعات.",
        rating: 5,
        avatar: "👩"
    },
    {
        id: 5,
        name: "فهد الشمري",
        role: "رائد أعمال",
        company: "ستارت اب تك",
        content: "ساعدني إسماعيل في كتابة محتوى موقعنا الإلكتروني وحملاتنا الإعلانية. النتائج كانت رائعة - زيادة في التفاعل بنسبة 350% وتحسين كبير في معدلات التحويل.",
        rating: 5,
        avatar: "🧔"
    },
    {
        id: 6,
        name: "ريم القحطاني",
        role: "مالكة",
        company: "كافيه الورد",
        content: "إبداع لا محدود! إسماعيل كتب لنا محتوى السوشيال ميديا والقوائم، وكانت النتيجة مذهلة. أسلوبه يجذب الزبائن ويعكس هوية المكان بشكل رائع.",
        rating: 5,
        avatar: "👱‍♀️"
    },
];

function StarRating({ rating, delay }: { rating: number; delay: number }) {
    return (
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
                <motion.svg
                    key={index}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: delay + index * 0.1
                    }}
                    className={`w-5 h-5 ${
                        index < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="testimonials" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
            <AnimatedBackground />

            <div ref={ref} className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <SectionHeader 
                    badge="آراء العملاء"
                    title="ماذا يقول"
                    highlight="عملائي؟"
                    description="شهادات حقيقية من عملاء حققوا نجاحات استثنائية"
                    isInView={isInView}
                />

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
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
                                "
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

