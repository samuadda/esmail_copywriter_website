import { defineType, defineField } from "sanity";

export default defineType({
	name: "portfolioSection",
	title: "معرض الأعمال (Portfolio)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({ name: "title", title: "العنوان", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
		defineField({
			name: "categories",
			title: "التصنيفات",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "projects",
			title: "المشاريع",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({ name: "title", title: "العنوان", type: "string" }),
						defineField({ name: "category", title: "التصنيف", type: "string" }),
						defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
						defineField({ name: "videoUrl", title: "رابط الفيديو (Instagram embed)", type: "url" }),
						defineField({ name: "tikTokId", title: "معرف تيك توك", type: "string" }),
						defineField({
							name: "image",
							title: "الصورة",
							type: "image",
							options: { hotspot: true },
						}),
						defineField({
							name: "stats",
							title: "الإحصائيات",
							type: "array",
							of: [
								{
									type: "object",
									fields: [
										defineField({ name: "label", title: "التسمية", type: "string" }),
										defineField({ name: "value", title: "القيمة", type: "string" }),
									],
									preview: {
										select: { title: "label", subtitle: "value" },
									},
								},
							],
						}),
					],
					preview: {
						select: { title: "title", subtitle: "category", media: "image" },
					},
				},
			],
		}),
	],
	preview: {
		prepare() {
			return { title: "معرض الأعمال (Portfolio)" };
		},
	},
});
