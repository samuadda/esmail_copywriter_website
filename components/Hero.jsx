"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-36 min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			{/* Decorative Background Elements */}
			<div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/20 to-[#fd2862]/20 rounded-full blur-3xl animate-pulse"></div>
			<div
				className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4ADE80]/20 to-[#22c55e]/20 rounded-full blur-3xl animate-pulse"
				style={{ animationDelay: "1s" }}
			></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

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
							className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-gradient-to-r from-[#f44674]/10 to-[#fd2862]/10 border border-[#f44674]/20"
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
							className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl leading-relaxed"
						>
							كلمات تبيع،
							<br />
							<span className="relative inline-block mt-3">
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
							className="mt-10 text-lg leading-loose text-gray-600 dark:text-gray-300 sm:text-xl max-w-2xl"
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

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.7 }}
							className="flex flex-wrap items-center gap-4 mt-12"
						>
							<a
								href="#contact"
								className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-[#fd2862] hover:to-[#ca1d4b] text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
							>
								<span>يلا نشتغل</span>
								<svg
									className="w-5 h-5"
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
								</svg>
							</a>
							<a
								href="#portfolio"
								className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-4 px-8 rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-105"
							>
								<span>شاهد أعمالي</span>
								<svg
									className="w-5 h-5"
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
								</svg>
							</a>
						</motion.div>

						{/* Quick Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.9 }}
							className="flex flex-wrap items-center gap-8 mt-20 pt-10 border-t border-gray-200 dark:border-gray-700"
						>
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center shadow-lg">
									<span className="text-white font-bold text-lg">
										5+
									</span>
								</div>
								<div>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										سنوات
									</p>
									<p className="font-bold text-gray-800 dark:text-white">
										خبرة
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#22c55e] flex items-center justify-center shadow-lg">
									<span className="text-white font-bold text-lg">
										100+
									</span>
								</div>
								<div>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										مشروع
									</p>
									<p className="font-bold text-gray-800 dark:text-white">
										مكتمل
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
									<span className="text-white font-bold text-lg">
										50+
									</span>
								</div>
								<div>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										عميل
									</p>
									<p className="font-bold text-gray-800 dark:text-white">
										راضٍ
									</p>
								</div>
							</div>
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
					className="flex justify-center mt-20"
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

