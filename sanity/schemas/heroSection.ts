import { defineType, defineField } from "sanity";

export default defineType({
	name: "heroSection",
	title: "القسم الرئيسي (Hero)",
	type: "document",
	fields: [
		defineField({ name: "badge", title: "شارة", type: "string" }),
		defineField({
			name: "headingLine1",
			title: "العنوان — السطر الأول",
			type: "string",
		}),
		defineField({
			name: "headingLine2",
			title: "العنوان — السطر الثاني",
			type: "string",
		}),
		defineField({
			name: "headingHighlight",
			title: "العنوان — الكلمة المميزة",
			type: "string",
		}),
		defineField({
			name: "descriptionIntro",
			title: "المقدمة (مرحباً، أنا)",
			type: "string",
		}),
		defineField({
			name: "descriptionName",
			title: "الاسم",
			type: "string",
		}),
		defineField({
			name: "descriptionText",
			title: "وصف مختصر",
			type: "text",
			rows: 2,
		}),
		defineField({
			name: "descriptionContinuation",
			title: "تكملة الوصف",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "primaryCtaLabel",
			title: "زر رئيسي — النص",
			type: "string",
		}),
		defineField({
			name: "primaryCtaHref",
			title: "زر رئيسي — الرابط",
			type: "string",
		}),
		defineField({
			name: "secondaryCtaLabel",
			title: "زر ثانوي — النص",
			type: "string",
		}),
		defineField({
			name: "secondaryCtaHref",
			title: "زر ثانوي — الرابط",
			type: "string",
		}),
		defineField({
			name: "scrollIndicatorLabel",
			title: "مؤشر التمرير — النص",
			type: "string",
		}),
		defineField({
			name: "signature",
			title: "التوقيع",
			type: "string",
		}),
	],
	preview: {
		prepare() {
			return { title: "القسم الرئيسي (Hero)" };
		},
	},
});
