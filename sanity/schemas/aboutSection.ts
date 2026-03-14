import { defineType, defineField } from "sanity";

export default defineType({
	name: "aboutSection",
	title: "عني (About)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({ name: "title", title: "العنوان", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({
			name: "paragraphs",
			title: "الفقرات",
			type: "array",
			of: [{ type: "text" }],
		}),
		defineField({
			name: "qualityBadgeTitle",
			title: "شارة الجودة — العنوان",
			type: "string",
		}),
		defineField({
			name: "qualityBadgeDescription",
			title: "شارة الجودة — الوصف",
			type: "string",
		}),
		defineField({
			name: "stats",
			title: "الإحصائيات",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({ name: "value", title: "القيمة", type: "string" }),
						defineField({ name: "label", title: "العنوان", type: "string" }),
					],
					preview: {
						select: { title: "value", subtitle: "label" },
					},
				},
			],
		}),
		defineField({ name: "signature", title: "التوقيع", type: "string" }),
		// ── About Page Fields ──────────────────────────────────────────
		defineField({ name: "pageBadge", title: "شارة الصفحة", type: "string" }),
		defineField({ name: "pageTitle", title: "عنوان الصفحة", type: "string" }),
		defineField({ name: "pageHighlight", title: "الكلمة المميزة للصفحة", type: "string" }),
		defineField({ name: "pageDescription", title: "وصف الصفحة", type: "text", rows: 2 }),
		defineField({ name: "philosophyTitle", title: "عنوان الفلسفة", type: "string" }),
		defineField({
			name: "philosophyParagraphs",
			title: "فقرات الفلسفة",
			type: "array",
			of: [{ type: "text" }],
		}),
		defineField({ name: "compatibilityBadge", title: "شارة التوافق", type: "string" }),
		defineField({ name: "compatibilityTitle", title: "عنوان التوافق", type: "string" }),
		defineField({ name: "compatibilityHighlight", title: "الكلمة المميزة للتوافق", type: "string" }),
		defineField({ name: "compatibilityDescription", title: "وصف التوافق", type: "text", rows: 2 }),
		defineField({ name: "workWithTitle", title: "عنوان أشتغل مع", type: "string" }),
		defineField({
			name: "workWith",
			title: "أشتغل مع",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({ name: "dontWorkWithTitle", title: "عنوان ما أشتغل مع", type: "string" }),
		defineField({
			name: "dontWorkWith",
			title: "ما أشتغل مع",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({ name: "ctaHeading", title: "عنوان CTA", type: "string" }),
		defineField({ name: "ctaDescription", title: "وصف CTA", type: "text", rows: 2 }),
		defineField({ name: "ctaText", title: "نص زر CTA", type: "string" }),
	],
	preview: {
		prepare() {
			return { title: "عني (About)" };
		},
	},
});
