import { defineType, defineField } from "sanity";

export default defineType({
	name: "beforeAfterSection",
	title: "قبل وبعد (Before & After)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({ name: "title", title: "العنوان", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
		defineField({
			name: "comparisons",
			title: "المقارنات",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({ name: "category", title: "التصنيف", type: "string" }),
						defineField({ name: "beforeTitle", title: "عنوان قبل", type: "string" }),
						defineField({ name: "beforeText", title: "نص قبل", type: "text", rows: 3 }),
						defineField({ name: "afterTitle", title: "عنوان بعد", type: "string" }),
						defineField({ name: "afterText", title: "نص بعد", type: "text", rows: 3 }),
					],
					preview: {
						select: { title: "category" },
					},
				},
			],
		}),
	],
	preview: {
		prepare() {
			return { title: "قبل وبعد (Before & After)" };
		},
	},
});
