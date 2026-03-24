"use client";

import { useState, useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { getSectionSpacing, getSectionSeparator } from "@/lib/design-utils";

export interface FAQContent {
	badge?: string;
	faqTitle: string;
	highlight?: string;
	description?: string;
	faqItems: readonly { question: string; answer: string }[];
}

interface FAQSectionProps {
	content: FAQContent;
	className?: string;
}

function FAQItem({
	question,
	answer,
	index,
	isInView,
}: {
	question: string;
	answer: string;
	index: number;
	isInView: boolean;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const prefersReducedMotion = useReducedMotion();

	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: prefersReducedMotion ? 0 : 0.4,
				delay: prefersReducedMotion ? 0 : index * 0.1,
			}}
			className="glass-card rounded-2xl overflow-hidden"
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between p-6 text-right gap-4 cursor-pointer"
				aria-expanded={isOpen}
			>
				<span className="font-bold text-lg text-gray-900 dark:text-white">
					{question}
				</span>
				<m.span
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
					className="flex-shrink-0 text-[#f44674]"
				>
					<ChevronDown className="w-5 h-5" />
				</m.span>
			</button>
			<m.div
				initial={false}
				animate={{
					height: isOpen ? "auto" : 0,
					opacity: isOpen ? 1 : 0,
				}}
				transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: "easeInOut" }}
				className="overflow-hidden"
			>
				<p className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
					{answer}
				</p>
			</m.div>
		</m.div>
	);
}

export default function FAQSection({ content, className }: FAQSectionProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section
			ref={ref}
			className={className ?? `${getSectionSpacing()} bg-white dark:bg-gray-900 ${getSectionSeparator()}`}
		>
			<div className="container px-4 mx-auto max-w-3xl">
				<SectionHeader
					badge={content.badge ?? "أسئلة شائعة"}
					title={content.faqTitle}
					highlight={content.highlight ?? ""}
					description={content.description}
					isInView={isInView}
				/>
				<div className="space-y-4">
					{content.faqItems.map((item, idx) => (
						<FAQItem
							key={idx}
							question={item.question}
							answer={item.answer}
							index={idx}
							isInView={isInView}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
