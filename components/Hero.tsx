"use client";
import { m, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import MagneticButton from "./MagneticButton";
import { HERO_CONTENT } from "@/lib/content";
import { PRIMARY_CTA_CLASSES, SECONDARY_CTA_CLASSES, FOCUS_RING, getSectionPadding, getSectionContainer } from "@/lib/design-utils";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroImageSection } from "@/components/hero/HeroImageSection";
import { HeroScrollIndicator } from "@/components/hero/HeroScrollIndicator";

const Hero = () => {
	const prefersReducedMotion = useReducedMotion();

	const particles = useMemo(() => {
		return Array.from({ length: 8 }, (_, i) => ({
			id: i,
			xMovement: Math.random() * 50 - 25,
			duration: prefersReducedMotion ? 0 : 10 + Math.random() * 10,
			bottom: Math.random() * 20,
			left: 10 + i * 12,
		}));
	}, [prefersReducedMotion]);

	return (
		<section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			<HeroBackground prefersReducedMotion={prefersReducedMotion} particles={particles} />

			<div className={`${getSectionContainer()} ${getSectionPadding()} relative z-10 w-full`}>
				<div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Text Content */}
					<m.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
						className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10"
					>
						{/* Badge */}
						<m.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
							className="inline-flex items-center gap-2 px-5 py-2.5 mb-4 rounded-full bg-gradient-to-r from-[#f44674]/10 to-[#fd2862]/10 border border-[#f44674]/20"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] animate-pulse"></span>
							<span className="text-sm md:text-base font-semibold text-[#f44674]">
								{HERO_CONTENT.badge}
							</span>
						</m.div>

						{/* Main Heading */}
						<m.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.3 }}
							className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight relative"
						>
							{HERO_CONTENT.heading.line1}
							<br />
							<span className="relative inline-block mt-1">
								<span className="relative z-10">{HERO_CONTENT.heading.line2} </span>
								<m.span
									initial={{ width: 0 }}
									animate={{ width: "100%" }}
									transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1 }}
									className="absolute bottom-2 right-0 h-4 bg-gradient-to-r from-[#4ADE80] to-[#22c55e] -z-0 rounded"
								></m.span>
							</span>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
								{HERO_CONTENT.heading.highlight}
							</span>
						</m.h1>

						{/* Description */}
						<m.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.5 }}
							className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl max-w-2xl"
						>
							{HERO_CONTENT.description.intro}{" "}
							<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
								{HERO_CONTENT.description.name}
							</span>
							،<br className="hidden sm:inline" />
							{HERO_CONTENT.description.text}
							<br />
							{HERO_CONTENT.description.continuation}
						</m.p>

						{/* CTA Buttons */}
						<m.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.7 }}
							className="flex flex-wrap items-center gap-4 mt-8"
						>
							<MagneticButton>
								<m.a
									href={HERO_CONTENT.cta.primary.href}
									whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
									whileTap={{ scale: 0.95 }}
									className={`relative inline-flex items-center gap-2 ${PRIMARY_CTA_CLASSES} py-4 px-8 overflow-hidden group ${FOCUS_RING}`}
								>
									<m.div
										animate={prefersReducedMotion ? {} : { x: ["-200%", "200%"] }}
										transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
										className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
									/>
									<span className="relative z-10">{HERO_CONTENT.cta.primary.label}</span>
									<m.svg
										animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
										transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
										className="w-5 h-5 relative z-10"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
									</m.svg>
								</m.a>
							</MagneticButton>

							<MagneticButton>
								<m.a
									href={HERO_CONTENT.cta.secondary.href}
									whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3, borderColor: "#f44674" }}
									whileTap={{ scale: 0.95 }}
									className={`relative inline-flex items-center gap-2 ${SECONDARY_CTA_CLASSES} py-4 px-8 overflow-hidden group ${FOCUS_RING}`}
								>
									<m.div
										className="absolute inset-0 bg-gradient-to-r from-[#f44674]/10 to-[#fd2862]/10"
										initial={{ scale: 0, opacity: 0 }}
										whileHover={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
										transition={{ duration: 0.3 }}
									/>
									<span className="relative z-10">{HERO_CONTENT.cta.secondary.label}</span>
									<m.svg
										animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
										transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
										className="w-5 h-5 relative z-10"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</m.svg>
								</m.a>
							</MagneticButton>
						</m.div>
					</m.div>

					<HeroImageSection authorName={HERO_CONTENT.description.name} prefersReducedMotion={prefersReducedMotion} />
				</div>

				<HeroScrollIndicator
					href={HERO_CONTENT.scrollIndicator.href}
					label={HERO_CONTENT.scrollIndicator.label}
					prefersReducedMotion={prefersReducedMotion}
				/>
			</div>
		</section>
	);
};

export default Hero;
