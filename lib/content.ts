/**
 * Content Constants Layer
 *
 * This file centralizes all user-facing content to make the project CMS-ready.
 * When integrating with a CMS (Sanity, Contentful, etc.), replace these constants
 * with API calls or static imports from CMS-generated files.
 *
 * All content is separated from presentation logic.
 */

// Navigation Content
export const NAV_CONTENT = {
	brand: {
		name: "إسماعيل إبراهيم",
		tagline: "كاتب محتوى إبداعي",
		logo: "/logo.svg",
	},
	links: [
		{ href: "/about", label: "من أنا" },
		{ href: "/services", label: "الخدمات" },
		{ href: "/case-studies", label: "دراسات الحالة" },
		{ href: "/blog", label: "المدونة", isSpecial: true },
	],
	mobileLinks: [
		{ href: "/about", label: "من أنا" },
		{ href: "/services", label: "الخدمات" },
		{ href: "/case-studies", label: "دراسات الحالة" },
		{ href: "/blog", label: "المدونة", isSpecial: true },
		{ href: "/contact", label: "احجز استشارتك" },
	],
	cta: {
		label: "احجز استشارتك المجانية",
		href: "/contact",
	},
	ariaLabels: {
		themeToggle: "تبديل الوضع",
		mobileMenu: "فتح/إغلاق القائمة",
		closeMobileMenu: "إغلاق",
	},
} as const;

// Hero Section Content
export const HERO_CONTENT = {
	badge: "جاهز لصناعة الأثر",
	heading: {
		line1: "كلمات تُؤثر،",
		line2: "وقصص",
		highlight: "تُلهم",
	},
	description: {
		intro: "مرحباً، أنا",
		name: "إسماعيل إبراهيم",
		text: "كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس.",
		continuation:
			"أعمل مع العلامات التجارية الطموحة التي تريد بناء حضور مؤثر وتحقيق نتائج حقيقية من خلال الكتابة الاستراتيجية.",
	},
	cta: {
		primary: {
			label: "احجز استشارتك المجانية",
			href: "/contact",
		},
		secondary: {
			label: "شاهد أعمالي",
			href: "#portfolio",
		},
	},
	scrollIndicator: {
		label: "تعرف علي أكثر",
		href: "#about",
	},
	signature: "فاسعوا يكن آخر سعيكم زمزما",
} as const;

// Client Logos Section Content
export const CLIENT_LOGOS_CONTENT = {
	badge: "عملاء موثوق بهم",
	title: "علامات تجارية",
	highlight: "وثقت بي",
	description: "شركات رائدة من مختلف القطاعات اختارت الكلمة الصحيحة لتحقيق النتائج",
	brands: [
		{ name: "stc", sector: "اتصالات" },
		{ name: "نون", sector: "تجارة إلكترونية" },
		{ name: "جرير", sector: "تجزئة" },
		{ name: "مدى", sector: "مدفوعات" },
		{ name: "تمكين", sector: "استشارات" },
		{ name: "وطنية", sector: "طاقة" },
		{ name: "بنك الرياض", sector: "مصرفي" },
		{ name: "موفق", sector: "تقنية" },
		{ name: "ثقة", sector: "تسويق" },
		{ name: "مرشد", sector: "استثمار" },
	],
} as const;

// About Section Content
export const ABOUT_CONTENT = {
	badge: "من أنا",
	title: "قصتي مع",
	highlight: "الكلمات",
	paragraphs: [
		"للمرء نصيب من اسمه، فمنا من يحمل اسمه كهوية، ومنا من يستلهم منه طريقه. أما أنا، فقد أخذت من اسمي إسماعيل الإسماع، ومن إبراهيم الإبرام.",
		"أؤمن بأن الكلمات ليست مجرد حروف مرصوصة، بل هي جسور تربط بين الأفكار والمشاعر، وأدوات تحول الرؤى إلى واقع. كاتب محتوى إبداعي، أساعد قادة الفكر وأصحاب الرؤى على التواصل مع جمهورهم بطريقة تلامس القلوب وتحقق الأثر.",
		"من خلال خبرتي في صناعة المحتوى، تعلمت أن كل مشروع هو قصة فريدة تحتاج إلى صوت خاص. سواء كنت تبحث عن محتوى يبني الثقة، أو قصة تلهم، أو رسالة تترك أثراً - أنا هنا لأحول أفكارك إلى كلمات تصنع الفرق.",
	],
	qualityBadge: {
		title: "جودة مضمونة",
		description: "التزام كامل بالتميز والاحترافية",
	},
	stats: [
		{ value: "+5", label: "سنوات خبرة" },
		{ value: "+100", label: "مشروع مكتمل" },
		{ value: "+50", label: "عميل راضٍ" },
		{ value: "100%", label: "نسبة الجودة" },
	],
	signature: "فاسعوا يكن آخر سعيكم زمزما",
} as const;

// Services Content - 3 Core Offers
export const SERVICES_CONTENT = {
	badge: "العروض",
	title: "ما الذي",
	highlight: "أقدمه؟",
	description: "ثلاثة عروض أساسية مصممة لحل تحدياتك في المحتوى والرسالة",
	primaryCta: {
		label: "احجز استشارتك المجانية",
		href: "/contact",
	},
	offers: [
		{
			id: 1,
			title: "Strategy Sprint",
			subtitle: "سباق استراتيجي",
			type: "one-off",
			description: "جلسة استراتيجية مركزة لتصحيح الرسالة وتحديد الأولويات",
			color: "from-[#f44674] to-[#fd2862]",
			forWho: "للمشاريع التي تحتاج إلى وضوح في الرسالة والأولويات",
			deliverables: [
				"تحليل شامل للرسالة الحالية",
				"استراتيجية محتوى واضحة",
				"خطة عمل قابلة للتنفيذ",
				"توصيات محددة للتحسين"
			],
			duration: "جلسة واحدة (2-3 ساعات)",
			startingFrom: "ابتداءً من 5,000 ريال",
		},
		{
			id: 2,
			title: "Advisory",
			subtitle: "استشارة مستمرة",
			type: "one-off-or-retainer",
			description: "استشارة استراتيجية مستمرة مع خيارات إدارة المحتوى",
			color: "from-[#4ADE80] to-[#22c55e]",
			forWho: "للمشاريع التي تحتاج إلى إشراف مستمر وتوجيه استراتيجي",
			deliverables: [
				"استشارة استراتيجية (جلسة واحدة أو شهرية)",
				"مراجعة وتوجيه للمحتوى",
				"تقويم محتوى وأولويات (في باقة الإدارة)",
				"تنسيق النشر وضمان الجودة (في باقة الإدارة)"
			],
			subPaths: [
				{
					name: "Content Supervision",
					description: "مراجعة وتوجيه وتقويم محتوى"
				},
				{
					name: "Content Activation/Management",
					description: "تقويم + ضمان الجودة + تنسيق النشر"
				}
			],
			duration: "جلسة واحدة أو اشتراك شهري",
			startingFrom: "ابتداءً من 3,000 ريال (جلسة) / 8,000 ريال (شهري)",
		},
		{
			id: 3,
			title: "Story Factory",
			subtitle: "مصنع القصص",
			type: "one-off-or-package",
			description: "سكربتات فيديو احترافية مع Hook وCTA مصممة للبيع",
			color: "from-purple-500 to-blue-500",
			forWho: "للمشاريع التي تحتاج إلى محتوى فيديو يبيع",
			deliverables: [
				"سكربت فيديو 60-90 ثانية",
				"Hook جذاب",
				"CTA واضح ومؤثر",
				"خيار: باقة شهرية (عدة سكربتات)"
			],
			duration: "سكربت واحد أو باقة شهرية",
			startingFrom: "ابتداءً من 2,500 ريال (سكربت) / 6,000 ريال (باقة شهرية)",
		},
	],
} as const;

// Footer Content
export const FOOTER_CONTENT = {
	brand: {
		name: "إسماعيل إبراهيم",
		tagline: "كاتب محتوى إبداعي",
		description:
			"كلمات تبيع، وقصص تُلهم. أحول أفكارك إلى محتوى يؤثر ويحقق النتائج. دعنا نصنع الفرق معاً.",
	},
	navigation: [
		{ name: "الرئيسية", href: "/" },
		{ name: "من أنا", href: "#about" },
		{ name: "الخدمات", href: "#services" },
		{ name: "الأعمال", href: "#portfolio" },
	],
	support: [
		{ name: "المهارات", href: "#skills" },
		{ name: "كيف أعمل", href: "#process" },
		{ name: "آراء العملاء", href: "#testimonials" },
		{ name: "احجز استشارتك", href: "/contact" },
	],
	social: [
		{ name: "تويتر", href: "https://x.com/esm2il1", color: "hover:text-[#1DA1F2]" },
		{ name: "لينكدإن", href: "https://www.linkedin.com/in/esm2il/", color: "hover:text-[#0077B5]" },
		{ name: "إنستغرام", href: "https://www.instagram.com/esm2il/", color: "hover:text-[#E4405F]" },
	],
	newsletter: {
		title: "اشترك في النشرة البريدية",
		description: "احصل على نصائح وأفكار حول كتابة المحتوى مباشرة في بريدك",
		placeholder: "بريدك الإلكتروني",
		button: "اشترك",
	},
	sections: {
		navigation: "التنقل",
		more: "المزيد",
	},
	copyright: `© ${new Date().getFullYear()} إسماعيل إبراهيم. جميع الحقوق محفوظة.`,
	signature: "فاسعوا يكن آخر سعيكم زمزما",
} as const;

// Contact Content - Booking Only
export const CONTACT_CONTENT = {
	badge: "احجز استشارتك المجانية",
	title: "احجز",
	highlight: "استشارتك المجانية",
	description: "مكالمة قصيرة للتعارف وتشخيص المشكلة وتحديد العرض الأنسب.",
	methods: [], // Removed - booking only
	form: {
		name: {
			label: "الاسم",
			placeholder: "كيف تفضل أن أناديك؟",
			error: "نحتاج اسمك لنبدأ",
		},
		email: {
			label: "البريد الإلكتروني",
			placeholder: "example@email.com",
			error: "نحتاج بريدك الإلكتروني للتواصل",
			errorInvalid: "يبدو أن البريد الإلكتروني غير صحيح",
		},
		phone: {
			label: "الهاتف / الواتساب",
			placeholder: "+966 50 123 4567",
			error: "",
		},
		additionalInfo: {
			title: "معلومات إضافية (اختياري)",
			description:
				"شاركني هذه التفاصيل لتحديد العرض المناسب لمشروعك.",
			type: {
				label: "النوع",
				options: [
					{ value: "", label: "اختر النوع" },
					{ value: "business", label: "جهة" },
					{ value: "personal-brand", label: "علامة شخصية" },
				],
			},
			mainProblem: {
				label: "المشكلة الرئيسية (اختر 1-2)",
				options: [
					{ value: "weak-sales", label: "مبيعات/طلبات ضعيفة رغم المحتوى" },
					{ value: "unclear-message", label: "الرسالة غير واضحة (وش نقدم؟ وليه نحن؟)" },
					{ value: "no-impact", label: "محتوى كثير بدون أثر" },
					{ value: "weak-conversion", label: "ضعف التحويل في الموقع/الصفحات" },
					{ value: "video-scripts", label: "نبي سكربتات/محتوى فيديو يبيع" },
					{ value: "content-management", label: "نبي ترتيب التسويق بالمحتوى (تقويم/أولويات/تنفيذ)" },
				],
			},
			challengeLocation: {
				label: "أين يظهر التحدي؟",
				options: [
					{ value: "website", label: "الموقع/صفحة هبوط" },
					{ value: "social", label: "السوشال" },
					{ value: "ads", label: "الإعلانات" },
					{ value: "email", label: "البريد" },
					{ value: "video", label: "الفيديو" },
				],
			},
			link: {
				label: "رابط واحد (موقع/حساب/منتج)",
				placeholder: "https://...",
			},
			timeline: {
				label: "الجدول الزمني المتوقع",
				options: [
					{ value: "", label: "اختر الجدول الزمني" },
					{ value: "urgent", label: "عاجل (أقل من أسبوع)" },
					{ value: "1-2-weeks", label: "1-2 أسبوع" },
					{ value: "1-month", label: "شهر واحد" },
					{ value: "2-3-months", label: "2-3 أشهر" },
					{ value: "flexible", label: "مرن" },
				],
			},
		},
		submit: "احجز استشارتك المجانية",
		success: "شكراً لك! تم إرسال رسالتك بنجاح 🎉",
		signature: "فاسعوا يكن آخر سعيكم زمزما",
	},
} as const;

// Blog Content
export const BLOG_CONTENT = {
	badge: "المدونة",
	title: "أفكار",
	highlight: "وخواطر",
	description:
		"مساحتي الخاصة لمشاركة الخبرات، الأفكار، وما تعلمته في رحلة الكتابة والتسويق.",
	search: {
		placeholder: "ابحث...",
	},
	empty: {
		title: "لا توجد نتائج",
		message: "جرب البحث بكلمة مختلفة أو تغيير التصنيف.",
		clearFilters: "مسح الفلاتر",
	},
	related: {
		title: "اقرأ أيضاً",
	},
} as const;

// Case Studies Content
export const CASE_STUDIES_CONTENT = {
	badge: "دراسات الحالة",
	title: "نتائج",
	highlight: "تتحدث عن نفسها",
	description:
		"كيف ساعدت العلامات التجارية على تحقيق أهدافها من خلال الكتابة الاستراتيجية. دراسات حالة مفصلة عن الاستراتيجيات والنتائج.",
	cta: {
		title: "هل تريد نتائج مشابهة؟",
		description:
			"دعنا نعمل معاً لتحويل علامتك التجارية من خلال الكلمات الاستراتيجية.",
		label: "احجز استشارتك المجانية",
		href: "/contact",
	},
	readMore: "اقرأ التفاصيل",
	anonymized: "(مجهول)",
} as const;

// Services Page Content
export const SERVICES_PAGE_CONTENT = {
	badge: "ماذا أقدم؟",
	title: "خدمات",
	highlight: "احترافية",
	description:
		"حلول كتابة استراتيجية مصممة لتعزيز وعي جمهورك وبناء علامتك الشخصية على المدى الطويل.",
	pricing: {
		title: "هل تبحث عن باقة مخصصة؟",
		description:
			"كل مشروع فريد من نوعه. تواصل معي لنناقش احتياجاتك ونبني استراتيجية تناسب ميزانيتك وأهدافك.",
		cta: "احجز استشارتك المجانية",
		href: "/contact",
	},
} as const;

// Contact Page Content - Booking Only
export const CONTACT_PAGE_CONTENT = {
	badge: "احجز استشارتك المجانية",
	title: "احجز",
	highlight: "استشارتك المجانية",
	description: "مكالمة قصيرة للتعارف وتشخيص المشكلة وتحديد العرض الأنسب.",
	info: {
		hours: {
			title: "ساعات العمل",
			value: "الأحد - الخميس: 9ص - 5م",
		},
	},
	faq: {
		title: "أسئلة شائعة",
		items: [
			{
				question: "كم يستغرق تسليم المشروع؟",
				answer: "يعتمد ذلك على حجم المشروع. عادة ما تستغرق صفحات الهبوط 3-5 أيام، بينما قد تستغرق المشاريع الكبيرة أسبوعين أو أكثر.",
			},
			{
				question: "هل تقدم تعديلات على النصوص؟",
				answer: "نعم، أقدم جولتين من التعديلات المجانية لضمان رضاك التام عن النتيجة النهائية.",
			},
			{
				question: "ما هي طرق الدفع المتاحة؟",
				answer: "أقبل التحويلات البنكية، بايبال (PayPal)، وInstapay.",
			},
		],
	},
} as const;

// Sticky CTA Content
export const STICKY_CTA_CONTENT = {
	title: "جاهز لبدء مشروعك؟",
	description: "احجز استشارة مجانية الآن",
	button: "احجز استشارتك المجانية",
	close: "إغلاق",
} as const;

// Common UI Text
export const UI_TEXT = {
	readMore: "اقرأ المزيد",
	readTime: (minutes: number) => `${minutes} دقيقة قراءة`,
	likes: (count: number) => `${count} إعجاب`,
	comments: (count: number) => `${count} تعليق`,
	share: "مشاركة",
	back: "العودة",
	loading: "جاري التحميل...",
	error: "حدث خطأ",
	retry: "إعادة المحاولة",
} as const;
