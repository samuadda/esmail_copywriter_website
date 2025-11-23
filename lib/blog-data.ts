export type PostType = "article" | "quote" | "video";

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
  type: PostType;
  title?: string; // Quotes might not have titles
  content: string; // HTML allowed
  excerpt?: string;
  coverImage?: string; // For articles/videos
  videoUrl?: string; // For videos
  date: string;
  readTime?: number;
  tags: string[];
  likes: number;
  comments: Comment[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "headlines-that-sell",
    type: "article",
    title: "كيف تكتب عنواناً يبيع من أول نظرة؟",
    excerpt: "العنوان هو أهم جزء في إعلانك. إذا لم ينجح العنوان في جذب الانتباه، فلن يقرأ أحد باقي النص مهما كان عبقرياً. إليك 5 صيغ مجربة.",
    content: `
      <p>هل تعلم أن 8 من كل 10 أشخاص يقرؤون العنوان فقط، بينما يقرأ 2 منهم فقط باقي المحتوى؟ هذا يعني أنك تخسر 80% من جمهورك إذا كان عنوانك ضعيفاً.</p>
      <h3>لماذا العنوان مهم جداً؟</h3>
      <p>العنوان هو "إعلان للإعلان". وظيفته الوحيدة هي إيقاف القارئ أثناء التصفح وإقناعه بقراءة الجملة الأولى من النص.</p>
      <h3>5 صيغ لكتابة عناوين قوية</h3>
      <ul>
        <li><strong>صيغة "كيف":</strong> "كيف تضاعف مبيعاتك في 30 يوماً؟"</li>
        <li><strong>صيغة "السر":</strong> "سر الكتابة الإعلانية الذي يخفيه المحترفون"</li>
      </ul>
    `,
    date: "2024-11-23",
    readTime: 5,
    tags: ["كتابة إعلانية", "تسويق", "عناوين"],
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
    }
  },
  {
    id: "2",
    slug: "marketing-quote-1",
    type: "quote",
    content: "الناس لا يشترون المنتجات، بل يشترون نسخاً أفضل من أنفسهم.",
    date: "2024-11-22",
    tags: ["اقتباس", "إلهام"],
    likes: 450,
    comments: [],
    author: {
      name: "إسماعيل إبراهيم",
      role: "كاتب محتوى إبداعي",
      avatar: "/avatar-1.png"
    }
  },
  {
    id: "3",
    slug: "video-analysis-nike",
    type: "video",
    title: "تحليل إعلان: استراتيجية نايكي في السرد القصصي",
    excerpt: "فيديو سريع أحلل فيه الاستراتيجية النفسية وراء إعلان نايكي الأخير وكيف استخدموا القصة لبناء الولاء.",
    content: `
      <p>في هذا الفيديو، نغوص في عمق الحملة الإعلانية الأخيرة لشركة Nike. سنرى كيف تجاوزوا مجرد بيع الأحذية لبيع "الحلم" و"الإنجاز".</p>
      <p>لاحظ كيف يستخدمون الموسيقى، زوايا التصوير، والتعليق الصوتي لخلق حالة شعورية محددة.</p>
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    coverImage: "/gradient-02.png",
    date: "2024-11-20",
    readTime: 12,
    tags: ["فيديو", "تحليل", "براندينج"],
    likes: 89,
    comments: [
      { id: "c3", author: "خالد", content: "تحليل عميق، استمر يا بطل!", date: "2024-11-21" }
    ],
    author: {
      name: "إسماعيل إبراهيم",
      role: "كاتب محتوى إبداعي",
      avatar: "/avatar-1.png"
    }
  },
  {
    id: "4",
    slug: "long-quote-writing",
    type: "quote",
    content: "الكتابة الإعلانية ليست مجرد تلاعب بالكلمات. إنها فهم عميق للنفس البشرية. عندما تعرف ما يخيف عميلك، وما يحلم به، وما يسهر بسببه في الليل، ستتمكن من كتابة رسالة تخترق ضجيج السوق وتصل مباشرة إلى قلبه وعقله. هذا هو الفرق بين الكاتب الهاوي والكاتب المحترف.",
    date: "2024-11-15",
    tags: ["خواطر", "كتابة"],
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

export function getRelatedPosts(currentSlug: string, tags: string[]) {
  return BLOG_POSTS.filter(p => p.slug !== currentSlug && p.tags.some(t => tags.includes(t))).slice(0, 3);
}

