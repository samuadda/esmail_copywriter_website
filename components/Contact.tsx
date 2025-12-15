"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { CONTACT_CONTENT } from "@/lib/content";
import { PRIMARY_CTA_CLASSES, FOCUS_RING, FOCUS_RING_INPUT, getSectionSpacing, getSectionPadding, getSectionContainer } from "@/lib/design-utils";

// Contact method icons as components
const ContactIcon = ({ id }: { id: number }) => {
	const icons: Record<number, JSX.Element> = {
		1: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
		2: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
			</svg>
		),
		3: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
			</svg>
		),
	};
	const colors: Record<number, string> = {
		1: "from-[#f44674] to-[#fd2862]",
		2: "from-[#4ADE80] to-[#22c55e]",
		3: "from-green-500 to-green-600",
	};
	return { icon: icons[id] || null, color: colors[id] || "" };
};

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        goal: "",
        timeline: "",
        budget: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        goal: "",
        timeline: "",
        budget: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {
            name: "",
            email: "",
            subject: "",
            message: "",
            goal: "",
            timeline: "",
            budget: ""
        };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = CONTACT_CONTENT.form.name.error;
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = CONTACT_CONTENT.form.email.error;
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = CONTACT_CONTENT.form.email.errorInvalid;
            isValid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = CONTACT_CONTENT.form.subject.error;
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = CONTACT_CONTENT.form.message.error;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "", goal: "", timeline: "", budget: "" });
            setErrors({ name: "", email: "", subject: "", message: "", goal: "", timeline: "", budget: "" });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    return (
        <section id="contact" className={`${getSectionSpacing()} bg-white dark:bg-gray-900 relative overflow-hidden`}>
            <AnimatedBackground />

            <div ref={ref} className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}>
                <SectionHeader 
                    badge={CONTACT_CONTENT.badge}
                    title={CONTACT_CONTENT.title}
                    highlight={CONTACT_CONTENT.highlight}
                    description={CONTACT_CONTENT.description}
                    isInView={isInView}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {CONTACT_CONTENT.methods.map((method, index) => {
                            const { icon, color } = ContactIcon({ id: method.id });
                            return (
                                <motion.a
                                    key={method.id}
                                    href={method.link}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    className="block bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-[#f44674] dark:hover:border-[#f44674] transition-all group min-w-0"
                                >
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 shadow-lg flex-shrink-0`}
                                    >
                                        {icon}
                                    </motion.div>
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-[#f44674] transition-colors break-words">
                                        {method.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 break-words">
                                        {method.value}
                                    </p>
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl" aria-label="نموذج التواصل">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {CONTACT_CONTENT.form.name.label}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border outline-none transition-all text-gray-800 dark:text-white min-w-0 ${
                                            errors.name 
                                                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                                                : `border-gray-300 dark:border-gray-700 ${FOCUS_RING_INPUT}`
                                        }`}
                                        placeholder={CONTACT_CONTENT.form.name.placeholder}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {CONTACT_CONTENT.form.email.label}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border outline-none transition-all text-gray-800 dark:text-white min-w-0 ${
                                            errors.email 
                                                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                                                : `border-gray-300 dark:border-gray-700 ${FOCUS_RING_INPUT}`
                                        }`}
                                        placeholder={CONTACT_CONTENT.form.email.placeholder}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    {CONTACT_CONTENT.form.subject.label}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border outline-none transition-all text-gray-800 dark:text-white min-w-0 ${
                                        errors.subject 
                                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                                            : `border-gray-300 dark:border-gray-700 ${FOCUS_RING_INPUT}`
                                    }`}
                                    placeholder={CONTACT_CONTENT.form.subject.placeholder}
                                    aria-invalid={!!errors.subject}
                                    aria-describedby={errors.subject ? "subject-error" : undefined}
                                />
                                {errors.subject && (
                                    <p id="subject-error" className="mt-1 text-sm text-red-500" role="alert">{errors.subject}</p>
                                )}
                            </div>

                            {/* Smart Fields: Goal, Timeline, Budget */}
                            <div className="mb-6 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 break-words">
                                    {CONTACT_CONTENT.form.additionalInfo.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 break-words">
                                    {CONTACT_CONTENT.form.additionalInfo.description}
                                </p>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="goal" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            {CONTACT_CONTENT.form.additionalInfo.goal.label}
                                        </label>
                                        <input
                                            type="text"
                                            id="goal"
                                            name="goal"
                                            value={formData.goal}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none transition-all text-gray-800 dark:text-white ${FOCUS_RING_INPUT} min-w-0`}
                                            placeholder={CONTACT_CONTENT.form.additionalInfo.goal.placeholder}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            {CONTACT_CONTENT.form.additionalInfo.timeline.label}
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none transition-all text-gray-800 dark:text-white ${FOCUS_RING_INPUT} min-w-0`}
                                        >
                                            {CONTACT_CONTENT.form.additionalInfo.timeline.options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            {CONTACT_CONTENT.form.additionalInfo.budget.label}
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none transition-all text-gray-800 dark:text-white ${FOCUS_RING_INPUT} min-w-0`}
                                        >
                                            {CONTACT_CONTENT.form.additionalInfo.budget.options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    {CONTACT_CONTENT.form.message.label}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border outline-none transition-all resize-none text-gray-800 dark:text-white min-w-0 ${
                                        errors.message 
                                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                                            : `border-gray-300 dark:border-gray-700 ${FOCUS_RING_INPUT}`
                                    }`}
                                    placeholder={CONTACT_CONTENT.form.message.placeholder}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? "message-error" : undefined}
                                />
                                {errors.message && (
                                    <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(244, 70, 116, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full ${PRIMARY_CTA_CLASSES} py-4 px-8 rounded-xl flex items-center justify-center gap-2 min-w-0 ${FOCUS_RING}`}
                            >
                                <span className="whitespace-nowrap">{CONTACT_CONTENT.form.submit}</span>
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </motion.button>

                            {/* Signature Phrase */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-400 font-arabic break-words">
                                    {CONTACT_CONTENT.form.signature}
                                </p>
                            </div>

                            {/* Success Message */}
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                                    role="alert"
                                >
                                    <p className="text-green-700 dark:text-green-400 text-center font-semibold break-words">
                                        {CONTACT_CONTENT.form.success}
                                    </p>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
