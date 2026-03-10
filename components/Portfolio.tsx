"use client";

import { m, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";

const categories = ["الكل", "محتوى إبداعي", "إعلانات"];

type Project = {
	id: number;
	title: string;
	category: string;
	description: string;
	image?: string;
	videoUrl?: string; // Kept for iframe-based embeds like Instagram
	tikTokId?: string; // New field for TikTok ID
	stats: Record<string, string>;
};

const projects: Project[] = [
	{
		id: 1,
		title: "حد المدينة زمان",
		category: "محتوى إبداعي",
		description:
			"قصة إبداعية تأخذك في رحلة عبر الزمن لاستكشاف حدود المدينة القديمة.",
		videoUrl: "https://www.instagram.com/reel/C06GH1qMVQw/embed",
		stats: { views: "High", engagement: "Strong" },
	},
	{
		id: 2,
		title: "ظاهرة سنوية : شارعين في اتجاه واحد",
		category: "محتوى إبداعي",
		description: "تغطية إبداعية لظاهرة سنوية فريدة، بأسلوب قصصي مشوق.",
		videoUrl: "https://www.instagram.com/reel/C8bp-O1sko3/embed",
		stats: { views: "Trending", shares: "Viral" },
	},
	{
		id: 3,
		title: "مايحتاج تسلف خويك",
		category: "محتوى إبداعي",
		description:
			"فيديو إبداعي لشركة التقنية المالية MoneyMoon حول التمويل المصغر.",
		videoUrl: "https://www.instagram.com/reel/DOrPu4UDTqF/embed",
		stats: { views: "Popular", likes: "High" },
	},
	{
		id: 4,
		title: "كيف تزيد مبيعاتك مع مرن",
		category: "إعلانات",
		description:
			"فيديو إعلاني لشركة مرن لأنظمة نقاط البيع يوضح استراتيجيات زيادة المبيعات.",
		videoUrl: "https://www.instagram.com/reel/DSQJCVjDZdd/embed",
		stats: { views: "Targeted", conversion: "High" },
	},
	{
		id: 5,
		title: "كيف تختار المؤثر المناسب؟",
		category: "إعلانات",
		description:
			"إعلان غير مباشر لشركة مرن يقدم نصائح حول اختيار المؤثرين للحملات التسويقية.",
		videoUrl: "https://www.instagram.com/reel/DLnnn5BP0cI/embed",
		stats: { views: "Engaging", shares: "High" },
	},
	{
		id: 6,
		title: "أهم 5 نقاط لمقهى ناجح",
		category: "إعلانات",
		description:
			"فيديو تثقيفي لشركة مرن يستعرض أساسيات نجاح المقاهي والمطاعم.",
		videoUrl: "https://www.instagram.com/reel/DNBM4OwtwSY/embed",
		stats: { views: "Informative", saves: "High" },
	},
];

export default function Portfolio() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const [activeCategory, setActiveCategory] = useState("الكل");

	// Load TikTok embed script (kept in case we need it later, but currently unused for active projects)
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
		activeCategory === "الكل"
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
					badge="الأعمال"
					title="مشاريع"
					highlight="ملهمة"
					description="نماذج من أعمالي التي صنعت فرقاً وحققت نتائج استثنائية"
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
						{filteredProjects.map((project) => (
							<m.div
								key={project.id}
								layout
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{
									opacity: {
										duration: 0.25,
										ease: "easeInOut",
									},
									scale: {
										duration: 0.25,
										ease: [0.4, 0, 0.2, 1],
									},
									layout: {
										duration: 0.35,
										ease: [0.4, 0, 0.2, 1],
									},
								}}
								whileHover={{
									y: -4,
									transition: {
										duration: 0.2,
										ease: "easeOut",
									},
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
										<div className="w-full h-full bg-black">
											<iframe
												src={project.videoUrl}
												className="w-full h-full object-cover"
												title={project.title}
												loading="lazy"
												frameBorder="0"
												allowFullScreen
												scrolling="no"
												allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
											></iframe>
										</div>
									) : (
										<>
											<Image
												src={
													project.image ||
													"/gradient-01.png"
												}
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
										{Object.entries(project.stats).map(
											([key, value]) => (
												<div
													key={key}
													className="flex items-center gap-2"
												>
													<div className="w-2 h-2 rounded-full bg-linear-to-r from-[#4ADE80] to-[#22c55e]"></div>
													<span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
														{value}
													</span>
												</div>
											)
										)}
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
