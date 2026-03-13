import { sanityClient } from "./sanity/client";
import { ALL_TESTIMONIALS_QUERY } from "./sanity/queries";

export interface Testimonial {
	id: number | string;
	name: string;
	role: string;
	company: string;
	content: string;
	rating: number;
	avatar: string;
}

// ── Fallback data ───────────────────────────────────────────────────────
const FALLBACK_TESTIMONIALS: Testimonial[] = [
	{
		id: 1,
		name: "أحمد المالكي",
		role: "مدير تسويق",
		company: "شركة النجاح التقني",
		content:
			"إسماعيل ليس مجرد كاتب محتوى، بل شريك استراتيجي فهم رؤيتنا وحولها إلى كلمات أثرت في جمهورنا وحققت نتائج مذهلة.",
		rating: 5,
		avatar: "👨‍💼",
	},
	{
		id: 2,
		name: "سارة العتيبي",
		role: "مؤسسة",
		company: "براند للأزياء",
		content:
			"تعاملت مع عدة كتّاب من قبل، لكن إسماعيل متميز بأسلوبه الإبداعي وقدرته على فهم هوية العلامة التجارية. المحتوى الذي كتبه لنا زاد مبيعاتنا بنسبة 200%.",
		rating: 5,
		avatar: "👩‍💼",
	},
	{
		id: 3,
		name: "خالد السعيد",
		role: "مدير عام",
		company: "مؤسسة الإبداع",
		content:
			"جودة استثنائية في الكتابة، فهم عميق للسوق، وسرعة في التنفيذ. إسماعيل محترف حقيقي وأنصح به بشدة.",
		rating: 5,
		avatar: "🧑‍💼",
	},
];

export async function getAllTestimonials(): Promise<Testimonial[]> {
	try {
		const testimonials = await sanityClient.fetch<Testimonial[]>(
			ALL_TESTIMONIALS_QUERY
		);
		if (testimonials && testimonials.length > 0) return testimonials;
		return FALLBACK_TESTIMONIALS;
	} catch {
		return FALLBACK_TESTIMONIALS;
	}
}
