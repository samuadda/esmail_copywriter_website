import { defineField, defineType } from "sanity";

export default defineType({
	name: "testimonial",
	title: "شهادة عميل",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "الاسم",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "role",
			title: "المنصب",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "company",
			title: "الشركة",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "content",
			title: "الشهادة",
			type: "text",
			rows: 4,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "rating",
			title: "التقييم",
			type: "number",
			validation: (Rule) => Rule.required().min(1).max(5),
			initialValue: 5,
		}),
		defineField({
			name: "avatar",
			title: "الرمز التعبيري",
			type: "string",
			description: "إيموجي يمثل العميل (مثل 👨‍💼)",
		}),
		defineField({
			name: "order",
			title: "الترتيب",
			type: "number",
			description: "رقم لتحديد ترتيب العرض",
		}),
	],
	preview: {
		select: { title: "name", subtitle: "company" },
	},
	orderings: [
		{
			title: "الترتيب",
			name: "orderAsc",
			by: [{ field: "order", direction: "asc" }],
		},
	],
});
