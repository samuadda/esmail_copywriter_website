import { defineType, defineField } from "sanity";

export default defineType({
	name: "caseStudiesPageSection",
	title: "صفحة دراسات الحالة (Case Studies Page)",
	type: "document",
	fields: [
		// Page header (used on /case-studies page)
		defineField({ name: "badge", title: "شارة الصفحة", type: "string" }),
		defineField({ name: "title", title: "عنوان الصفحة", type: "string" }),
		defineField({ name: "highlight", title: "الكلمة المميزة", type: "string" }),
		defineField({ name: "description", title: "وصف الصفحة", type: "text", rows: 2 }),
		// CTA section
		defineField({ name: "ctaHeading", title: "عنوان CTA", type: "string" }),
		defineField({ name: "ctaDescription", title: "وصف CTA", type: "text", rows: 2 }),
		defineField({ name: "ctaText", title: "نص زر CTA", type: "string" }),
		// Homepage preview section
		defineField({ name: "previewBadge", title: "شارة المعاينة (الصفحة الرئيسية)", type: "string" }),
		defineField({ name: "previewTitle", title: "عنوان المعاينة", type: "string" }),
		defineField({ name: "previewHighlight", title: "الكلمة المميزة للمعاينة", type: "string" }),
		defineField({ name: "previewDescription", title: "وصف المعاينة", type: "text", rows: 2 }),
		defineField({ name: "previewCtaText", title: "نص زر المعاينة", type: "string" }),
	],
	preview: {
		prepare() {
			return { title: "صفحة دراسات الحالة (Case Studies Page)" };
		},
	},
});
