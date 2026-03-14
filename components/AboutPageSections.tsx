"use client";

import { m } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import PhilosophyAnimation from "./PhilosophyAnimation";
import type { AboutPageContent } from "@/lib/page-content";

interface AboutPageSectionsProps {
	content: AboutPageContent;
}

export default function AboutPageSections({ content }: AboutPageSectionsProps) {
	return (
		<>
			{/* My Philosophy Section */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="container px-4 mx-auto max-w-4xl">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{content.philosophyTitle}</h3>
							<div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
								{content.philosophyParagraphs.map((paragraph, idx) => (
									<p key={idx}>{paragraph}</p>
								))}
							</div>
						</div>
						<PhilosophyAnimation />
					</div>
				</div>
			</section>

			{/* Who I Work With / Who I Don't Work With Section */}
			<section className="py-20 bg-gray-50 dark:bg-gray-800">
				<div className="container px-4 mx-auto max-w-5xl">
					<SectionHeader
						badge={content.compatibilityBadge}
						title={content.compatibilityTitle}
						highlight={content.compatibilityHighlight}
						description={content.compatibilityDescription}
						isInView={true}
					/>

					<div className="grid md:grid-cols-2 gap-8 mt-12">
						{/* أشتغل مع */}
						<m.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="bg-gradient-to-br from-[#4ADE80]/10 to-[#22c55e]/10 rounded-3xl p-8 border-2 border-[#4ADE80]/30 dark:border-[#4ADE80]/20"
						>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-[#4ADE80]"></span>
								{content.workWithTitle}
							</h3>
							<ul className="space-y-4">
								{content.workWith.map((item, idx) => (
									<li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
										<span className="text-[#4ADE80] mt-1">✓</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</m.div>

						{/* ما أشتغل مع */}
						<m.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-3xl p-8 border-2 border-red-200/50 dark:border-red-800/30"
						>
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-red-500"></span>
								{content.dontWorkWithTitle}
							</h3>
							<ul className="space-y-4">
								{content.dontWorkWith.map((item, idx) => (
									<li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
										<span className="text-red-500 mt-1">✗</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</m.div>
					</div>

					{/* CTA */}
					<m.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="text-center mt-12"
					>
						<a
							href="/contact"
							className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
						>
							{content.ctaText}
						</a>
					</m.div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="container px-4 mx-auto text-center">
					<h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{content.ctaHeading}</h3>
					<p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
						{content.ctaDescription}
					</p>
					<a
						href="/contact"
						className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
					>
						{content.ctaText}
					</a>
				</div>
			</section>
		</>
	);
}
