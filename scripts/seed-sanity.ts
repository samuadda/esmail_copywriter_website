/**
 * One-time seed script — pushes fallback content to Sanity.
 *
 * Prerequisites:
 *   1. Create a Sanity project at https://sanity.io/manage
 *   2. Fill in NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN in .env.local
 *   3. Run: npx tsx scripts/seed-sanity.ts
 *
 * This script is idempotent — it uses _id based on slugs, so re-running
 * will update existing documents rather than creating duplicates.
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
	console.error(
		"❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local"
	);
	process.exit(1);
}

const client = createClient({
	projectId,
	dataset,
	token,
	apiVersion: "2024-01-01",
	useCdn: false,
});

// ── Blog Posts ──────────────────────────────────────────────────────────
const blogPosts = [
	{
		_id: "post-headlines-that-sell",
		_type: "blogPost",
		title: "كيف تكتب عنواناً يبيع من أول نظرة؟",
		slug: { _type: "slug", current: "headlines-that-sell" },
		category: "frameworks-strategy",
		excerpt:
			"العنوان هو أهم جزء في إعلانك. إذا لم ينجح العنوان في جذب الانتباه، فلن يقرأ أحد باقي النص مهما كان عبقرياً. إليك 5 صيغ مجربة.",
		content: "<p>هل تعلم أن 8 من كل 10 أشخاص يقرؤون العنوان فقط؟</p>",
		date: "2024-11-23",
		readTime: 5,
		tags: ["كتابة إعلانية", "تسويق", "عناوين", "إستراتيجية"],
		coverImage: "/gradient-01.png",
		likes: 124,
		authorName: "إسماعيل إبراهيم",
		authorRole: "كاتب محتوى إبداعي",
		authorAvatar: "/avatar-1.webp",
		relatedPostSlugs: ["nike-copy-analysis"],
	},
];

// ── Case Studies ────────────────────────────────────────────────────────
const caseStudies = [
	{
		_id: "case-luxury-brand",
		_type: "caseStudy",
		client: "علامة أزياء فاخرة",
		slug: { _type: "slug", current: "luxury-brand-relaunch" },
		industry: "أزياء وموضة",
		isAnonymized: true,
		goal: "إعادة إطلاق الهوية اللفظية للعلامة بعد تراجع المبيعات بنسبة 30%.",
		offer: "إعادة بناء الهوية اللفظية الكاملة",
		role: "كاتب محتوى استراتيجي رئيسي",
		duration: "3 أشهر",
		constraints: [
			"ميزانية محدودة للإعلانات المدفوعة",
			"الجمهور المستهدف يتراوح بين 25-40 سنة",
			"المنافسة شرسة في السوق المحلي",
		],
		whatWasDone: [
			"تحليل شامل للعلامة التجارية والمنافسين",
			"إعادة صياغة الرسالة الأساسية والقيم",
			"كتابة محتوى جميع نقاط الاتصال مع العميل",
			"تطوير دليل أسلوب الكتابة للعلامة",
		],
		deliverables: [
			"دليل الهوية اللفظية",
			"نصوص الموقع الإلكتروني",
			"قوالب البريد الإلكتروني",
			"نصوص وسائل التواصل الاجتماعي",
		],
		copyExcerpts: [
			{
				headline: "العنوان الرئيسي للموقع",
				body: "لأن الأناقة ليست ما ترتديه... بل كيف تُروى حكايتك.",
				notes: "استخدمنا أسلوب السرد القصصي لربط المنتج بالهوية الشخصية.",
			},
		],
		results: [
			{
				type: "quantitative",
				metric: "زيادة المبيعات",
				value: "+180%",
				description: "ارتفاع المبيعات خلال أول 3 أشهر من إعادة الإطلاق.",
			},
			{
				type: "quantitative",
				metric: "التفاعل على السوشيال ميديا",
				value: "+340%",
				description: "زيادة في معدل التفاعل على منصات التواصل الاجتماعي.",
			},
		],
		topResults: ["+180% مبيعات", "+340% تفاعل"],
		date: "2024-06-15",
		tags: ["أزياء", "هوية لفظية", "إعادة إطلاق"],
	},
];

// ── Testimonials ────────────────────────────────────────────────────────
const testimonials = [
	{
		_id: "testimonial-ahmed",
		_type: "testimonial",
		name: "أحمد المالكي",
		role: "مدير تسويق",
		company: "شركة النجاح التقني",
		content:
			"إسماعيل ليس مجرد كاتب محتوى، بل شريك استراتيجي فهم رؤيتنا وحولها إلى كلمات أثرت في جمهورنا وحققت نتائج مذهلة.",
		rating: 5,
		avatar: "👨‍💼",
		order: 1,
	},
	{
		_id: "testimonial-sara",
		_type: "testimonial",
		name: "سارة العتيبي",
		role: "مؤسسة",
		company: "براند للأزياء",
		content:
			"تعاملت مع عدة كتّاب من قبل، لكن إسماعيل متميز بأسلوبه الإبداعي وقدرته على فهم هوية العلامة التجارية. المحتوى الذي كتبه لنا زاد مبيعاتنا بنسبة 200%.",
		rating: 5,
		avatar: "👩‍💼",
		order: 2,
	},
	{
		_id: "testimonial-khaled",
		_type: "testimonial",
		name: "خالد السعيد",
		role: "مدير عام",
		company: "مؤسسة الإبداع",
		content:
			"جودة استثنائية في الكتابة، فهم عميق للسوق، وسرعة في التنفيذ. إسماعيل محترف حقيقي وأنصح به بشدة.",
		rating: 5,
		avatar: "🧑‍💼",
		order: 3,
	},
];

// ── Seed ────────────────────────────────────────────────────────────────
async function seed() {
	console.log("🌱 Seeding Sanity...\n");

	const allDocs = [...blogPosts, ...caseStudies, ...testimonials];

	for (const doc of allDocs) {
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			await client.createOrReplace(doc as any);
			console.log(`  ✅ ${doc._type}: ${doc._id}`);
		} catch (err) {
			console.error(`  ❌ ${doc._type}: ${doc._id}`, err);
		}
	}

	console.log(`\n✨ Done! Seeded ${allDocs.length} documents.`);
}

seed();
