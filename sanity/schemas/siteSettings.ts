import { defineType, defineField } from "sanity";

export default defineType({
	name: "siteSettings",
	title: "إعدادات الموقع",
	type: "document",
	fields: [
		defineField({ name: "brandName", title: "اسم العلامة", type: "string" }),
		defineField({ name: "brandTagline", title: "الوصف المختصر", type: "string" }),
		defineField({
			name: "footerDescription",
			title: "وصف الفوتر",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "ctaLabel",
			title: "زر CTA — النص",
			type: "string",
		}),
		defineField({
			name: "ctaHref",
			title: "زر CTA — الرابط",
			type: "string",
		}),
		defineField({
			name: "socialLinks",
			title: "روابط التواصل الاجتماعي",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({ name: "name", title: "الاسم", type: "string" }),
						defineField({ name: "href", title: "الرابط", type: "url" }),
					],
					preview: {
						select: { title: "name", subtitle: "href" },
					},
				},
			],
		}),
		defineField({
			name: "newsletterTitle",
			title: "النشرة — العنوان",
			type: "string",
		}),
		defineField({
			name: "newsletterDescription",
			title: "النشرة — الوصف",
			type: "string",
		}),
		defineField({ name: "copyright", title: "حقوق النشر", type: "string" }),
		defineField({ name: "signature", title: "التوقيع", type: "string" }),
		// ── Newsletter Component Fields ────────────────────────────────
		defineField({ name: "newsletterHeading", title: "عنوان النشرة (المكون)", type: "string" }),
		defineField({ name: "newsletterHighlight", title: "الكلمة المميزة للنشرة", type: "string" }),
		defineField({ name: "newsletterBody", title: "نص النشرة (المكون)", type: "text", rows: 3 }),
		defineField({ name: "newsletterPlaceholder", title: "نص الحقل", type: "string" }),
		defineField({ name: "newsletterEmptyError", title: "خطأ: حقل فارغ", type: "string" }),
		defineField({ name: "newsletterInvalidError", title: "خطأ: بريد غير صحيح", type: "string" }),
		defineField({ name: "newsletterSuccess", title: "رسالة النجاح", type: "string" }),
		defineField({ name: "newsletterPrivacy", title: "نص الخصوصية", type: "string" }),
	],
	preview: {
		prepare() {
			return { title: "إعدادات الموقع" };
		},
	},
});
