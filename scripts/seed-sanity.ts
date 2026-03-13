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

// ── Singleton Page Content ──────────────────────────────────────────────

const heroSection = {
	_id: "heroSection",
	_type: "heroSection",
	badge: "جاهز لصناعة الأثر",
	headingLine1: "كلمات تُؤثر،",
	headingLine2: "وقصص",
	headingHighlight: "تُلهم",
	descriptionIntro: "مرحباً، أنا",
	descriptionName: "إسماعيل إبراهيم",
	descriptionText: "كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس.",
	descriptionContinuation: "أعمل مع العلامات التجارية الطموحة التي تريد بناء حضور مؤثر وتحقيق نتائج حقيقية من خلال الكتابة الاستراتيجية.",
	primaryCtaLabel: "احجز استشارتك المجانية",
	primaryCtaHref: "/contact",
	secondaryCtaLabel: "شاهد أعمالي",
	secondaryCtaHref: "#portfolio",
	scrollIndicatorLabel: "تعرف علي أكثر",
	signature: "فاسعوا يكن آخر سعيكم زمزما",
};

const aboutSection = {
	_id: "aboutSection",
	_type: "aboutSection",
	badge: "من أنا",
	title: "قصتي مع",
	highlight: "الكلمات",
	paragraphs: [
		"للمرء نصيب من اسمه، فمنا من يحمل اسمه كهوية، ومنا من يستلهم منه طريقه. أما أنا، فقد أخذت من اسمي إسماعيل الإسماع، ومن إبراهيم الإبرام.",
		"أؤمن بأن الكلمات ليست مجرد حروف مرصوصة، بل هي جسور تربط بين الأفكار والمشاعر، وأدوات تحول الرؤى إلى واقع. كاتب محتوى إبداعي، أساعد قادة الفكر وأصحاب الرؤى على التواصل مع جمهورهم بطريقة تلامس القلوب وتحقق الأثر.",
		"من خلال خبرتي في صناعة المحتوى، تعلمت أن كل مشروع هو قصة فريدة تحتاج إلى صوت خاص. سواء كنت تبحث عن محتوى يبني الثقة، أو قصة تلهم، أو رسالة تترك أثراً - أنا هنا لأحول أفكارك إلى كلمات تصنع الفرق.",
	],
	qualityBadgeTitle: "جودة مضمونة",
	qualityBadgeDescription: "التزام كامل بالتميز والاحترافية",
	stats: [
		{ value: "+5", label: "سنوات خبرة" },
		{ value: "+100", label: "مشروع مكتمل" },
		{ value: "+50", label: "عميل راضٍ" },
		{ value: "100%", label: "نسبة الجودة" },
	],
	signature: "فاسعوا يكن آخر سعيكم زمزما",
};

const servicesSection = {
	_id: "servicesSection",
	_type: "servicesSection",
	badge: "العروض",
	title: "ما الذي",
	highlight: "أقدمه؟",
	description: "ثلاثة عروض أساسية مصممة لحل تحدياتك في المحتوى والرسالة",
	primaryCtaLabel: "احجز استشارتك المجانية",
	primaryCtaHref: "/contact",
	offers: [
		{
			_key: "offer-1",
			title: "Strategy Sprint",
			subtitle: "سباق استراتيجي",
			type: "one-off",
			description: "جلسة استراتيجية مركزة لتصحيح الرسالة وتحديد الأولويات",
			forWho: "للمشاريع التي تحتاج إلى وضوح في الرسالة والأولويات",
			deliverables: ["تحليل شامل للرسالة الحالية", "استراتيجية محتوى واضحة", "خطة عمل قابلة للتنفيذ", "توصيات محددة للتحسين"],
			duration: "جلسة واحدة (2-3 ساعات)",
			startingFrom: "ابتداءً من 5,000 ريال",
		},
		{
			_key: "offer-2",
			title: "Advisory",
			subtitle: "استشارة مستمرة",
			type: "one-off-or-retainer",
			description: "استشارة استراتيجية مستمرة مع خيارات إدارة المحتوى",
			forWho: "للمشاريع التي تحتاج إلى إشراف مستمر وتوجيه استراتيجي",
			deliverables: ["استشارة استراتيجية (جلسة واحدة أو شهرية)", "مراجعة وتوجيه للمحتوى", "تقويم محتوى وأولويات (في باقة الإدارة)", "تنسيق النشر وضمان الجودة (في باقة الإدارة)"],
			subPaths: [
				{ _key: "sp-1", name: "Content Supervision", description: "مراجعة وتوجيه وتقويم محتوى" },
				{ _key: "sp-2", name: "Content Activation/Management", description: "تقويم + ضمان الجودة + تنسيق النشر" },
			],
			duration: "جلسة واحدة أو اشتراك شهري",
			startingFrom: "ابتداءً من 3,000 ريال (جلسة) / 8,000 ريال (شهري)",
		},
		{
			_key: "offer-3",
			title: "Story Factory",
			subtitle: "مصنع القصص",
			type: "one-off-or-package",
			description: "سكربتات فيديو احترافية مع Hook وCTA مصممة للبيع",
			forWho: "للمشاريع التي تحتاج إلى محتوى فيديو يبيع",
			deliverables: ["سكربت فيديو 60-90 ثانية", "Hook جذاب", "CTA واضح ومؤثر", "خيار: باقة شهرية (عدة سكربتات)"],
			duration: "سكربت واحد أو باقة شهرية",
			startingFrom: "ابتداءً من 2,500 ريال (سكربت) / 6,000 ريال (باقة شهرية)",
		},
	],
};

const clientLogosSection = {
	_id: "clientLogosSection",
	_type: "clientLogosSection",
	badge: "عملاء موثوق بهم",
	title: "علامات تجارية",
	highlight: "وثقت بي",
	description: "شركات رائدة من مختلف القطاعات اختارت الكلمة الصحيحة لتحقيق النتائج",
	brands: [
		{ _key: "b1", name: "stc", sector: "اتصالات" },
		{ _key: "b2", name: "نون", sector: "تجارة إلكترونية" },
		{ _key: "b3", name: "جرير", sector: "تجزئة" },
		{ _key: "b4", name: "مدى", sector: "مدفوعات" },
		{ _key: "b5", name: "تمكين", sector: "استشارات" },
		{ _key: "b6", name: "وطنية", sector: "طاقة" },
		{ _key: "b7", name: "بنك الرياض", sector: "مصرفي" },
		{ _key: "b8", name: "موفق", sector: "تقنية" },
		{ _key: "b9", name: "ثقة", sector: "تسويق" },
		{ _key: "b10", name: "مرشد", sector: "استثمار" },
	],
};

const contactSection = {
	_id: "contactSection",
	_type: "contactSection",
	badge: "احجز استشارتك المجانية",
	title: "احجز",
	highlight: "استشارتك المجانية",
	description: "مكالمة قصيرة للتعارف وتشخيص المشكلة وتحديد العرض الأنسب.",
	submitLabel: "احجز استشارتك المجانية",
	successMessage: "شكراً لك! تم إرسال رسالتك بنجاح 🎉",
	signature: "فاسعوا يكن آخر سعيكم زمزما",
};

const siteSettings = {
	_id: "siteSettings",
	_type: "siteSettings",
	brandName: "إسماعيل إبراهيم",
	brandTagline: "كاتب محتوى إبداعي",
	footerDescription: "كلمات تبيع، وقصص تُلهم. أحول أفكارك إلى محتوى يؤثر ويحقق النتائج. دعنا نصنع الفرق معاً.",
	ctaLabel: "احجز استشارتك المجانية",
	ctaHref: "/contact",
	socialLinks: [
		{ _key: "s1", name: "تويتر", href: "https://x.com/esm2il1" },
		{ _key: "s2", name: "لينكدإن", href: "https://www.linkedin.com/in/esm2il/" },
		{ _key: "s3", name: "إنستغرام", href: "https://www.instagram.com/esm2il/" },
	],
	newsletterTitle: "اشترك في النشرة البريدية",
	newsletterDescription: "احصل على نصائح وأفكار حول كتابة المحتوى مباشرة في بريدك",
	copyright: `© ${new Date().getFullYear()} إسماعيل إبراهيم. جميع الحقوق محفوظة.`,
	signature: "فاسعوا يكن آخر سعيكم زمزما",
};

// ── Seed ────────────────────────────────────────────────────────────────
async function seed() {
	console.log("🌱 Seeding Sanity...\n");

	const allDocs = [
		...blogPosts,
		...caseStudies,
		...testimonials,
		heroSection,
		aboutSection,
		servicesSection,
		clientLogosSection,
		contactSection,
		siteSettings,
	];

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
