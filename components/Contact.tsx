"use client";

import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { CONTACT_CONTENT } from "@/lib/content";
import { PRIMARY_CTA_CLASSES, FOCUS_RING, FOCUS_RING_INPUT, getSectionSpacing, getSectionPadding, getSectionContainer, getSectionSeparator } from "@/lib/design-utils";

interface ContactProps {
    content?: typeof CONTACT_CONTENT;
}

export default function Contact({ content: CONTENT = CONTACT_CONTENT }: ContactProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        type: "",
        mainProblem: [] as string[],
        challengeLocation: [] as string[],
        link: "",
        timeline: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        type: "",
        mainProblem: "",
        challengeLocation: "",
        link: "",
        timeline: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const validateForm = () => {
        const newErrors = {
            name: "",
            email: "",
            subject: "",
            type: "",
            mainProblem: "",
            challengeLocation: "",
            link: "",
            timeline: ""
        };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = CONTENT.form.name.error;
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = CONTENT.form.email.error;
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = CONTENT.form.email.errorInvalid;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setIsError(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("failed");

            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", subject: "", type: "", mainProblem: [], challengeLocation: [], link: "", timeline: "" });
            setErrors({ name: "", email: "", subject: "", type: "", mainProblem: "", challengeLocation: "", link: "", timeline: "" });
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            const fieldName = name as "mainProblem" | "challengeLocation";
            if (checked) {
                setFormData({
                    ...formData,
                    [fieldName]: [...formData[fieldName], value]
                });
            } else {
                setFormData({
                    ...formData,
                    [fieldName]: formData[fieldName].filter((item) => item !== value)
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    return (
        <section id="contact" className={`${getSectionSpacing()} bg-white dark:bg-gray-900 relative overflow-hidden ${getSectionSeparator()}`}>
            <AnimatedBackground variant="accent-only" />

            <div ref={ref} className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}>
                <SectionHeader 
                    badge={CONTENT.badge}
                    title={CONTENT.title}
                    highlight={CONTENT.highlight}
                    description={CONTENT.description}
                    isInView={isInView}
                />

                <div className="max-w-3xl mx-auto">
                    {/* Booking Form */}
                    <m.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl" aria-label="نموذج حجز الاستشارة">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                                        {CONTENT.form.name.label}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border outline-none transition-all text-gray-800 dark:text-white min-w-0 text-base ${
                                            errors.name 
                                                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                                                : `border-gray-300 dark:border-gray-700 ${FOCUS_RING_INPUT}`
                                        }`}
                                        placeholder={CONTENT.form.name.placeholder}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                                        {CONTENT.form.email.label}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border outline-none transition-all text-gray-800 dark:text-white min-w-0 text-base ${
                                            errors.email 
                                                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                                                : `border-gray-300 dark:border-gray-700 ${FOCUS_RING_INPUT}`
                                        }`}
                                        placeholder={CONTENT.form.email.placeholder}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="mb-5">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    الهاتف / الواتساب
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border outline-none transition-all text-gray-800 dark:text-white min-w-0 text-base border-gray-300 dark:border-gray-700 ${FOCUS_RING_INPUT}`}
                                    placeholder="+966 50 123 4567"
                                />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    ملاحظة قصيرة (اختياري)
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-gray-900 border outline-none transition-all text-gray-800 dark:text-white min-w-0 text-base border-gray-300 dark:border-gray-700 ${FOCUS_RING_INPUT}`}
                                    placeholder="ملاحظة إضافية إن وجدت..."
                                />
                            </div>

                            {/* Problem Filtering Fields */}
                            <div className="mb-5 p-5 bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                                <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2 break-words">
                                    {CONTENT.form.additionalInfo.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 break-words leading-relaxed">
                                    {CONTENT.form.additionalInfo.description}
                                </p>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="type" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                            {CONTENT.form.additionalInfo.type.label}
                                            <span className="text-xs text-gray-400 dark:text-gray-500 font-normal mr-1">(اختياري)</span>
                                        </label>
                                        <select
                                            id="type"
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 outline-none transition-all text-gray-700 dark:text-gray-300 text-base ${FOCUS_RING_INPUT} min-w-0`}
                                        >
                                            {CONTENT.form.additionalInfo.type.options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                            {CONTENT.form.additionalInfo.mainProblem.label}
                                            <span className="text-xs text-gray-400 dark:text-gray-500 font-normal mr-1">(اختياري)</span>
                                        </label>
                                        <div className="space-y-2">
                                            {CONTENT.form.additionalInfo.mainProblem.options.map((option) => (
                                                <label key={option.value} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="mainProblem"
                                                        value={option.value}
                                                        checked={formData.mainProblem.includes(option.value)}
                                                        onChange={handleChange}
                                                        className="mt-1 w-4 h-4 text-[#f44674] border-gray-300 rounded focus:ring-[#f44674]"
                                                    />
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                            {CONTENT.form.additionalInfo.challengeLocation.label}
                                            <span className="text-xs text-gray-400 dark:text-gray-500 font-normal mr-1">(اختياري)</span>
                                        </label>
                                        <div className="space-y-2">
                                            {CONTENT.form.additionalInfo.challengeLocation.options.map((option) => (
                                                <label key={option.value} className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="challengeLocation"
                                                        value={option.value}
                                                        checked={formData.challengeLocation.includes(option.value)}
                                                        onChange={handleChange}
                                                        className="mt-1 w-4 h-4 text-[#f44674] border-gray-300 rounded focus:ring-[#f44674]"
                                                    />
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="link" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                            {CONTENT.form.additionalInfo.link.label}
                                            <span className="text-xs text-gray-400 dark:text-gray-500 font-normal mr-1">(اختياري)</span>
                                        </label>
                                        <input
                                            type="url"
                                            id="link"
                                            name="link"
                                            value={formData.link}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 outline-none transition-all text-gray-700 dark:text-gray-300 text-base ${FOCUS_RING_INPUT} min-w-0 placeholder:text-gray-400 dark:placeholder:text-gray-500`}
                                            placeholder={CONTENT.form.additionalInfo.link.placeholder}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                            {CONTENT.form.additionalInfo.timeline.label}
                                            <span className="text-xs text-gray-400 dark:text-gray-500 font-normal mr-1">(اختياري)</span>
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 outline-none transition-all text-gray-700 dark:text-gray-300 text-base ${FOCUS_RING_INPUT} min-w-0`}
                                        >
                                            {CONTENT.form.additionalInfo.timeline.options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <m.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={isLoading ? {} : { scale: 1.01, boxShadow: "0 20px 40px rgba(244, 70, 116, 0.3)" }}
                                whileTap={isLoading ? {} : { scale: 0.99 }}
                                className={`w-full ${PRIMARY_CTA_CLASSES} py-4 px-8 rounded-xl flex items-center justify-center gap-2 min-w-0 text-base font-semibold ${FOCUS_RING} disabled:opacity-70 disabled:cursor-not-allowed`}
                                aria-busy={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin flex-shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                        </svg>
                                        <span className="whitespace-nowrap">جاري الإرسال...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="whitespace-nowrap">{CONTENT.form.submit}</span>
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </>
                                )}
                            </m.button>

                            {/* Signature Phrase */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-400 font-arabic break-words">
                                    {CONTENT.form.signature}
                                </p>
                            </div>

                            {/* Success Message */}
                            {isSubmitted && (
                                <m.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                                    role="alert"
                                >
                                    <p className="text-green-700 dark:text-green-400 text-center font-semibold break-words">
                                        {CONTENT.form.success}
                                    </p>
                                </m.div>
                            )}

                            {/* Error Message */}
                            {isError && (
                                <m.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                                    role="alert"
                                >
                                    <p className="text-red-700 dark:text-red-400 text-center font-semibold break-words">
                                        حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.
                                    </p>
                                </m.div>
                            )}
                        </form>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
