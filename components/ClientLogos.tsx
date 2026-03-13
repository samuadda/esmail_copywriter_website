"use client";

import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import { CLIENT_LOGOS_CONTENT } from "@/lib/content";
import {
	getSectionSpacing,
	getSectionPadding,
	getSectionContainer,
	getSectionSeparator,
} from "@/lib/design-utils";

// Cycle through the same gradient palette used across the project
const GRADIENTS = [
	"from-[#f44674] to-[#fd2862]",
	"from-[#4ADE80] to-[#22c55e]",
	"from-purple-500 to-blue-500",
	"from-orange-500 to-yellow-500",
	"from-teal-500 to-cyan-500",
	"from-pink-500 to-rose-500",
];

interface Brand {
	readonly name: string;
	readonly sector: string;
	readonly logoUrl?: string;
}

interface ClientLogosProps {
	content?: {
		badge: string;
		title: string;
		highlight: string;
		description: string;
		brands: readonly Brand[];
	};
}

export default function ClientLogos({ content: CONTENT = CLIENT_LOGOS_CONTENT }: ClientLogosProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section
			className={`${getSectionSpacing()} bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden ${getSectionSeparator()}`}
		>
			<AnimatedBackground variant="minimal" />

			<div
				ref={ref}
				className={`${getSectionContainer()} ${getSectionPadding()} relative z-10`}
			>
				<SectionHeader
					badge={CONTENT.badge}
					title={CONTENT.title}
					highlight={CONTENT.highlight}
					description={CONTENT.description}
					isInView={isInView}
				/>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
					{CONTENT.brands.map((brand, index) => {
						const gradient = GRADIENTS[index % GRADIENTS.length];
						return (
							<m.div
								key={brand.name}
								initial={{ opacity: 0, y: 30, rotateX: -10 }}
								animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 15,
									delay: index * 0.07,
								}}
								whileHover={{ scale: 1.05, y: -4, transition: { type: "spring", stiffness: 300 } }}
								className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 group cursor-default"
								style={{ transformStyle: "preserve-3d" }}
							>
								{/* Logo image or gradient initial fallback */}
								{brand.logoUrl ? (
									<div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
										<Image
											src={brand.logoUrl}
											alt={brand.name}
											width={48}
											height={48}
											className="w-full h-full object-contain"
										/>
									</div>
								) : (
									<div
										className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
									>
										<span className="text-white text-sm font-black">
											{brand.name.charAt(0)}
										</span>
									</div>
								)}

								<div className="text-center">
									<p className="text-sm font-bold text-gray-700 dark:text-white leading-tight">
										{brand.name}
									</p>
									<p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 uppercase tracking-wider">
										{brand.sector}
									</p>
								</div>
							</m.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
