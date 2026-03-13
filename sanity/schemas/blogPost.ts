import { defineField, defineType } from "sanity";

export default defineType({
	name: "blogPost",
	title: "مقالة",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "العنوان",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "الرابط",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "category",
			title: "التصنيف",
			type: "string",
			options: {
				list: [
					{ title: "تحليلات النصوص", value: "copy-teardowns" },
					{ title: "الأطر والاستراتيجيات", value: "frameworks-strategy" },
					{ title: "القصص والمبادئ", value: "stories-principles" },
				],
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "excerpt",
			title: "المقتطف",
			type: "text",
			rows: 3,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "content",
			title: "المحتوى",
			type: "text",
			description: "محتوى HTML للمقالة",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "coverImage",
			title: "صورة الغلاف",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "date",
			title: "التاريخ",
			type: "date",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "readTime",
			title: "وقت القراءة (دقائق)",
			type: "number",
			validation: (Rule) => Rule.required().min(1),
		}),
		defineField({
			name: "tags",
			title: "الوسوم",
			type: "array",
			of: [{ type: "string" }],
			options: { layout: "tags" },
		}),
		defineField({
			name: "likes",
			title: "الإعجابات",
			type: "number",
			initialValue: 0,
		}),
		defineField({
			name: "comments",
			title: "التعليقات",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "author", title: "الكاتب", type: "string" },
						{ name: "avatar", title: "الصورة", type: "string" },
						{ name: "content", title: "المحتوى", type: "text" },
						{ name: "date", title: "التاريخ", type: "date" },
					],
				},
			],
		}),
		defineField({
			name: "authorName",
			title: "اسم الكاتب",
			type: "string",
			initialValue: "إسماعيل إبراهيم",
		}),
		defineField({
			name: "authorRole",
			title: "دور الكاتب",
			type: "string",
			initialValue: "كاتب محتوى إبداعي",
		}),
		defineField({
			name: "authorAvatar",
			title: "صورة الكاتب",
			type: "string",
			initialValue: "/avatar-1.webp",
		}),
		defineField({
			name: "relatedPostSlugs",
			title: "مقالات ذات صلة",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "type",
			title: "نوع المحتوى",
			type: "string",
			options: {
				list: [
					{ title: "مقال", value: "article" },
					{ title: "فيديو", value: "video" },
					{ title: "اقتباس", value: "quote" },
				],
			},
			initialValue: "article",
		}),
		defineField({
			name: "videoUrl",
			title: "رابط الفيديو",
			type: "url",
			hidden: ({ document }) => document?.type !== "video",
		}),
	],
	preview: {
		select: { title: "title", subtitle: "category", media: "coverImage" },
	},
});
