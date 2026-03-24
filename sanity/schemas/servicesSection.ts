import { defineType, defineField } from "sanity";

export default defineType({
	name: "servicesSection",
	title: "الخدمات (Services)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({ name: "title", title: "العنوان", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
		defineField({
			name: "primaryCtaLabel",
			title: "زر رئيسي — النص",
			type: "string",
		}),
		defineField({
			name: "primaryCtaHref",
			title: "زر رئيسي — الرابط",
			type: "string",
		}),
		defineField({
			name: "offers",
			title: "العروض",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({ name: "title", title: "العنوان (إنجليزي)", type: "string" }),
						defineField({ name: "subtitle", title: "العنوان (عربي)", type: "string" }),
						defineField({
							name: "type",
							title: "النوع",
							type: "string",
							options: {
								list: [
									{ title: "مرة واحدة", value: "one-off" },
									{ title: "مرة واحدة أو اشتراك", value: "one-off-or-retainer" },
									{ title: "مرة واحدة أو باقة", value: "one-off-or-package" },
								],
							},
						}),
						defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
						defineField({ name: "forWho", title: "لمن هذا العرض؟", type: "text", rows: 2 }),
						defineField({
							name: "deliverables",
							title: "المخرجات",
							type: "array",
							of: [{ type: "string" }],
						}),
						defineField({ name: "duration", title: "المدة", type: "string" }),
						defineField({ name: "startingFrom", title: "يبدأ من", type: "string" }),
						defineField({
							name: "subPaths",
							title: "مسارات فرعية",
							type: "array",
							of: [
								{
									type: "object",
									fields: [
										defineField({ name: "name", title: "الاسم", type: "string" }),
										defineField({ name: "description", title: "الوصف", type: "string" }),
									],
								},
							],
						}),
					],
					preview: {
						select: { title: "title", subtitle: "subtitle" },
					},
				},
			],
		}),
		// ── Page-level CTA ──────────────────────────────────────────────
		defineField({ name: "ctaHeading", title: "عنوان CTA (أسفل الصفحة)", type: "string" }),
		defineField({ name: "ctaDescription", title: "وصف CTA", type: "text", rows: 2 }),
		defineField({ name: "ctaButtonLabel", title: "نص زر CTA", type: "string" }),
		defineField({ name: "ctaButtonHref", title: "رابط زر CTA", type: "string" }),
		// ── FAQ ──────────────────────────────────────────────────────────
		defineField({ name: "faqTitle", title: "عنوان الأسئلة الشائعة", type: "string" }),
		defineField({
			name: "faqItems",
			title: "الأسئلة الشائعة",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({ name: "question", title: "السؤال", type: "string" }),
						defineField({ name: "answer", title: "الإجابة", type: "text", rows: 3 }),
					],
					preview: {
						select: { title: "question" },
					},
				},
			],
		}),
		// ── Testimonials Section Header ──────────────────────────────────
		defineField({ name: "testimonialsBadge", title: "شارة قسم الشهادات", type: "string" }),
		defineField({ name: "testimonialsTitle", title: "عنوان قسم الشهادات", type: "string" }),
		defineField({ name: "testimonialsHighlight", title: "الكلمة المميزة للشهادات", type: "string" }),
		defineField({ name: "testimonialsDescription", title: "وصف قسم الشهادات", type: "text", rows: 2 }),
	],
	preview: {
		prepare() {
			return { title: "الخدمات (Services)" };
		},
	},
});
