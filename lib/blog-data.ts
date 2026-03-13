import { sanityClient } from "./sanity/client";
import {
	ALL_POSTS_QUERY,
	POST_BY_SLUG_QUERY,
	POSTS_BY_CATEGORY_QUERY,
} from "./sanity/queries";

export type BlogCategory =
	| "copy-teardowns"
	| "frameworks-strategy"
	| "stories-principles";

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
	content: string;
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
	relatedPostSlugs?: string[];
	type?: "video" | "quote" | "article";
	videoUrl?: string;
}

// ── Fallback data (used when Sanity is unavailable) ─────────────────────
const FALLBACK_POSTS: BlogPost[] = [
	{
		id: "1",
		slug: "headlines-that-sell",
		category: "frameworks-strategy",
		title: "كيف تكتب عنواناً يبيع من أول نظرة؟",
		excerpt:
			"العنوان هو أهم جزء في إعلانك. إذا لم ينجح العنوان في جذب الانتباه، فلن يقرأ أحد باقي النص مهما كان عبقرياً. إليك 5 صيغ مجربة.",
		content: `<p>هل تعلم أن 8 من كل 10 أشخاص يقرؤون العنوان فقط؟</p>`,
		date: "2024-11-23",
		readTime: 5,
		tags: ["كتابة إعلانية", "تسويق", "عناوين", "إستراتيجية"],
		coverImage: "/gradient-01.png",
		likes: 124,
		comments: [],
		author: {
			name: "إسماعيل إبراهيم",
			role: "كاتب محتوى إبداعي",
			avatar: "/avatar-1.webp",
		},
		relatedPostSlugs: ["nike-copy-analysis"],
	},
];

// ── Async data functions ────────────────────────────────────────────────

export async function getAllPosts(): Promise<BlogPost[]> {
	try {
		const posts = await sanityClient.fetch<BlogPost[]>(ALL_POSTS_QUERY);
		if (posts && posts.length > 0) return posts;
		return FALLBACK_POSTS;
	} catch {
		return FALLBACK_POSTS;
	}
}

export async function getPostBySlug(
	slug: string
): Promise<BlogPost | undefined> {
	try {
		const post = await sanityClient.fetch<BlogPost | null>(
			POST_BY_SLUG_QUERY,
			{ slug }
		);
		if (post) return post;
		return FALLBACK_POSTS.find((p) => p.slug === slug);
	} catch {
		return FALLBACK_POSTS.find((p) => p.slug === slug);
	}
}

export async function getRelatedPosts(
	currentSlug: string,
	tags: string[],
	relatedSlugs?: string[]
): Promise<BlogPost[]> {
	const allPosts = await getAllPosts();
	if (relatedSlugs && relatedSlugs.length > 0) {
		const related = allPosts.filter((p) => relatedSlugs.includes(p.slug));
		if (related.length > 0) return related.slice(0, 3);
	}
	return allPosts
		.filter(
			(p) => p.slug !== currentSlug && p.tags.some((t) => tags.includes(t))
		)
		.slice(0, 3);
}

export async function getPostsByCategory(
	category: BlogCategory | "all"
): Promise<BlogPost[]> {
	if (category === "all") return getAllPosts();
	try {
		const posts = await sanityClient.fetch<BlogPost[]>(
			POSTS_BY_CATEGORY_QUERY,
			{ category }
		);
		if (posts && posts.length > 0) return posts;
		return FALLBACK_POSTS.filter((p) => p.category === category);
	} catch {
		return FALLBACK_POSTS.filter((p) => p.category === category);
	}
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
	"copy-teardowns": "تحليلات النصوص",
	"frameworks-strategy": "الأطر والاستراتيجيات",
	"stories-principles": "القصص والمبادئ",
};
