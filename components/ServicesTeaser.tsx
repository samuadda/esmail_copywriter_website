"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getSectionSeparator } from "@/lib/design-utils";
import type { ServicesTeaserContent } from "@/lib/page-content";

function ServiceTeaserCard({
	title,
	desc,
	icon,
}: {
	title: string;
	desc: string;
	icon: string;
}) {
	return (
		<div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:-translate-y-2 transition-transform duration-300">
			<div className="w-16 h-16 mx-auto mb-4 relative">
				<Image src={icon} alt={title} fill className="object-contain" />
			</div>
			<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
				{title}
			</h3>
			<p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
		</div>
	);
}

interface ServicesTeaserProps {
	content?: ServicesTeaserContent;
}

export default function ServicesTeaser({ content }: ServicesTeaserProps) {
	const C = content || {
		heading: "كيف يمكنني مساعدتك؟",
		cards: [
			{ title: "رسائل مؤثرة", desc: "نصوص تصنع الوعي وتبني الثقة مع جمهورك.", icon: "/gradient-01.png" },
			{ title: "صفحات تعريفية", desc: "تصميم وتأليف صفحات تعرض قيمتك وتجذب جمهورك المثالي.", icon: "/gradient-04.png" },
			{ title: "استراتيجية المحتوى", desc: "خطط محتوى طويلة الأمد تبني جمهوراً مخلصاً.", icon: "/gradient-02.png" },
		],
		ctaText: "اكتشف كل خدماتي",
	};

	return (
		<section className={`py-20 bg-gray-50 dark:bg-gray-800/50 ${getSectionSeparator()}`}>
			<div className="container px-4 mx-auto text-center">
				<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
					{C.heading}
				</h2>
				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
					{C.cards.map((card) => (
						<ServiceTeaserCard key={card.title} title={card.title} desc={card.desc} icon={card.icon} />
					))}
				</div>
				<Link
					href="/services"
					className="text-[#f44674] font-bold inline-flex items-center gap-2 hover:gap-4 transition-all"
				>
					{C.ctaText} <ArrowLeft className="w-5 h-5" />
				</Link>
			</div>
		</section>
	);
}
