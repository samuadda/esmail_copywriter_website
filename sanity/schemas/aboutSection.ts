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
	],
	preview: {
		prepare() {
			return { title: "عني (About)" };
		},
	},
});
