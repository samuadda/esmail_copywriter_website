import { defineField, defineType } from "sanity";

export default defineType({
	name: "caseStudy",
	title: "دراسة حالة",
	type: "document",
	fields: [
		defineField({
			name: "client",
			title: "العميل",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "الرابط",
			type: "slug",
			options: { source: "client", maxLength: 96 },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "industry",
			title: "القطاع",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "isAnonymized",
			title: "مجهول الهوية؟",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "goal",
			title: "الهدف",
			type: "text",
			rows: 2,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "offer",
			title: "نوع العرض",
			type: "string",
			options: {
				list: [
					{ title: "Strategy Sprint", value: "Strategy Sprint" },
					{ title: "Advisory", value: "Advisory" },
					{ title: "Story Factory", value: "Story Factory" },
				],
			},
		}),
		defineField({
			name: "role",
			title: "الدور",
			type: "string",
		}),
		defineField({
			name: "duration",
			title: "المدة",
			type: "string",
		}),
		defineField({
			name: "constraints",
			title: "القيود",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "whatWasDone",
			title: "ما تم إنجازه",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "deliverables",
			title: "المخرجات",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "copyExcerpts",
			title: "مقتطفات من النصوص",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "headline", title: "العنوان", type: "string" },
						{ name: "body", title: "النص", type: "text" },
						{ name: "cta", title: "CTA", type: "string" },
						{ name: "notes", title: "ملاحظات", type: "string" },
					],
				},
			],
		}),
		defineField({
			name: "results",
			title: "النتائج",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "type",
							title: "النوع",
							type: "string",
							options: {
								list: [
									{ title: "كمي", value: "quantitative" },
									{ title: "نوعي", value: "qualitative" },
								],
							},
						},
						{ name: "metric", title: "المقياس", type: "string" },
						{ name: "value", title: "القيمة", type: "string" },
						{ name: "description", title: "الوصف", type: "string" },
					],
				},
			],
		}),
		defineField({
			name: "topResults",
			title: "أبرز النتائج",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "coverImage",
			title: "صورة الغلاف",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "date",
			title: "التاريخ",
			type: "date",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "tags",
			title: "الوسوم",
			type: "array",
			of: [{ type: "string" }],
			options: { layout: "tags" },
		}),
	],
	preview: {
		select: { title: "client", subtitle: "industry", media: "coverImage" },
	},
});
