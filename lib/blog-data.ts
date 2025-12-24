export type BlogCategory = "copy-teardowns" | "frameworks-strategy" | "stories-principles";

export interface Comment {
  id: string;
  author: string;
  avatar?: string;
  content: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: BlogCategory;
  title: string;
  content: string; // HTML allowed
  excerpt: string;
  coverImage?: string;
  date: string;
  readTime: number;
  tags: string[];
  likes: number;
  comments: Comment[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  // Internal linking support
  relatedPostSlugs?: string[];
  // Optional video support
  type?: "video" | "quote" | "article";
  videoUrl?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "headlines-that-sell",
    category: "frameworks-strategy",
    title: "كيف تكتب عنواناً يبيع من أول نظرة؟",
    excerpt: "العنوان هو أهم جزء في إعلانك. إذا لم ينجح العنوان في جذب الانتباه، فلن يقرأ أحد باقي النص مهما كان عبقرياً. إليك 5 صيغ مجربة.",
    content: `
      <p>هل تعلم أن 8 من كل 10 أشخاص يقرؤون العنوان فقط، بينما يقرأ 2 منهم فقط باقي المحتوى؟ هذا يعني أنك تخسر 80% من جمهورك إذا كان عنوانك ضعيفاً.</p>
      <h2>لماذا العنوان مهم جداً؟</h2>
      <p>العنوان هو "إعلان للإعلان". وظيفته الوحيدة هي إيقاف القارئ أثناء التصفح وإقناعه بقراءة الجملة الأولى من النص.</p>
      <h2>5 صيغ لكتابة عناوين قوية</h2>
      <ul>
        <li><strong>صيغة "كيف":</strong> "كيف تضاعف مبيعاتك في 30 يوماً؟"</li>
        <li><strong>صيغة "السر":</strong> "سر الكتابة الإعلانية الذي يخفيه المحترفون"</li>
        <li><strong>صيغة "قبل وبعد":</strong> "قبل أن تكتب إعلانك، اقرأ هذا"</li>
        <li><strong>صيغة "الأخطاء":</strong> "5 أخطاء قاتلة في كتابة العناوين"</li>
        <li><strong>صيغة "الأرقام":</strong> "10 عناوين حققت مليون مشاهدة"</li>
      </ul>
      <h2>الخلاصة</h2>
      <p>العنوان القوي ليس مجرد كلمات جميلة. إنه وعد واضح، فضول محفز، وقيمة ملموسة. ابدأ بهذه الصيغ وستلاحظ الفرق فوراً.</p>
    `,
    date: "2024-11-23",
    readTime: 5,
    tags: ["كتابة إعلانية", "تسويق", "عناوين", "إستراتيجية"],
    coverImage: "/gradient-01.png",
    likes: 124,
    comments: [
      { id: "c1", author: "أحمد محمد", content: "مقال رائع جداً! شكراً لك.", date: "2024-11-23" },
      { id: "c2", author: "سارة علي", content: "استفدت كثيراً من نقطة العناوين.", date: "2024-11-24" }
    ],
    author: {
      name: "إسماعيل إبراهيم",
      role: "كاتب محتوى إبداعي",
      avatar: "/avatar-1.png"
    },
    relatedPostSlugs: ["nike-copy-analysis"]
  },
  {
    id: "2",
    slug: "nike-copy-analysis",
    category: "copy-teardowns",
    title: "تحليل عميق: كيف استخدمت نايكي الكلمات لبناء إمبراطورية",
    excerpt: "تحليل تفصيلي لحملة نايكي الأخيرة: الكلمات التي استخدمتها، لماذا اختارتها، والنتائج التي حققتها. درس عملي في الكتابة الإعلانية الاستراتيجية.",
    content: `
      <h2>السياق</h2>
      <p>في عام 1988، أطلقت نايكي شعارها الأيقوني "Just Do It" - ثلاث كلمات بسيطة غيرت صناعة التسويق إلى الأبد.</p>
      <h2>التحليل</h2>
      <h3>1. البساطة القصوى</h3>
      <p>ثلاث كلمات فقط. لا تعقيد، لا زخرفة. رسالة واضحة ومباشرة.</p>
      <h3>2. الفعل بدلاً من الوصف</h3>
      <p>"Just Do It" - فعل أمر، دعوة للحركة. ليس "نحن الأفضل" بل "افعلها الآن".</p>
      <h3>3. الشمولية</h3>
      <p>الرسالة تناسب الجميع: الرياضي المحترف، المبتدئ، حتى من لا يمارس الرياضة. "افعلها" - أي شيء.</p>
      <h2>النتائج</h2>
      <p>من 800 مليون دولار مبيعات في 1988 إلى 37 مليار دولار في 2023. الكلمات، عندما تُكتب بحرفية، تصنع التاريخ.</p>
    `,
    date: "2024-11-22",
    readTime: 8,
    tags: ["تحليل", "نايكي", "براندينج", "كتابة إعلانية"],
    coverImage: "/gradient-02.png",
    likes: 450,
    comments: [],
    author: {
      name: "إسماعيل إبراهيم",
      role: "كاتب محتوى إبداعي",
      avatar: "/avatar-1.png"
    },
    relatedPostSlugs: ["headlines-that-sell"]
  },
  {
    id: "3",
    slug: "the-philosophy-of-words",
    category: "stories-principles",
    title: "فلسفة الكلمة: لماذا الكلمات أهم من المنتجات",
    excerpt: "قصة شخصية عن رحلتي في فهم قوة الكلمات. كيف تحولت من كاتب محتوى عادي إلى شخص يؤمن بأن الكلمات هي المنتج الحقيقي.",
    content: `
      <h2>البداية</h2>
      <p>كنت أعتقد أن وظيفتي هي "بيع المنتج". لكن بعد سنوات من التجربة، اكتشفت أنني كنت مخطئاً تماماً.</p>
      <h2>الاكتشاف</h2>
      <p>الناس لا يشترون المنتجات. الناس يشترون:</p>
      <ul>
        <li>حلولاً لمشاكلهم</li>
        <li>أحلامهم</li>
        <li>نسخاً أفضل من أنفسهم</li>
        <li>الانتماء لمجتمع</li>
      </ul>
      <h2>المبدأ</h2>
      <p>الكلمات هي الجسر بين المنتج والإنسان. عندما تكتب بحرفية، أنت لا تبيع منتجاً - أنت تبني علاقة.</p>
      <h2>الخلاصة</h2>
      <p>الكتابة الإعلانية ليست تلاعباً بالكلمات. إنها فهم عميق للنفس البشرية. عندما تعرف ما يخيف عميلك، وما يحلم به، وما يسهر بسببه في الليل، ستتمكن من كتابة رسالة تخترق ضجيج السوق وتصل مباشرة إلى قلبه وعقله.</p>
    `,
    date: "2024-11-20",
    readTime: 6,
    tags: ["فلسفة", "قصة شخصية", "مبادئ", "كتابة"],
    coverImage: "/gradient-04.png",
    likes: 89,
    comments: [
      { id: "c3", author: "خالد", content: "كلمات مؤثرة جداً، شكراً للمشاركة.", date: "2024-11-21" }
    ],
    author: {
      name: "إسماعيل إبراهيم",
      role: "كاتب محتوى إبداعي",
      avatar: "/avatar-1.png"
    }
  },
  {
    id: "4",
    slug: "aida-framework",
    category: "frameworks-strategy",
    title: "إطار AIDA: دليلك الشامل لكتابة إعلان يحول",
    excerpt: "إطار AIDA هو أحد أقدم وأقوى الأدوات في الكتابة الإعلانية. في هذا الدليل، سأريك كيف تستخدمه خطوة بخطوة لكتابة إعلانات تحول.",
    content: `
      <h2>ما هو إطار AIDA؟</h2>
      <p>AIDA هو اختصار لـ: Attention (الانتباه)، Interest (الاهتمام)، Desire (الرغبة)، Action (الإجراء).</p>
      <h2>الخطوة الأولى: الانتباه (Attention)</h2>
      <p>هدفك هنا بسيط: إيقاف القارئ. استخدم عنواناً صادماً، سؤالاً محفزاً، أو إحصائية غير متوقعة.</p>
      <h2>الخطوة الثانية: الاهتمام (Interest)</h2>
      <p>بعد أن جذبت انتباهه، حافظ عليه. اروِ قصة، اطرح مشكلة، أو اكشف عن سر.</p>
      <h2>الخطوة الثالثة: الرغبة (Desire)</h2>
      <p>هنا تتحول من "مشكلة" إلى "حل". اربط منتجك بحلمه، مشكلته، أو رغبته.</p>
      <h2>الخطوة الرابعة: الإجراء (Action)</h2>
      <p>دعوة واضحة للعمل. "اشتر الآن"، "احجز استشارة"، "حمّل مجاناً".</p>
      <h2>مثال عملي</h2>
      <p>دعني أريك كيف استخدمت AIDA في إعلان حقيقي حقق نتائج استثنائية...</p>
    `,
    date: "2024-11-15",
    readTime: 10,
    tags: ["إطار عمل", "AIDA", "استراتيجية", "كتابة إعلانية"],
    coverImage: "/gradient-05.png",
    likes: 210,
    comments: [],
    author: {
      name: "إسماعيل إبراهيم",
      role: "كاتب محتوى إبداعي",
      avatar: "/avatar-1.png"
    }
  }
];

export function getAllPosts() {
  return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, tags: string[], relatedSlugs?: string[]) {
  // First, try to get posts from relatedPostSlugs
  if (relatedSlugs && relatedSlugs.length > 0) {
    const related = BLOG_POSTS.filter(p => relatedSlugs.includes(p.slug));
    if (related.length > 0) return related.slice(0, 3);
  }
  // Fallback to tag-based matching
  return BLOG_POSTS.filter(p => p.slug !== currentSlug && p.tags.some(t => tags.includes(t))).slice(0, 3);
}

export function getPostsByCategory(category: BlogCategory | "all") {
  if (category === "all") return getAllPosts();
  return BLOG_POSTS.filter(post => post.category === category).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  "copy-teardowns": "تحليلات النصوص",
  "frameworks-strategy": "الأطر والاستراتيجيات",
  "stories-principles": "القصص والمبادئ"
};

