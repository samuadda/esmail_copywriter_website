import { sanityClient } from "./sanity/client";
import {
	HERO_QUERY,
	ABOUT_QUERY,
	SERVICES_QUERY,
	CLIENT_LOGOS_QUERY,
	CONTACT_QUERY,
	SITE_SETTINGS_QUERY,
	PORTFOLIO_QUERY,
	PROCESS_QUERY,
	BEFORE_AFTER_QUERY,
	WRITING_PRINCIPLES_QUERY,
	CASE_STUDIES_PAGE_QUERY,
} from "./sanity/queries";
import {
	HERO_CONTENT,
	ABOUT_CONTENT,
	SERVICES_CONTENT,
	CLIENT_LOGOS_CONTENT,
	CONTACT_CONTENT,
	NAV_CONTENT,
	FOOTER_CONTENT,
} from "./content";

// ── Types ───────────────────────────────────────────────────────────────

type HeroContent = typeof HERO_CONTENT;
type AboutContent = typeof ABOUT_CONTENT;
type ServicesContent = typeof SERVICES_CONTENT;
type ClientLogosContent = typeof CLIENT_LOGOS_CONTENT;
type ContactContent = typeof CONTACT_CONTENT;

export interface SiteSettings {
	brandName: string;
	brandTagline: string;
	footerDescription: string;
	ctaLabel: string;
	ctaHref: string;
	socialLinks: { name: string; href: string }[];
	newsletterTitle: string;
	newsletterDescription: string;
	copyright: string;
	signature: string;
}

// ── Helpers ─────────────────────────────────────────────────────────────

function sanityHeroToContent(data: Record<string, unknown>): HeroContent {
	return {
		badge: (data.badge as string) || HERO_CONTENT.badge,
		heading: {
			line1: (data.headingLine1 as string) || HERO_CONTENT.heading.line1,
			line2: (data.headingLine2 as string) || HERO_CONTENT.heading.line2,
			highlight: (data.headingHighlight as string) || HERO_CONTENT.heading.highlight,
		},
		description: {
			intro: (data.descriptionIntro as string) || HERO_CONTENT.description.intro,
			name: (data.descriptionName as string) || HERO_CONTENT.description.name,
			text: (data.descriptionText as string) || HERO_CONTENT.description.text,
			continuation: (data.descriptionContinuation as string) || HERO_CONTENT.description.continuation,
		},
		cta: {
			primary: {
				label: (data.primaryCtaLabel as string) || HERO_CONTENT.cta.primary.label,
				href: (data.primaryCtaHref as string) || HERO_CONTENT.cta.primary.href,
			},
			secondary: {
				label: (data.secondaryCtaLabel as string) || HERO_CONTENT.cta.secondary.label,
				href: (data.secondaryCtaHref as string) || HERO_CONTENT.cta.secondary.href,
			},
		},
		scrollIndicator: {
			label: (data.scrollIndicatorLabel as string) || HERO_CONTENT.scrollIndicator.label,
			href: HERO_CONTENT.scrollIndicator.href,
		},
		signature: (data.signature as string) || HERO_CONTENT.signature,
	} as unknown as HeroContent;
}

function sanityAboutToContent(data: Record<string, unknown>): AboutContent {
	return {
		badge: (data.badge as string) || ABOUT_CONTENT.badge,
		title: (data.title as string) || ABOUT_CONTENT.title,
		highlight: (data.highlight as string) || ABOUT_CONTENT.highlight,
		paragraphs: (data.paragraphs as string[]) || [...ABOUT_CONTENT.paragraphs],
		qualityBadge: {
			title: (data.qualityBadgeTitle as string) || ABOUT_CONTENT.qualityBadge.title,
			description: (data.qualityBadgeDescription as string) || ABOUT_CONTENT.qualityBadge.description,
		},
		stats: (data.stats as { value: string; label: string }[]) || [...ABOUT_CONTENT.stats],
		signature: (data.signature as string) || ABOUT_CONTENT.signature,
	} as unknown as AboutContent;
}

function sanityServicesToContent(data: Record<string, unknown>): ServicesContent {
	return {
		badge: (data.badge as string) || SERVICES_CONTENT.badge,
		title: (data.title as string) || SERVICES_CONTENT.title,
		highlight: (data.highlight as string) || SERVICES_CONTENT.highlight,
		description: (data.description as string) || SERVICES_CONTENT.description,
		primaryCta: {
			label: (data.primaryCtaLabel as string) || SERVICES_CONTENT.primaryCta.label,
			href: (data.primaryCtaHref as string) || SERVICES_CONTENT.primaryCta.href,
		},
		offers: (data.offers as ServicesContent["offers"]) || [...SERVICES_CONTENT.offers],
	} as unknown as ServicesContent;
}

function sanityClientLogosToContent(data: Record<string, unknown>): ClientLogosContent {
	return {
		badge: (data.badge as string) || CLIENT_LOGOS_CONTENT.badge,
		title: (data.title as string) || CLIENT_LOGOS_CONTENT.title,
		highlight: (data.highlight as string) || CLIENT_LOGOS_CONTENT.highlight,
		description: (data.description as string) || CLIENT_LOGOS_CONTENT.description,
		brands: (data.brands as ClientLogosContent["brands"]) || [...CLIENT_LOGOS_CONTENT.brands],
	} as unknown as ClientLogosContent;
}

function sanityContactToContent(data: Record<string, unknown>): ContactContent {
	// Only override the editable text fields; keep form structure from code
	const base = { ...CONTACT_CONTENT } as unknown as Record<string, unknown>;
	return {
		...base,
		badge: (data.badge as string) || CONTACT_CONTENT.badge,
		title: (data.title as string) || CONTACT_CONTENT.title,
		highlight: (data.highlight as string) || CONTACT_CONTENT.highlight,
		description: (data.description as string) || CONTACT_CONTENT.description,
		form: {
			...CONTACT_CONTENT.form,
			submit: (data.submitLabel as string) || CONTACT_CONTENT.form.submit,
			success: (data.successMessage as string) || CONTACT_CONTENT.form.success,
			signature: (data.signature as string) || CONTACT_CONTENT.form.signature,
		},
	} as unknown as ContactContent;
}

// ── Public API ──────────────────────────────────────────────────────────

export async function getHeroContent(): Promise<HeroContent> {
	try {
		const data = await sanityClient.fetch(HERO_QUERY);
		if (data) return sanityHeroToContent(data);
		return HERO_CONTENT;
	} catch {
		return HERO_CONTENT;
	}
}

export async function getAboutContent(): Promise<AboutContent> {
	try {
		const data = await sanityClient.fetch(ABOUT_QUERY);
		if (data) return sanityAboutToContent(data);
		return ABOUT_CONTENT;
	} catch {
		return ABOUT_CONTENT;
	}
}

export async function getServicesContent(): Promise<ServicesContent> {
	try {
		const data = await sanityClient.fetch(SERVICES_QUERY);
		if (data) return sanityServicesToContent(data);
		return SERVICES_CONTENT;
	} catch {
		return SERVICES_CONTENT;
	}
}

export async function getClientLogosContent(): Promise<ClientLogosContent> {
	try {
		const data = await sanityClient.fetch(CLIENT_LOGOS_QUERY);
		if (data) return sanityClientLogosToContent(data);
		return CLIENT_LOGOS_CONTENT;
	} catch {
		return CLIENT_LOGOS_CONTENT;
	}
}

export async function getContactContent(): Promise<ContactContent> {
	try {
		const data = await sanityClient.fetch(CONTACT_QUERY);
		if (data) return sanityContactToContent(data);
		return CONTACT_CONTENT;
	} catch {
		return CONTACT_CONTENT;
	}
}

export async function getSiteSettings(): Promise<SiteSettings> {
	try {
		const data = await sanityClient.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY);
		if (data) return data;
	} catch {
		// fall through
	}
	// Fallback: merge NAV_CONTENT + FOOTER_CONTENT
	return {
		brandName: NAV_CONTENT.brand.name,
		brandTagline: NAV_CONTENT.brand.tagline,
		footerDescription: FOOTER_CONTENT.brand.description,
		ctaLabel: NAV_CONTENT.cta.label,
		ctaHref: NAV_CONTENT.cta.href,
		socialLinks: FOOTER_CONTENT.social.map((s) => ({ name: s.name, href: s.href })),
		newsletterTitle: FOOTER_CONTENT.newsletter.title,
		newsletterDescription: FOOTER_CONTENT.newsletter.description,
		copyright: FOOTER_CONTENT.copyright,
		signature: FOOTER_CONTENT.signature,
	};
}

// ── New Section Types ────────────────────────────────────────────────

export interface PortfolioContent {
	badge: string;
	title: string;
	highlight: string;
	description: string;
	categories: string[];
	projects: {
		title: string;
		category: string;
		description: string;
		videoUrl?: string;
		tikTokId?: string;
		imageUrl?: string;
		stats: { label: string; value: string }[];
	}[];
}

export interface ProcessContent {
	badge: string;
	title: string;
	highlight: string;
	description: string;
	steps: { number: string; title: string; description: string }[];
}

export interface BeforeAfterContent {
	badge: string;
	title: string;
	highlight: string;
	description: string;
	comparisons: {
		category: string;
		beforeTitle: string;
		beforeText: string;
		afterTitle: string;
		afterText: string;
	}[];
}

export interface WritingPrinciplesContent {
	badge: string;
	title: string;
	highlight: string;
	description: string;
	principles: { iconName: string; title: string; description: string }[];
}

export interface CaseStudiesPageContent {
	badge: string;
	title: string;
	highlight: string;
	description: string;
	ctaHeading: string;
	ctaDescription: string;
	ctaText: string;
	previewBadge: string;
	previewTitle: string;
	previewHighlight: string;
	previewDescription: string;
	previewCtaText: string;
}

export interface ServicesTeaserContent {
	heading: string;
	cards: { title: string; desc: string; icon: string }[];
	ctaText: string;
}

export interface NewsletterContent {
	heading: string;
	highlight: string;
	body: string;
	placeholder: string;
	emptyError: string;
	invalidError: string;
	success: string;
	privacy: string;
}

export interface AboutPageContent {
	pageBadge: string;
	pageTitle: string;
	pageHighlight: string;
	pageDescription: string;
	philosophyTitle: string;
	philosophyParagraphs: string[];
	compatibilityBadge: string;
	compatibilityTitle: string;
	compatibilityHighlight: string;
	compatibilityDescription: string;
	workWithTitle: string;
	workWith: string[];
	dontWorkWithTitle: string;
	dontWorkWith: string[];
	ctaHeading: string;
	ctaDescription: string;
	ctaText: string;
}

export interface ContactPageContent {
	pageBadge: string;
	pageTitle: string;
	pageHighlight: string;
	pageDescription: string;
	faqTitle: string;
	faqItems: { question: string; answer: string }[];
}

// ── Fallback Constants ───────────────────────────────────────────────

const PORTFOLIO_FALLBACK: PortfolioContent = {
	badge: "الأعمال",
	title: "مشاريع",
	highlight: "ملهمة",
	description: "نماذج من أعمالي التي صنعت فرقاً وحققت نتائج استثنائية",
	categories: ["الكل", "محتوى إبداعي", "إعلانات"],
	projects: [
		{ title: "حد المدينة زمان", category: "محتوى إبداعي", description: "قصة إبداعية تأخذك في رحلة عبر الزمن لاستكشاف حدود المدينة القديمة.", videoUrl: "https://www.instagram.com/reel/C06GH1qMVQw/embed", stats: [{ label: "views", value: "High" }, { label: "engagement", value: "Strong" }] },
		{ title: "ظاهرة سنوية : شارعين في اتجاه واحد", category: "محتوى إبداعي", description: "تغطية إبداعية لظاهرة سنوية فريدة، بأسلوب قصصي مشوق.", videoUrl: "https://www.instagram.com/reel/C8bp-O1sko3/embed", stats: [{ label: "views", value: "Trending" }, { label: "shares", value: "Viral" }] },
		{ title: "مايحتاج تسلف خويك", category: "محتوى إبداعي", description: "فيديو إبداعي لشركة التقنية المالية MoneyMoon حول التمويل المصغر.", videoUrl: "https://www.instagram.com/reel/DOrPu4UDTqF/embed", stats: [{ label: "views", value: "Popular" }, { label: "likes", value: "High" }] },
		{ title: "كيف تزيد مبيعاتك مع مرن", category: "إعلانات", description: "فيديو إعلاني لشركة مرن لأنظمة نقاط البيع يوضح استراتيجيات زيادة المبيعات.", videoUrl: "https://www.instagram.com/reel/DSQJCVjDZdd/embed", stats: [{ label: "views", value: "Targeted" }, { label: "conversion", value: "High" }] },
		{ title: "كيف تختار المؤثر المناسب؟", category: "إعلانات", description: "إعلان غير مباشر لشركة مرن يقدم نصائح حول اختيار المؤثرين للحملات التسويقية.", videoUrl: "https://www.instagram.com/reel/DLnnn5BP0cI/embed", stats: [{ label: "views", value: "Engaging" }, { label: "shares", value: "High" }] },
		{ title: "أهم 5 نقاط لمقهى ناجح", category: "إعلانات", description: "فيديو تثقيفي لشركة مرن يستعرض أساسيات نجاح المقاهي والمطاعم.", videoUrl: "https://www.instagram.com/reel/DNBM4OwtwSY/embed", stats: [{ label: "views", value: "Informative" }, { label: "saves", value: "High" }] },
	],
};

const PROCESS_FALLBACK: ProcessContent = {
	badge: "كيف أعمل",
	title: "رحلة",
	highlight: "الإبداع",
	description: "عملية منظمة تضمن جودة استثنائية في كل مشروع",
	steps: [
		{ number: "01", title: "الاستماع والفهم", description: "نبدأ بفهم عميق لعلامتك التجارية، أهدافك، وجمهورك المستهدف لنضع أساساً قوياً للمحتوى." },
		{ number: "02", title: "البحث والتخطيط", description: "نقوم بدراسة شاملة للسوق والمنافسين، ونضع استراتيجية محتوى متكاملة تحقق أهدافك." },
		{ number: "03", title: "الكتابة الإبداعية", description: "نبدع في صياغة محتوى فريد يعكس هويتك، يجذب جمهورك، ويحقق أهدافك التسويقية." },
		{ number: "04", title: "المراجعة والتحسين", description: "نراجع المحتوى بدقة ونجري التعديلات اللازمة لضمان جودة استثنائية ونتائج مثالية." },
	],
};

const BEFORE_AFTER_FALLBACK: BeforeAfterContent = {
	badge: "التحول",
	title: "قبل",
	highlight: "وبعد",
	description: "شاهد كيف يتحول الكلام العادي إلى آلة بيع لا تتوقف. هذا تحسين للرسالة وليس مجرد إعادة صياغة.",
	comparisons: [
		{ category: "إعلان سوشيال ميديا", beforeTitle: "نسخة عادية", beforeText: "نحن نقدم أفضل خدمات التسويق الإلكتروني. اتصل بنا الآن للحصول على عرض سعر. لدينا خبرة كبيرة ونضمن لك النتائج.", afterTitle: "نسخة النخبة", afterText: "ضاعف مبيعاتك في 30 يوماً أو استرد مالك بالكامل. استراتيجية تسويقية مجربة استخدمها أكثر من 50 عميل لكسر حاجز المليون." },
		{ category: "صفحة هبوط", beforeTitle: "عنوان تقليدي", beforeText: "تعلم البرمجة معنا في دورتنا الجديدة. محتوى جيد ومدربين ممتازين.", afterTitle: "عنوان لا يُقاوم", afterText: "كيف تصبح مطور برمجيات مطلوباً في 3 أشهر فقط... حتى لو لم تكن تجيد الرياضيات!" },
	],
};

const WRITING_PRINCIPLES_FALLBACK: WritingPrinciplesContent = {
	badge: "مبادئي",
	title: "فلسفة",
	highlight: "الكتابة",
	description: "المبادئ التي أؤمن بها وأطبقها في كل مشروع. ليست قواعد جامدة، بل إرشادات تساعدني على كتابة محتوى يحول.",
	principles: [
		{ iconName: "target", title: "الوضوح قبل الجمال", description: "الكلمات الجميلة لا قيمة لها إذا لم تكن واضحة. أبدأ بالوضوح، ثم أضف الجمال." },
		{ iconName: "heart", title: "الفهم قبل الكتابة", description: "لا يمكنك كتابة رسالة مؤثرة دون فهم عميق لجمهورك، مخاوفهم، أحلامهم، وما يحفزهم." },
		{ iconName: "zap", title: "النتيجة قبل الإبداع", description: "الإبداع أداة، وليس هدفاً. كل كلمة يجب أن تخدم هدفاً واضحاً: التحويل، البناء، أو التأثير." },
		{ iconName: "award", title: "المصداقية قبل المبيعات", description: "المصداقية تُبنى على المدى الطويل. لا أبيع منتجاً، أبني علاقة ثقة تدوم." },
	],
};

const CASE_STUDIES_PAGE_FALLBACK: CaseStudiesPageContent = {
	badge: "دراسات الحالة",
	title: "نتائج",
	highlight: "تتحدث عن نفسها",
	description: "كيف ساعدت العلامات التجارية على تحقيق أهدافها من خلال الكتابة الاستراتيجية. دراسات حالة مفصلة عن الاستراتيجيات والنتائج.",
	ctaHeading: "هل تريد نتائج مشابهة؟",
	ctaDescription: "دعنا نعمل معاً لتحويل علامتك التجارية من خلال الكلمات الاستراتيجية.",
	ctaText: "احجز استشارتك المجانية",
	previewBadge: "دراسات الحالة",
	previewTitle: "نتائج",
	previewHighlight: "مثبتة",
	previewDescription: "كيف ساعدت العلامات التجارية على تحقيق أهدافها من خلال الكتابة الاستراتيجية. دراسات حالة حقيقية عن الاستراتيجيات والنتائج.",
	previewCtaText: "شاهد كل دراسات الحالة",
};

const SERVICES_TEASER_FALLBACK: ServicesTeaserContent = {
	heading: "كيف يمكنني مساعدتك؟",
	cards: [
		{ title: "رسائل مؤثرة", desc: "نصوص تصنع الوعي وتبني الثقة مع جمهورك.", icon: "/gradient-01.png" },
		{ title: "صفحات تعريفية", desc: "تصميم وتأليف صفحات تعرض قيمتك وتجذب جمهورك المثالي.", icon: "/gradient-04.png" },
		{ title: "استراتيجية المحتوى", desc: "خطط محتوى طويلة الأمد تبني جمهوراً مخلصاً.", icon: "/gradient-02.png" },
	],
	ctaText: "اكتشف كل خدماتي",
};

const NEWSLETTER_FALLBACK: NewsletterContent = {
	heading: "نشرة بريدية",
	highlight: "مختلفة",
	body: "انضم لقائمتي الخاصة حيث أشارك أسرار الكتابة، قصص ملهمة، وتجارب شخصية لا أنشرها في أي مكان آخر. بلا إزعاج، رسالة واحدة أسبوعياً مليئة بالقيمة.",
	placeholder: "بريدك الإلكتروني",
	emptyError: "يرجى إدخال البريد الإلكتروني",
	invalidError: "يرجى إدخال بريد إلكتروني صحيح",
	success: "تم الاشتراك بنجاح! تفقد بريدك الإلكتروني قريباً.",
	privacy: "أحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.",
};

const ABOUT_PAGE_FALLBACK: AboutPageContent = {
	pageBadge: "قصتي",
	pageTitle: "من هو",
	pageHighlight: "إسماعيل؟",
	pageDescription: "أكثر من مجرد كاتب. أنا مهندس كلمات، ومصمم تجارب، وشريك في نجاحك.",
	philosophyTitle: "فلسفتي في الكتابة",
	philosophyParagraphs: [
		"أؤمن أن الناس لا يشترون \"المنتجات\"، بل يشترون \"تحولاً\" في حياتهم.",
		"لذلك، لا أكتب نصوصاً تصف المنتج فحسب، بل أرسم صورة للمستقبل الذي سيحصل عليه العميل بعد استخدام المنتج.",
		"أمزج بين علم النفس السلوكي و فن السرد القصصي لخلق نصوص لا يمكن تجاهلها.",
	],
	compatibilityBadge: "التوافق",
	compatibilityTitle: "أشتغل مع",
	compatibilityHighlight: "/ ما أشتغل مع",
	compatibilityDescription: "فلترة عالية الجودة لضمان أفضل النتائج للجميع",
	workWithTitle: "أشتغل مع",
	workWith: [
		"العلامات التجارية الطموحة التي تريد بناء حضور مؤثر",
		"قادة الفكر وأصحاب الرؤى الذين يبحثون عن التأثير الحقيقي",
		"المشاريع التي تقدر الجودة والاستراتيجية",
		"العلامات التي تريد نتائج قابلة للقياس",
	],
	dontWorkWithTitle: "ما أشتغل مع",
	dontWorkWith: [
		"المشاريع التي تبحث عن \"أرخص سعر\" فقط",
		"المحتوى الذي يهدف للخداع أو التضليل",
		"المشاريع التي لا تحترم الوقت والجودة",
		"العملاء الذين يريدون \"محتوى سريع\" بدون استراتيجية",
	],
	ctaHeading: "هل أنت مستعد لبدء مشروعك؟",
	ctaDescription: "أفضل طريقة للبدء هي حجز مكالمة استشارة. دعنا نتحدث ونحول رؤيتك إلى أثر حقيقي من خلال الكلمات الاستراتيجية.",
	ctaText: "احجز استشارتك المجانية",
};

const CONTACT_PAGE_FALLBACK: ContactPageContent = {
	pageBadge: "احجز استشارتك المجانية",
	pageTitle: "احجز",
	pageHighlight: "استشارتك المجانية",
	pageDescription: "مكالمة قصيرة للتعارف وتشخيص المشكلة وتحديد العرض الأنسب.",
	faqTitle: "أسئلة شائعة",
	faqItems: [
		{ question: "كم يستغرق تسليم المشروع؟", answer: "يعتمد ذلك على حجم المشروع. عادة ما تستغرق صفحات الهبوط 3-5 أيام، بينما قد تستغرق المشاريع الكبيرة أسبوعين أو أكثر." },
		{ question: "هل تقدم تعديلات على النصوص؟", answer: "نعم، أقدم جولتين من التعديلات المجانية لضمان رضاك التام عن النتيجة النهائية." },
		{ question: "ما هي طرق الدفع المتاحة؟", answer: "أقبل التحويلات البنكية، بايبال (PayPal)، وInstapay." },
	],
};

// ── New Fetchers ─────────────────────────────────────────────────────

export async function getPortfolioContent(): Promise<PortfolioContent> {
	try {
		const data = await sanityClient.fetch<PortfolioContent | null>(PORTFOLIO_QUERY);
		if (data) return { ...PORTFOLIO_FALLBACK, ...data };
		return PORTFOLIO_FALLBACK;
	} catch {
		return PORTFOLIO_FALLBACK;
	}
}

export async function getProcessContent(): Promise<ProcessContent> {
	try {
		const data = await sanityClient.fetch<ProcessContent | null>(PROCESS_QUERY);
		if (data) return { ...PROCESS_FALLBACK, ...data };
		return PROCESS_FALLBACK;
	} catch {
		return PROCESS_FALLBACK;
	}
}

export async function getBeforeAfterContent(): Promise<BeforeAfterContent> {
	try {
		const data = await sanityClient.fetch<BeforeAfterContent | null>(BEFORE_AFTER_QUERY);
		if (data) return { ...BEFORE_AFTER_FALLBACK, ...data };
		return BEFORE_AFTER_FALLBACK;
	} catch {
		return BEFORE_AFTER_FALLBACK;
	}
}

export async function getWritingPrinciplesContent(): Promise<WritingPrinciplesContent> {
	try {
		const data = await sanityClient.fetch<WritingPrinciplesContent | null>(WRITING_PRINCIPLES_QUERY);
		if (data) return { ...WRITING_PRINCIPLES_FALLBACK, ...data };
		return WRITING_PRINCIPLES_FALLBACK;
	} catch {
		return WRITING_PRINCIPLES_FALLBACK;
	}
}

export async function getCaseStudiesPageContent(): Promise<CaseStudiesPageContent> {
	try {
		const data = await sanityClient.fetch<CaseStudiesPageContent | null>(CASE_STUDIES_PAGE_QUERY);
		if (data) return { ...CASE_STUDIES_PAGE_FALLBACK, ...data };
		return CASE_STUDIES_PAGE_FALLBACK;
	} catch {
		return CASE_STUDIES_PAGE_FALLBACK;
	}
}

export async function getServicesTeaserContent(): Promise<ServicesTeaserContent> {
	try {
		const data = await sanityClient.fetch<Record<string, unknown> | null>(SERVICES_QUERY);
		if (data?.teaserHeading) {
			// Derive cards from offers if teaserCards is missing
			let cards = data.teaserCards as ServicesTeaserContent["cards"] | undefined;
			if (!cards && Array.isArray(data.offers)) {
				const icons = ["/gradient-01.png", "/gradient-04.png", "/gradient-02.png"];
				cards = (data.offers as Array<{ title?: string; subtitle?: string; description?: string }>)
					.slice(0, 3)
					.map((offer, i) => ({
						title: `${offer.title || ""}${offer.subtitle ? `\n${offer.subtitle}` : ""}`,
						desc: offer.description || "",
						icon: icons[i] || "",
					}));
			}
			return {
				heading: (data.teaserHeading as string) || SERVICES_TEASER_FALLBACK.heading,
				cards: cards || SERVICES_TEASER_FALLBACK.cards,
				ctaText: (data.teaserCtaText as string) || SERVICES_TEASER_FALLBACK.ctaText,
			};
		}
		return SERVICES_TEASER_FALLBACK;
	} catch {
		return SERVICES_TEASER_FALLBACK;
	}
}

export async function getNewsletterContent(): Promise<NewsletterContent> {
	try {
		const data = await sanityClient.fetch<Record<string, unknown> | null>(SITE_SETTINGS_QUERY);
		if (data?.newsletterHeading) {
			return {
				heading: (data.newsletterHeading as string) || NEWSLETTER_FALLBACK.heading,
				highlight: (data.newsletterHighlight as string) || NEWSLETTER_FALLBACK.highlight,
				body: (data.newsletterBody as string) || NEWSLETTER_FALLBACK.body,
				placeholder: (data.newsletterPlaceholder as string) || NEWSLETTER_FALLBACK.placeholder,
				emptyError: (data.newsletterEmptyError as string) || NEWSLETTER_FALLBACK.emptyError,
				invalidError: (data.newsletterInvalidError as string) || NEWSLETTER_FALLBACK.invalidError,
				success: (data.newsletterSuccess as string) || NEWSLETTER_FALLBACK.success,
				privacy: (data.newsletterPrivacy as string) || NEWSLETTER_FALLBACK.privacy,
			};
		}
		return NEWSLETTER_FALLBACK;
	} catch {
		return NEWSLETTER_FALLBACK;
	}
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
	try {
		const data = await sanityClient.fetch<Record<string, unknown> | null>(ABOUT_QUERY);
		if (data?.pageBadge) {
			return {
				pageBadge: (data.pageBadge as string) || ABOUT_PAGE_FALLBACK.pageBadge,
				pageTitle: (data.pageTitle as string) || ABOUT_PAGE_FALLBACK.pageTitle,
				pageHighlight: (data.pageHighlight as string) || ABOUT_PAGE_FALLBACK.pageHighlight,
				pageDescription: (data.pageDescription as string) || ABOUT_PAGE_FALLBACK.pageDescription,
				philosophyTitle: (data.philosophyTitle as string) || ABOUT_PAGE_FALLBACK.philosophyTitle,
				philosophyParagraphs: (data.philosophyParagraphs as string[]) || ABOUT_PAGE_FALLBACK.philosophyParagraphs,
				compatibilityBadge: (data.compatibilityBadge as string) || ABOUT_PAGE_FALLBACK.compatibilityBadge,
				compatibilityTitle: (data.compatibilityTitle as string) || ABOUT_PAGE_FALLBACK.compatibilityTitle,
				compatibilityHighlight: (data.compatibilityHighlight as string) || ABOUT_PAGE_FALLBACK.compatibilityHighlight,
				compatibilityDescription: (data.compatibilityDescription as string) || ABOUT_PAGE_FALLBACK.compatibilityDescription,
				workWithTitle: (data.workWithTitle as string) || ABOUT_PAGE_FALLBACK.workWithTitle,
				workWith: (data.workWith as string[]) || ABOUT_PAGE_FALLBACK.workWith,
				dontWorkWithTitle: (data.dontWorkWithTitle as string) || ABOUT_PAGE_FALLBACK.dontWorkWithTitle,
				dontWorkWith: (data.dontWorkWith as string[]) || ABOUT_PAGE_FALLBACK.dontWorkWith,
				ctaHeading: (data.ctaHeading as string) || ABOUT_PAGE_FALLBACK.ctaHeading,
				ctaDescription: (data.ctaDescription as string) || ABOUT_PAGE_FALLBACK.ctaDescription,
				ctaText: (data.ctaText as string) || ABOUT_PAGE_FALLBACK.ctaText,
			};
		}
		return ABOUT_PAGE_FALLBACK;
	} catch {
		return ABOUT_PAGE_FALLBACK;
	}
}

export async function getContactPageContent(): Promise<ContactPageContent> {
	try {
		const data = await sanityClient.fetch<Record<string, unknown> | null>(CONTACT_QUERY);
		if (data?.pageBadge) {
			return {
				pageBadge: (data.pageBadge as string) || CONTACT_PAGE_FALLBACK.pageBadge,
				pageTitle: (data.pageTitle as string) || CONTACT_PAGE_FALLBACK.pageTitle,
				pageHighlight: (data.pageHighlight as string) || CONTACT_PAGE_FALLBACK.pageHighlight,
				pageDescription: (data.pageDescription as string) || CONTACT_PAGE_FALLBACK.pageDescription,
				faqTitle: (data.faqTitle as string) || CONTACT_PAGE_FALLBACK.faqTitle,
				faqItems: (data.faqItems as ContactPageContent["faqItems"]) || CONTACT_PAGE_FALLBACK.faqItems,
			};
		}
		return CONTACT_PAGE_FALLBACK;
	} catch {
		return CONTACT_PAGE_FALLBACK;
	}
}
