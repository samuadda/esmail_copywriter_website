import { defineType, defineField } from "sanity";

export default defineType({
	name: "processSection",
	title: "خطوات العمل (Process)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({ name: "title", title: "العنوان", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
		defineField({
			name: "steps",
			title: "الخطوات",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({ name: "number", title: "الرقم", type: "string" }),
						defineField({ name: "title", title: "العنوان", type: "string" }),
						defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
					],
					preview: {
						select: { title: "title", subtitle: "number" },
					},
				},
			],
		}),
	],
	preview: {
		prepare() {
			return { title: "خطوات العمل (Process)" };
		},
	},
});
