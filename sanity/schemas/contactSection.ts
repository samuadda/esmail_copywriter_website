import { defineType, defineField } from "sanity";

export default defineType({
	name: "contactSection",
	title: "التواصل (Contact)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({ name: "title", title: "العنوان", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({ name: "description", title: "الوصف", type: "text", rows: 2 }),
		defineField({ name: "submitLabel", title: "نص زر الإرسال", type: "string" }),
		defineField({ name: "successMessage", title: "رسالة النجاح", type: "string" }),
		defineField({ name: "signature", title: "التوقيع", type: "string" }),
		// ── Contact Page + FAQ Fields ──────────────────────────────────
		defineField({ name: "pageBadge", title: "شارة صفحة التواصل", type: "string" }),
		defineField({ name: "pageTitle", title: "عنوان صفحة التواصل", type: "string" }),
		defineField({ name: "pageHighlight", title: "الكلمة المميزة لصفحة التواصل", type: "string" }),
		defineField({ name: "pageDescription", title: "وصف صفحة التواصل", type: "text", rows: 2 }),
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
	],
	preview: {
		prepare() {
			return { title: "التواصل (Contact)" };
		},
	},
});
