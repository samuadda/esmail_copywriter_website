import { defineType, defineField } from "sanity";

export default defineType({
	name: "clientLogosSection",
	title: "العملاء (Client Logos)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({ name: "title", title: "العنوان", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
		defineField({
			name: "brands",
			title: "العلامات التجارية",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({ name: "name", title: "الاسم", type: "string" }),
						defineField({ name: "sector", title: "القطاع", type: "string" }),
					],
					preview: {
						select: { title: "name", subtitle: "sector" },
					},
				},
			],
		}),
	],
	preview: {
		prepare() {
			return { title: "العملاء (Client Logos)" };
		},
	},
});
