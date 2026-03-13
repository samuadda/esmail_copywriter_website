import { sanityClient } from "./sanity/client";
import {
	ALL_CASE_STUDIES_QUERY,
	CASE_STUDY_BY_SLUG_QUERY,
} from "./sanity/queries";

export interface CaseStudy {
	id: string;
	slug: string;
	client: string;
	industry: string;
	isAnonymized?: boolean;
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
	offer?: "Strategy Sprint" | "Advisory" | "Story Factory";
	role?: string;
	duration?: string;
	deliverables?: string[];
	topResults?: string[];
}

// ── Fallback data ───────────────────────────────────────────────────────
const FALLBACK_CASE_STUDIES: CaseStudy[] = [
	{
		id: "1",
		slug: "saas-platform-conversion",
		client: "منصة SaaS تقنية",
		industry: "التكنولوجيا",
		offer: "Strategy Sprint",
		goal: "زيادة معدل التحويل من الزوار إلى عملاء مدفوعين بنسبة 40% خلال 3 أشهر",
		role: "استراتيجي محتوى",
		duration: "3 أشهر",
		constraints: ["ميزانية محدودة للإعلانات"],
		whatWasDone: ["إعادة كتابة صفحة الهبوط الرئيسية"],
		deliverables: ["صفحة هبوط محسّنة"],
		topResults: ["+47% معدل التحويل"],
		copyExcerpts: [],
		results: [
			{
				type: "quantitative",
				metric: "معدل التحويل",
				value: "+47%",
				description: "زيادة في التحويل",
			},
		],
		coverImage: "/gradient-01.png",
		date: "2024-10-15",
		tags: ["SaaS", "تحويل"],
	},
];

// ── Async data functions ────────────────────────────────────────────────

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
	try {
		const studies =
			await sanityClient.fetch<CaseStudy[]>(ALL_CASE_STUDIES_QUERY);
		if (studies && studies.length > 0) return studies;
		return FALLBACK_CASE_STUDIES;
	} catch {
		return FALLBACK_CASE_STUDIES;
	}
}

export async function getCaseStudyBySlug(
	slug: string
): Promise<CaseStudy | undefined> {
	try {
		const study = await sanityClient.fetch<CaseStudy | null>(
			CASE_STUDY_BY_SLUG_QUERY,
			{ slug }
		);
		if (study) return study;
		return FALLBACK_CASE_STUDIES.find((cs) => cs.slug === slug);
	} catch {
		return FALLBACK_CASE_STUDIES.find((cs) => cs.slug === slug);
	}
}

export async function getRelatedCaseStudies(
	currentSlug: string,
	tags: string[]
): Promise<CaseStudy[]> {
	const all = await getAllCaseStudies();
	return all
		.filter(
			(cs) => cs.slug !== currentSlug && cs.tags.some((t) => tags.includes(t))
		)
		.slice(0, 3);
}
