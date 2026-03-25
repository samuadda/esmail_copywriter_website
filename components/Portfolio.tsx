"use client";

import { m, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import type { PortfolioContent } from "@/lib/page-content";

interface PortfolioProps {
	content?: PortfolioContent;
}

/** Extract the permalink from a videoUrl (strips /embed suffix) */
function getReelUrl(videoUrl: string) {
	return videoUrl.replace(/\/embed\/?$/, "/");
}

export default function Portfolio({ content }: PortfolioProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const [activeCategory, setActiveCategory] = useState("الكل");

	const categories = content?.categories || ["الكل", "محتوى إبداعي", "إعلانات"];
	const projects = content?.projects || [];

	// Load TikTok embed script
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://www.tiktok.com/embed.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const filteredProjects =
		activeCategory === categories[0]
			? projects
			: projects.filter((project) => project.category === activeCategory);

	return (
		<section
			id="portfolio"
			className="py-20 sm:py-28 bg-white dark:bg-gray-900 relative overflow-hidden"
		>
			<AnimatedBackground variant="geometric" />

			<div
				ref={ref}
				className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10"
			>
				<SectionHeader
					badge={content?.badge || "الأعمال"}
					title={content?.title || "مشاريع"}
					highlight={content?.highlight || "ملهمة"}
					description={content?.description || "نماذج من أعمالي التي صنعت فرقاً وحققت نتائج استثنائية"}
					isInView={isInView}
				/>

				{/* Category Filter */}
				<m.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ duration: 0.4 }}
					className="flex flex-wrap justify-center gap-4 mb-12"
				>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
								activeCategory === category
									? "bg-linear-to-r from-[#f44674] to-[#fd2862] text-white shadow-lg"
									: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
							}`}
						>
							{category}
						</button>
					))}
				</m.div>

				{/* Projects Grid */}
				<m.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<AnimatePresence mode="popLayout">
						{filteredProjects.map((project, idx) => (
							<m.div
								key={project.title + idx}
								layout
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{
									opacity: { duration: 0.25, ease: "easeInOut" },
									scale: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
									layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
								}}
								whileHover={{
									y: -4,
									transition: { duration: 0.2, ease: "easeOut" },
								}}
								className="glass-card rounded-3xl overflow-hidden relative group"
							>
								{/* Media Container (Video or Image) */}
								<div
									className={`relative overflow-hidden ${
										project.videoUrl || project.tikTokId
											? "h-[550px]"
											: "h-56"
									}`}
								>
									{project.tikTokId ? (
										<div className="w-full h-full bg-black overflow-y-auto">
											<blockquote
												className="tiktok-embed"
												cite={`https://www.tiktok.com/@esm2il/video/${project.tikTokId}`}
												data-video-id={project.tikTokId}
												style={{
													maxWidth: "100%",
													minWidth: "100%",
													margin: 0,
												}}
											>
												<section>
													<a
														target="_blank"
														title="@esm2il"
														href="https://www.tiktok.com/@esm2il?refer=embed"
													>
														@esm2il
													</a>
												</section>
											</blockquote>
										</div>
									) : project.videoUrl ? (
										<a
											href={getReelUrl(project.videoUrl)}
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full h-full relative bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
										>
											{/* Instagram gradient background + play overlay */}
											<div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
												<div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
													<Play className="w-10 h-10 fill-white text-white mr-[-2px]" />
												</div>
												<span className="text-sm font-semibold opacity-80">شاهد على Instagram</span>
											</div>
											{/* Instagram icon */}
											<svg className="absolute top-4 left-4 w-8 h-8 text-white/70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
												<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
											</svg>
										</a>
									) : (
										<>
											<Image
												src={project.imageUrl || "/gradient-01.png"}
												alt={project.title}
												fill
												className="object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
										</>
									)}
								</div>

								{/* Content */}
								<div className="p-6">
									<div className="mb-3">
										<span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold bg-[#f44674]/10 text-[#f44674]">
											{project.category}
										</span>
									</div>
									<h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-[#f44674] transition-colors">
										{project.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
										{project.description}
									</p>

									{/* Stats */}
									<div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
										{project.stats.map((stat) => (
											<div
												key={stat.label}
												className="flex items-center gap-2"
											>
												<div className="w-2 h-2 rounded-full bg-linear-to-r from-[#4ADE80] to-[#22c55e]"></div>
												<span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
													{stat.value}
												</span>
											</div>
										))}
									</div>
								</div>
							</m.div>
						))}
					</AnimatePresence>
				</m.div>
			</div>
		</section>
	);
}
