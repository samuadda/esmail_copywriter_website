"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Hero = () => {
	// Generate particle configurations once during component initialization
	const particles = useMemo(() => {
		return Array.from({ length: 8 }, (_, i) => ({
			id: i,
			xMovement: Math.random() * 50 - 25,
			duration: 10 + Math.random() * 10,
			bottom: Math.random() * 20,
			left: 10 + i * 12,
		}));
	}, []);

	return (
		<section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			{/* Animated Decorative Background Elements */}
			<motion.div
				animate={{
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
			<motion.div
				animate={{
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
			<motion.div
				animate={{
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
				<motion.div
					key={particle.id}
					animate={{
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

			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10 w-full">
				<div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{/* Badge */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="inline-flex items-center gap-2 px-5 py-2.5 mb-4 rounded-full bg-gradient-to-r from-[#f44674]/10 to-[#fd2862]/10 border border-[#f44674]/20"
						>
							<span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] animate-pulse"></span>
							<span className="text-sm md:text-base font-semibold text-[#f44674]">
								متاح للعمل الآن
							</span>
						</motion.div>

						{/* Main Heading */}
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
						>
							كلمات تبيع،
							<br />
							<span className="relative inline-block mt-1">
								<span className="relative z-10">وقصص </span>
								<motion.span
									initial={{ width: 0 }}
									animate={{ width: "100%" }}
									transition={{ duration: 0.8, delay: 1 }}
									className="absolute bottom-2 right-0 h-4 bg-gradient-to-r from-[#4ADE80] to-[#22c55e] -z-0 rounded"
								></motion.span>
							</span>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
								تُلهم
							</span>
						</motion.h1>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl max-w-2xl"
						>
							مرحباً، أنا{" "}
							<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">
								إسماعيل إبراهيم
							</span>
							،<br className="hidden sm:inline" />
							كاتب محتوى إبداعي ومتخصص في الكتابة الإعلانية.
							<br />
							أحول أفكارك إلى كلمات تؤثر وتبيع.
						</motion.p>

						{/* CTA Buttons with Creative Effects */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.7 }}
							className="flex flex-wrap items-center gap-4 mt-8"
						>
							<motion.a
								href="#contact"
								whileHover={{
									scale: 1.05,
									y: -3,
								}}
								whileTap={{ scale: 0.95 }}
								className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold py-4 px-8 rounded-full shadow-lg overflow-hidden group"
							>
								{/* Shimmer Effect */}
								<motion.div
									animate={{
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
								<span className="relative z-10">يلا نشتغل</span>
								<motion.svg
									animate={{ x: [0, 5, 0] }}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="w-5 h-5 relative z-10"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 19l-7-7 7-7"
									/>
								</motion.svg>
							</motion.a>

							<motion.a
								href="#portfolio"
								whileHover={{
									scale: 1.05,
									y: -3,
									borderColor: "#f44674",
								}}
								whileTap={{ scale: 0.95 }}
								className="relative inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold py-4 px-8 rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden group transition-all duration-300"
							>
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-[#f44674]/10 to-[#fd2862]/10"
									initial={{ scale: 0, opacity: 0 }}
									whileHover={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.3 }}
								/>
								<span className="relative z-10">
									شاهد أعمالي
								</span>
								<motion.svg
									animate={{ x: [0, 5, 0] }}
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
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</motion.svg>
							</motion.a>
						</motion.div>

					</motion.div>

					{/* Image Section */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.4,
						}}
						className="relative flex items-center justify-center"
					>
						{/* Main Image Container */}
						<div className="relative w-full max-w-lg">
							{/* Decorative Circle */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#f44674]/20 via-[#4ADE80]/20 to-purple-500/20 rounded-full blur-2xl"></div>

							{/* Avatar Image */}
							<motion.div
								animate={{ y: [0, -15, 0] }}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="relative z-10"
							>
								<Image
									src="/avatar-1.png"
									alt="إسماعيل إبراهيم"
									width={600}
									height={600}
									className="w-full h-auto relative z-10"
									priority
								/>
							</motion.div>

							{/* Animated Pen */}
							<motion.div
								animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
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
										alt="Pen"
										width={100}
										height={100}
										className="relative"
									/>
								</div>
							</motion.div>

							{/* Floating Note */}
							<motion.div
								animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
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
										alt="Note"
										width={90}
										height={90}
										className="relative"
									/>
								</div>
							</motion.div>

							{/* Floating Badge */}
							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 1.2 }}
								className="absolute -bottom-6 -right-6 z-30 hidden sm:block"
							>
								<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-100 dark:border-gray-700">
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center">
											<svg
												className="w-6 h-6 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<div>
											<p className="text-xs text-gray-500 dark:text-gray-400">
												جودة عالية
											</p>
											<p className="text-sm font-bold text-gray-800 dark:text-white">
												مضمونة 100%
											</p>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Star Icon */}
							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: "linear",
								}}
								className="absolute top-10 right-10 z-20 hidden lg:block"
							>
								<Image
									src="/star.svg"
									alt="Star"
									width={60}
									height={60}
									className="opacity-80"
								/>
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.5 }}
					className="flex justify-center mt-12"
				>
					<motion.a
						href="#about"
						animate={{ y: [0, 10, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#f44674] dark:hover:text-[#f44674] transition-colors"
					>
						<span className="text-sm font-medium">
							تعرف علي أكثر
						</span>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
