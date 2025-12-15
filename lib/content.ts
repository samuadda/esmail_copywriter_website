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
		{ href: "/contact", label: "تواصل معنا" },
	],
	cta: {
		label: "ابدأ الآن",
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
			label: "لنصنع الأثر",
			href: "#contact",
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

// Services Content
export const SERVICES_CONTENT = {
	badge: "الخدمات",
	title: "ما الذي",
	highlight: "أقدمه؟",
	description: "حلول كتابية متكاملة تعزز حضورك الرقمي وتبني علامتك الشخصية",
	cta: {
		label: "ابنِ علامتك الآن",
		href: "#contact",
	},
	items: [
		{
			id: 1,
			title: "كتابة المحتوى الإبداعي",
			description:
				"محتوى متميز يعكس هوية علامتك التجارية ويجذب جمهورك المستهدف بأسلوب مبتكر ومؤثر.",
			color: "from-[#f44674] to-[#fd2862]",
		},
		{
			id: 2,
			title: "الكتابة الإعلانية",
			description:
				"نصوص مقنعة ترسخ مكانتك كقائد فكر، وتخلق تواصلاً حقيقياً مع جمهورك لبناء علاقة طويلة الأمد.",
			color: "from-[#4ADE80] to-[#22c55e]",
		},
		{
			id: 3,
			title: "كتابة المقالات",
			description:
				"مقالات احترافية ومتخصصة تثري المحتوى الرقمي وتعزز من مصداقية علامتك التجارية.",
			color: "from-purple-500 to-blue-500",
		},
		{
			id: 4,
			title: "السيناريو والسكريبت",
			description:
				"كتابة سيناريوهات وسكريبتات مبتكرة للفيديوهات والمحتوى المرئي بأسلوب سلس ومشوق.",
			color: "from-orange-500 to-yellow-500",
		},
		{
			id: 5,
			title: "السوشيال ميديا",
			description:
				"محتوى سوشيال ميديا جذاب ومناسب لكل منصة، يزيد من التفاعل ويبني مجتمعاً حول علامتك.",
			color: "from-pink-500 to-rose-500",
		},
		{
			id: 6,
			title: "القصص والروايات",
			description:
				"سرد قصصي مميز يأسر القراء ويترك انطباعاً دائماً، سواء كان للعلامات التجارية أو المحتوى الأدبي.",
			color: "from-teal-500 to-cyan-500",
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
		{ name: "الرئيسية", href: "#" },
		{ name: "من أنا", href: "#about" },
		{ name: "الخدمات", href: "#services" },
		{ name: "الأعمال", href: "#portfolio" },
	],
	support: [
		{ name: "المهارات", href: "#skills" },
		{ name: "كيف أعمل", href: "#process" },
		{ name: "آراء العملاء", href: "#testimonials" },
		{ name: "تواصل معي", href: "#contact" },
	],
	social: [
		{ name: "تويتر", href: "#", color: "hover:text-[#1DA1F2]" },
		{ name: "لينكدإن", href: "#", color: "hover:text-[#0077B5]" },
		{ name: "إنستغرام", href: "#", color: "hover:text-[#E4405F]" },
		{ name: "بيهانس", href: "#", color: "hover:text-[#1769FF]" },
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

// Contact Content
export const CONTACT_CONTENT = {
	badge: "تواصل معي",
	title: "لنبدأ",
	highlight: "مشروعك",
	description: "هل لديك رؤية أو رسالة؟ دعنا نتحدث ونحولها إلى أثر",
	methods: [
		{
			id: 1,
			title: "البريد الإلكتروني",
			value: "ismail@example.com",
			link: "mailto:ismail@example.com",
		},
		{
			id: 2,
			title: "الهاتف",
			value: "+966 50 123 4567",
			link: "tel:+966501234567",
		},
		{
			id: 3,
			title: "واتساب",
			value: "تواصل معنا",
			link: "https://wa.me/966501234567",
		},
	],
	form: {
		name: {
			label: "الاسم",
			placeholder: "اسمك الكامل",
			error: "يرجى إدخال الاسم",
		},
		email: {
			label: "البريد الإلكتروني",
			placeholder: "your@email.com",
			error: "يرجى إدخال بريد إلكتروني صحيح",
			errorInvalid: "يرجى إدخال بريد إلكتروني صحيح",
		},
		subject: {
			label: "الموضوع",
			placeholder: "عنوان الرسالة",
			error: "يرجى إدخال الموضوع",
		},
		message: {
			label: "الرسالة",
			placeholder:
				"اكتب رسالتك هنا... أخبرني المزيد عن مشروعك واحتياجاتك.",
			error: "يرجى كتابة رسالتك",
		},
		additionalInfo: {
			title: "معلومات إضافية (اختياري)",
			description:
				"هذه المعلومات تساعدني على فهم احتياجاتك بشكل أفضل وتقديم عرض أكثر دقة.",
			goal: {
				label: "الهدف من المشروع",
				placeholder:
					"مثال: زيادة المبيعات، بناء العلامة التجارية، تحسين التحويل...",
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
			budget: {
				label: "الميزانية المتوقعة",
				options: [
					{ value: "", label: "اختر النطاق" },
					{ value: "under-5k", label: "أقل من 5,000 ريال" },
					{ value: "5k-10k", label: "5,000 - 10,000 ريال" },
					{ value: "10k-25k", label: "10,000 - 25,000 ريال" },
					{ value: "25k-50k", label: "25,000 - 50,000 ريال" },
					{ value: "50k-plus", label: "أكثر من 50,000 ريال" },
					{ value: "discuss", label: "أفضل مناقشة ذلك" },
				],
			},
		},
		submit: "إرسال الرسالة",
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
		label: "اطلب استشارة مجانية",
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
		cta: "استشرني الآن",
		href: "/contact",
	},
} as const;

// Contact Page Content
export const CONTACT_PAGE_CONTENT = {
	badge: "تواصل معي",
	title: "لنبدأ",
	highlight: "رحلة التأثير",
	description: "هل أنت مستعد لبناء حضورك الرقمي المؤثر؟ أنا هنا للمساعدة.",
	info: {
		email: {
			title: "البريد الإلكتروني",
			value: "contact@esmail.com",
		},
		hours: {
			title: "ساعات العمل",
			value: "الأحد - الخميس: 9ص - 5م",
		},
		location: {
			title: "الموقع",
			value: "القاهرة، مصر (متاح عن بعد)",
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
	button: "احجز الآن",
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
