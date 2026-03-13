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
	],
	preview: {
		prepare() {
			return { title: "التواصل (Contact)" };
		},
	},
});
