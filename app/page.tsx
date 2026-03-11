import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";
import About from "@/components/About";
import RecentPosts from "@/components/RecentPosts";
import Newsletter from "@/components/Newsletter";
import ServicesTeaser from "@/components/ServicesTeaser";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import WritingPrinciples from "@/components/WritingPrinciples";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "كاتب محتوى استراتيجي | تحويل الكلمات إلى نتائج قابلة للقياس",
  description: "كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس. أعمل مع العلامات التجارية الطموحة لبناء حضور مؤثر وتحقيق نتائج حقيقية من خلال الكتابة الاستراتيجية. دراسات حالة، مقالات، واستشارات.",
  keywords: ["كاتب محتوى", "كتابة إعلانية", "استراتيجية محتوى", "copywriting", "content strategy"],
  openGraph: {
    title: "إسماعيل إبراهيم - كاتب محتوى استراتيجي",
    description: "كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس.",
    type: "website",
  },
};

export default function Home() {
	return (
		<main dir="rtl">
			<CursorGlow />
			<ScrollProgress />
			<Navbar />

			{/* 1 — Hook */}
			<Hero />

			{/* 2 — Credibility: big brands trusted me */}
			<ClientLogos />

			{/* 3 — Value: here's what I do */}
			<ServicesTeaser />

			{/* 4 — Proof: results I've achieved */}
			<CaseStudiesPreview />

			{/* 5 — Trust: what clients say */}
			<Testimonials />

			{/* 6 — Story: now they want to know the person */}
			<About />

			{/* 7 — Philosophy: for the convinced-but-hesitant */}
			<WritingPrinciples />

			{/* 8 — More evidence */}
			<Portfolio />

			{/* 9 — Thought leadership */}
			<RecentPosts />

			{/* 10 — Community */}
			<Newsletter />

			{/* 11 — Final CTA */}
			<Contact />

			<Footer />
			<BackToTop />
		</main>
	);
}
