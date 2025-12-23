export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  isAnonymized?: boolean; // Allow anonymized case studies
  goal: string;
  constraints: string[];
  whatWasDone: string[];
  copyExcerpts: {
    headline?: string;
    body?: string;
    cta?: string;
    notes?: string;
  }[];
  results: {
    type: "quantitative" | "qualitative";
    metric?: string;
    value?: string;
    description: string;
  }[];
  coverImage?: string;
  date: string;
  tags: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    slug: "saas-platform-conversion",
    client: "منصة SaaS تقنية",
    industry: "التكنولوجيا",
    goal: "زيادة معدل التحويل من الزوار إلى عملاء مدفوعين بنسبة 40% خلال 3 أشهر",
    constraints: [
      "ميزانية محدودة للإعلانات",
      "عدم القدرة على تغيير تصميم الموقع بالكامل",
      "المنافسة الشديدة في السوق",
      "الحاجة لإقناع عملاء تقنيين متشككين"
    ],
    whatWasDone: [
      "إعادة كتابة صفحة الهبوط الرئيسية بالكامل مع التركيز على القيمة الملموسة",
      "إنشاء سلسلة من رسائل البريد الإلكتروني للتسويق بالذكاء",
      "كتابة محتوى مدونة استراتيجي لتحسين SEO",
      "تطوير نسخة إعلانية لـ Google Ads و LinkedIn Ads",
      "إنشاء دليل مجاني كـ lead magnet"
    ],
    copyExcerpts: [
      {
        headline: "العنوان الرئيسي الجديد",
        body: "من: 'منصة إدارة مشاريع متقدمة'\nإلى: 'أوقف الفوضى. ابدأ في إنجاز العمل الحقيقي.'",
        notes: "التحول من وصف المنتج إلى وعد بالنتيجة"
      },
      {
        headline: "CTA الرئيسي",
        body: "من: 'جرب مجاناً'\nإلى: 'ابدأ إنجاز عملك الحقيقي اليوم - مجاناً لمدة 14 يوماً'",
        notes: "CTA يربط بين الفعل والنتيجة المرجوة"
      },
      {
        headline: "رسالة بريد إلكتروني",
        body: "الموضوع: '3 طرق تستخدمها الشركات الناجحة لإدارة الفريق عن بُعد'\n\nالجسم: بدلاً من الحديث عن الميزات، ركزنا على المشاكل الحقيقية التي يواجهها العملاء وكيف تحلها المنصة.",
        notes: "التركيز على الفوائد بدلاً من الميزات"
      }
    ],
    results: [
      {
        type: "quantitative",
        metric: "معدل التحويل",
        value: "+47%",
        description: "زيادة في التحويل من الزوار إلى عملاء مدفوعين"
      },
      {
        type: "quantitative",
        metric: "تكلفة اكتساب العميل",
        value: "-32%",
        description: "انخفاض في CAC بسبب تحسين جودة الزيارات"
      },
      {
        type: "qualitative",
        description: "تحسن ملحوظ في جودة العملاء الجدد - عملاء أكثر التزاماً وأقل تسرباً"
      }
    ],
    coverImage: "/gradient-01.png",
    date: "2024-10-15",
    tags: ["SaaS", "تحويل", "كتابة إعلانية", "صفحات الهبوط"]
  },
  {
    id: "2",
    slug: "ecommerce-brand-story",
    client: "علامة أزياء فاخرة",
    industry: "التجارة الإلكترونية",
    isAnonymized: true,
    goal: "بناء هوية علامة تجارية قوية وزيادة المبيعات عبر الإنترنت بنسبة 60%",
    constraints: [
      "سوق مزدحم بالمنافسين",
      "عدم وجود تاريخ طويل للعلامة",
      "الحاجة لبناء ثقة مع عملاء جدد",
      "ميزانية تسويقية محدودة"
    ],
    whatWasDone: [
      "تطوير قصة العلامة التجارية من الصفر",
      "كتابة محتوى المنتجات بطريقة تحكي قصة",
      "إنشاء حملة سوشيال ميديا تركز على القيم وليس المنتجات",
      "كتابة سلسلة من المقالات عن الاستدامة والأخلاق في الموضة",
      "تطوير استراتيجية محتوى للبريد الإلكتروني"
    ],
    copyExcerpts: [
      {
        headline: "قصة العلامة التجارية",
        body: "'نحن لا نبيع ملابس. نبيع رؤية لعالم حيث الجمال والاستدامة يسيران جنباً إلى جنب. كل قطعة تحكي قصة - قصة عن الحرفيين الذين صنعوها، والمواد الطبيعية التي جاءت منها، والشخص الذي سيرتديها.'",
        notes: "التحول من بيع المنتج إلى بيع الرؤية والقيم"
      },
      {
        headline: "وصف المنتج",
        body: "من: 'قميص قطني 100%'\nإلى: 'قميص مصنوع يدوياً من قطن عضوي، كل خيط يحمل قصة الاستدامة والجودة. ارتدِه وكن جزءاً من حركة التغيير.'",
        notes: "تحويل المواصفات إلى قصة عاطفية"
      }
    ],
    results: [
      {
        type: "quantitative",
        metric: "المبيعات",
        value: "+68%",
        description: "زيادة في المبيعات عبر الإنترنت"
      },
      {
        type: "quantitative",
        metric: "متوسط قيمة الطلب",
        value: "+25%",
        description: "زيادة في AOV بسبب القيمة المدركة"
      },
      {
        type: "qualitative",
        description: "بناء مجتمع مخلص من العملاء الذين يؤمنون بقيم العلامة التجارية"
      }
    ],
    coverImage: "/gradient-02.png",
    date: "2024-09-20",
    tags: ["تجارة إلكترونية", "قصة العلامة", "براندينج", "محتوى"]
  },
  {
    id: "3",
    slug: "b2b-lead-generation",
    client: "شركة استشارات B2B",
    industry: "الاستشارات",
    goal: "زيادة عدد العملاء المحتملين المؤهلين بنسبة 200% من خلال المحتوى",
    constraints: [
      "دورة مبيعات طويلة (3-6 أشهر)",
      "الحاجة لعملاء عالي الجودة فقط",
      "ميزانية محدودة للإعلانات المدفوعة",
      "الاعتماد على التسويق بالمحتوى"
    ],
    whatWasDone: [
      "إنشاء استراتيجية محتوى شاملة تركز على حل مشاكل العملاء",
      "كتابة 12 مقالة متخصصة حول تحديات الصناعة",
      "تطوير 3 أدلة مجانية كـ lead magnets",
      "كتابة سلسلة من رسائل البريد الإلكتروني للتسويق بالذكاء",
      "إنشاء محتوى LinkedIn للتواصل مع صناع القرار"
    ],
    copyExcerpts: [
      {
        headline: "عنوان مقال",
        body: "'5 أخطاء قاتلة في إدارة سلسلة التوريد (وكيف تتجنبها)'",
        notes: "عنوان يعد بحل مشكلة محددة"
      },
      {
        headline: "رسالة LinkedIn",
        body: "'إذا كنت تواجه صعوبة في تنسيق الفرق عن بُعد، فأنت لست وحدك. في استشارتنا الأخيرة، ساعدنا شركة تضم 200 موظف على تحسين التواصل بنسبة 40%. إليك كيف فعلنا ذلك...'",
        notes: "مثال واقعي + دعوة للتفاعل"
      },
      {
        headline: "CTA في الدليل المجاني",
        body: "'هل تريد تطبيق هذه الاستراتيجيات على شركتك؟ احجز استشارة مجانية مدتها 30 دقيقة مع خبيرنا.'",
        notes: "CTA طبيعي بعد تقديم قيمة"
      }
    ],
    results: [
      {
        type: "quantitative",
        metric: "العملاء المحتملون",
        value: "+215%",
        description: "زيادة في عدد العملاء المحتملين المؤهلين"
      },
      {
        type: "quantitative",
        metric: "معدل التحويل من Lead إلى عميل",
        value: "+18%",
        description: "تحسن في جودة العملاء المحتملين"
      },
      {
        type: "qualitative",
        description: "بناء سمعة كخبير في المجال ومرجع موثوق في الصناعة"
      }
    ],
    coverImage: "/gradient-04.png",
    date: "2024-08-10",
    tags: ["B2B", "تسويق بالمحتوى", "Lead Generation", "استشارات"]
  }
];

export function getAllCaseStudies() {
  return CASE_STUDIES.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find(cs => cs.slug === slug);
}

export function getRelatedCaseStudies(currentSlug: string, tags: string[]) {
  return CASE_STUDIES
    .filter(cs => cs.slug !== currentSlug && cs.tags.some(t => tags.includes(t)))
    .slice(0, 3);
}


