"use client";

import type { ContactPageContent } from "@/lib/page-content";

interface FAQSectionProps {
	content: ContactPageContent;
}

export default function FAQSection({ content }: FAQSectionProps) {
	return (
		<section className="py-20 bg-white dark:bg-gray-900">
			<div className="container px-4 mx-auto max-w-3xl">
				<h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{content.faqTitle}</h3>
				<div className="space-y-6">
					{content.faqItems.map((item, idx) => (
						<div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
							<h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.question}</h4>
							<p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
