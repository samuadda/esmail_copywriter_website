import { defineType, defineField } from "sanity";

export default defineType({
	name: "writingPrinciplesSection",
	title: "مبادئ الكتابة (Writing Principles)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({ name: "title", title: "العنوان", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
		defineField({
			name: "principles",
			title: "المبادئ",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "iconName",
							title: "الأيقونة",
							type: "string",
							options: {
								list: [
									{ title: "هدف (Target)", value: "target" },
									{ title: "قلب (Heart)", value: "heart" },
									{ title: "برق (Zap)", value: "zap" },
									{ title: "جائزة (Award)", value: "award" },
									{ title: "نجمة (Star)", value: "star" },
									{ title: "درع (Shield)", value: "shield" },
								],
							},
						}),
						defineField({ name: "title", title: "العنوان", type: "string" }),
						defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
					],
					preview: {
						select: { title: "title", subtitle: "iconName" },
					},
				},
			],
		}),
	],
	preview: {
		prepare() {
			return { title: "مبادئ الكتابة (Writing Principles)" };
		},
	},
});
