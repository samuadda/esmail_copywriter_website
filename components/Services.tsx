"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Link from "next/link";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { SERVICES_CONTENT } from "@/lib/content";
import {
	PRIMARY_CTA_CLASSES,
	getSectionSpacing,
	getSectionPadding,
	getSectionContainer,
} from "@/lib/design-utils";

// Service icons as components (keeping icons in component since they're presentation)
const ServiceIcon = ({ id }: { id: number }) => {
	const icons: Record<number, React.ReactElement> = {
		1: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
				/>
			</svg>
		),
		2: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
				/>
			</svg>
		),
		3: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
		),
		4: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
				/>
			</svg>
		),
		5: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
				/>
			</svg>
		),
		6: (
			<svg
				className="w-8 h-8"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
				/>
			</svg>
		),
	};
	return icons[id] || null;
};

export default function Services() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section
			id="services"
			className={`${getSectionSpacing()} bg-gray-50 dark:bg-gray-800 relative overflow-hidden`}
		>
			<AnimatedBackground variant="minimal" />
			<div
				ref={ref}
				className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}
			>
				<SectionHeader
					badge={SERVICES_CONTENT.badge}
					title={SERVICES_CONTENT.title}
					highlight={SERVICES_CONTENT.highlight}
					description={SERVICES_CONTENT.description}
					isInView={isInView}
				/>

				{/* Offers Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{SERVICES_CONTENT.offers.map((offer, index) => (
						<motion.div
							key={offer.id}
							initial={{ opacity: 0, y: 50, rotateX: -15 }}
							animate={
								isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}
							}
							transition={{
								type: "spring",
								stiffness: 100,
								damping: 15,
								delay: index * 0.1,
							}}
							whileHover={{
								scale: 1.05,
								rotateY: 5,
								z: 50,
								transition: { type: "spring", stiffness: 300 },
							}}
							className="glass-card rounded-3xl p-8 relative group min-w-0 flex flex-col"
							style={{ transformStyle: "preserve-3d" }}
						>
							{/* Icon */}
							<motion.div
								whileHover={{
									rotate: [0, -10, 10, -10, 0],
									scale: 1.1,
								}}
								transition={{ duration: 0.5 }}
								className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center text-white mb-6 shadow-lg flex-shrink-0`}
							>
								<ServiceIcon id={offer.id} />
							</motion.div>

							{/* Title */}
							<h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 break-words">
								{offer.title}
							</h3>
							{offer.subtitle && (
								<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
									{offer.subtitle}
								</p>
							)}

							{/* Description */}
							<p className="text-gray-600 dark:text-gray-300 leading-relaxed break-words mb-6">
								{offer.description}
							</p>

							{/* لمن يناسب */}
							<div className="mb-6">
								<h4 className="text-sm font-bold text-gray-800 dark:text-white mb-2">
									لمن يناسب:
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-300 break-words">
									{offer.forWho}
								</p>
							</div>

							{/* ماذا ستستلم */}
							<div className="mb-6">
								<h4 className="text-sm font-bold text-gray-800 dark:text-white mb-2">
									ماذا ستستلم:
								</h4>
								<ul className="space-y-2">
									{offer.deliverables.map((item, idx) => (
										<li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
											<span className="text-[#f44674] mt-1">•</span>
											<span className="break-words">{item}</span>
										</li>
									))}
								</ul>
							</div>

							{/* المدة */}
							<div className="mb-4">
								<h4 className="text-sm font-bold text-gray-800 dark:text-white mb-1">
									المدة:
								</h4>
								<p className="text-sm text-gray-600 dark:text-gray-300 break-words">
									{offer.duration}
								</p>
							</div>

							{/* ابتداءً من */}
							<div className="mb-6">
								<p className="text-sm font-semibold text-gray-800 dark:text-white break-words">
									{offer.startingFrom}
								</p>
							</div>

							{/* CTA Button */}
							<Link href={SERVICES_CONTENT.primaryCta.href} passHref legacyBehavior>
								<motion.a
									whileHover={{
										scale: 1.05,
										boxShadow: "0 20px 40px rgba(244, 70, 116, 0.3)",
									}}
									whileTap={{ scale: 0.95 }}
									className={`mt-auto inline-flex items-center justify-center gap-2 ${PRIMARY_CTA_CLASSES} py-3 px-6 min-w-0 text-sm`}
								>
									<span className="whitespace-nowrap">
										{SERVICES_CONTENT.primaryCta.label}
									</span>
									<svg
										className="w-4 h-4 flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</motion.a>
							</Link>

							{/* Hover Effect Gradient */}
							<div
								className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
								aria-hidden="true"
							></div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
