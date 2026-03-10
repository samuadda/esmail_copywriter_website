"use client";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import MagneticButton from "./MagneticButton";
import { Feather } from "lucide-react";
import { HERO_CONTENT } from "@/lib/content";
import { PRIMARY_CTA_CLASSES, SECONDARY_CTA_CLASSES, FOCUS_RING, getSectionPadding, getSectionContainer } from "@/lib/design-utils";

const Hero = () => {
	const prefersReducedMotion = useReducedMotion();
	
	// Generate particle configurations once during component initialization
	const particles = useMemo(() => {
		return Array.from({ length: 8 }, (_, i) => ({
			id: i,
			xMovement: Math.random() * 50 - 25,
			duration: prefersReducedMotion ? 0 : 10 + Math.random() * 10,
			bottom: Math.random() * 20,
			left: 10 + i * 12,
		}));
	}, [prefersReducedMotion]);

	const animationConfig = {
		duration: prefersReducedMotion ? 0 : undefined,
		repeat: prefersReducedMotion ? 0 : Infinity,
	};

	return (
		<section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			{/* Animated Decorative Background Elements */}
			<m.div
				animate={prefersReducedMotion ? {} : {
					x: [0, 50, 0],
					y: [0, 30, 0],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/20 to-[#fd2862]/20 rounded-full blur-3xl"
			/>
			<m.div
				animate={prefersReducedMotion ? {} : {
					x: [0, -30, 0],
					y: [0, 50, 0],
					scale: [1, 1.15, 1],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4ADE80]/20 to-[#22c55e]/20 rounded-full blur-3xl"
			/>
			<m.div
				animate={prefersReducedMotion ? {} : {
					rotate: [0, 360],
					scale: [1, 1.05, 1],
				}}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: "linear",
				}}
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
			/>

			{/* Floating Particles */}
			{particles.map((particle) => (
				<m.div
					key={particle.id}
					animate={prefersReducedMotion ? {} : {
						y: [0, -100, 0],
						x: [0, particle.xMovement, 0],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{
						duration: particle.duration,
						repeat: Infinity,
						delay: particle.id * 0.5,
						ease: "easeInOut",
					}}
					className="absolute w-2 h-2 bg-gradient-to-r from-[#f44674] to-[#4ADE80] rounded-full"
					style={{
						left: `${particle.left}%`,
						bottom: `${particle.bottom}%`,
					}}
				/>
			))}

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

						{/* CTA Buttons with Creative Effects */}
						<m.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.7 }}
							className="flex flex-wrap items-center gap-4 mt-8"
						>
							<MagneticButton>
								<m.a
									href={HERO_CONTENT.cta.primary.href}
									whileHover={prefersReducedMotion ? {} : {
										scale: 1.05,
										y: -3,
									}}
									whileTap={{ scale: 0.95 }}
									className={`relative inline-flex items-center gap-2 ${PRIMARY_CTA_CLASSES} py-4 px-8 overflow-hidden group ${FOCUS_RING}`}
								>
									{/* Shimmer Effect */}
									<m.div
										animate={prefersReducedMotion ? {} : {
											x: ["-200%", "200%"],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "linear",
											repeatDelay: 1,
										}}
										className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
									/>
									<span className="relative z-10">{HERO_CONTENT.cta.primary.label}</span>
									<m.svg
										animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
										transition={{
											duration: 1.5,
											repeat: Infinity,
											ease: "easeInOut",
										}}
										className="w-5 h-5 relative z-10"
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
									</m.svg>
								</m.a>
							</MagneticButton>

							<MagneticButton>
								<m.a
									href={HERO_CONTENT.cta.secondary.href}
									whileHover={prefersReducedMotion ? {} : {
										scale: 1.05,
										y: -3,
										borderColor: "#f44674",
									}}
									whileTap={{ scale: 0.95 }}
									className={`relative inline-flex items-center gap-2 ${SECONDARY_CTA_CLASSES} py-4 px-8 overflow-hidden group ${FOCUS_RING}`}
								>
									<m.div
										className="absolute inset-0 bg-gradient-to-r from-[#f44674]/10 to-[#fd2862]/10"
										initial={{ scale: 0, opacity: 0 }}
										whileHover={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
										transition={{ duration: 0.3 }}
									/>
									<span className="relative z-10">
										{HERO_CONTENT.cta.secondary.label}
									</span>
									<m.svg
										animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
										transition={{
											duration: 1.5,
											repeat: Infinity,
											ease: "easeInOut",
											delay: 0.5,
										}}
										className="w-5 h-5 relative z-10"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</m.svg>
								</m.a>
							</MagneticButton>
						</m.div>

					</m.div>

					{/* Image Section */}
					<m.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.8,
							ease: "easeOut",
							delay: prefersReducedMotion ? 0 : 0.4,
						}}
						className="relative flex items-center justify-center"
					>
						{/* Main Image Container */}
						<div className="relative w-full max-w-lg">
							{/* Decorative Circle */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#f44674]/20 via-[#4ADE80]/20 to-purple-500/20 rounded-full blur-2xl"></div>

							{/* Avatar Image */}
							<m.div
								animate={prefersReducedMotion ? {} : { y: [0, -15, 0] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="relative z-10"
							>
								<Image
									src="/avatar-1.png"
									alt={HERO_CONTENT.description.name}
									width={600}
									height={600}
									className="w-full h-auto relative z-10"
									sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
									quality={80}
									priority
								/>
							</m.div>

							{/* Animated Pen */}
							<m.div
								animate={prefersReducedMotion ? {} : { y: [0, -20, 0], rotate: [0, 10, 0] }}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.5,
								}}
								className="absolute top-1/4 left-0 z-20 hidden lg:block"
							>
								<div className="relative">
									<div className="absolute inset-0 bg-[#f44674]/30 blur-xl rounded-full"></div>
									<Image
										src="/pen.png"
										alt=""
										width={100}
										height={100}
										className="relative"
										sizes="100px"
										quality={75}
										aria-hidden="true"
									/>
								</div>
							</m.div>

							{/* Floating Note */}
							<m.div
								animate={prefersReducedMotion ? {} : { y: [0, -15, 0], rotate: [0, -5, 0] }}
								transition={{
									duration: 3.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1,
								}}
								className="absolute bottom-1/4 right-0 z-20 hidden lg:block"
							>
								<div className="relative">
									<div className="absolute inset-0 bg-[#4ADE80]/30 blur-xl rounded-full"></div>
									<Image
										src="/note.png"
										alt=""
										width={90}
										height={90}
										className="relative"
										sizes="90px"
										quality={75}
										aria-hidden="true"
									/>
								</div>
							</m.div>

							{/* Floating Badge - Redesigned */}
							<m.div
								initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
								animate={{ opacity: 1, scale: 1, rotate: 0 }}
								transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1.2, type: "spring" }}
								className="absolute -bottom-8 -right-8 z-30 hidden sm:block"
							>
								<div className="glass-card rounded-2xl p-4 flex items-center gap-4 border border-white/40 dark:border-white/10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
									<div className="relative">
										<div className="absolute inset-0 bg-[#f44674] blur-lg opacity-40 rounded-full"></div>
										<div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#f44674] to-[#fd2862] flex items-center justify-center text-white shadow-lg border border-white/20">
											<Feather className="w-6 h-6" aria-hidden="true" />
										</div>
									</div>
									<div>
										<p className="text-[10px] uppercase tracking-wider text-[#f44674] font-bold mb-0.5">
											إبداع بلا حدود
										</p>
										<p className="text-base font-bold text-gray-800 dark:text-white leading-tight">
											نصنع الأثر
										</p>
									</div>
								</div>
							</m.div>

							{/* Star Icon */}
							<m.div
								animate={prefersReducedMotion ? {} : { rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: "linear",
								}}
								className="absolute top-10 right-10 z-20 hidden lg:block"
							>
								<Image
									src="/star.svg"
									alt=""
									width={60}
									height={60}
									className="opacity-80"
									aria-hidden="true"
								/>
							</m.div>
						</div>
					</m.div>
				</div>

				{/* Scroll Indicator */}
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.5 }}
					className="flex justify-center mt-12"
				>
					<m.a
						href={HERO_CONTENT.scrollIndicator.href}
						animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#f44674] dark:hover:text-[#f44674] transition-colors"
					>
						<span className="text-sm font-medium">
							{HERO_CONTENT.scrollIndicator.label}
						</span>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</m.a>
				</m.div>
			</div>
		</section>
	);
};

export default Hero;

