import type { BlogPost } from "./blog-data";
import type { CaseStudy } from "./case-studies-data";

const BASE_URL =
	process.env.NEXT_PUBLIC_SITE_URL || "https://www.esm2il.com";

// ── WebSite schema (homepage) ────────────────────────────────────────
export function getWebSiteJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "إسماعيل إبراهيم",
		url: BASE_URL,
		description:
			"كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس.",
		inLanguage: "ar",
	};
}

// ── Person schema (homepage) ─────────────────────────────────────────
export function getPersonJsonLd() {
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "إسماعيل إبراهيم",
		url: BASE_URL,
		image: `${BASE_URL}/avatar-1.webp`,
		jobTitle: "كاتب محتوى استراتيجي",
		description:
			"كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس.",
		sameAs: [],
	};
}

// ── Article schema (blog posts) ──────────────────────────────────────
export function getArticleJsonLd(post: BlogPost) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.excerpt || post.content.substring(0, 160),
		image: post.coverImage ? `${BASE_URL}${post.coverImage}` : undefined,
		datePublished: post.date,
		dateModified: post.date,
		author: {
			"@type": "Person",
			name: post.author.name,
			url: `${BASE_URL}/about`,
		},
		publisher: {
			"@type": "Person",
			name: "إسماعيل إبراهيم",
			url: BASE_URL,
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${BASE_URL}/blog/${post.slug}`,
		},
		inLanguage: "ar",
		wordCount: post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
	};
}

// ── Case study schema ────────────────────────────────────────────────
export function getCaseStudyJsonLd(cs: CaseStudy) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: `${cs.client} - دراسة حالة`,
		description: `كيف ساعدت ${cs.client} على تحقيق ${cs.goal}`,
		image: cs.coverImage ? `${BASE_URL}${cs.coverImage}` : undefined,
		datePublished: cs.date,
		dateModified: cs.date,
		author: {
			"@type": "Person",
			name: "إسماعيل إبراهيم",
			url: `${BASE_URL}/about`,
		},
		publisher: {
			"@type": "Person",
			name: "إسماعيل إبراهيم",
			url: BASE_URL,
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${BASE_URL}/case-studies/${cs.slug}`,
		},
		inLanguage: "ar",
	};
}
