import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SocialStats from "@/components/SocialStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";
import About from "@/components/About";
import RecentPosts from "@/components/RecentPosts";
import Newsletter from "@/components/Newsletter";
import ServicesTeaser from "@/components/ServicesTeaser";

export default function Home() {
	return (
		<main dir="rtl">
			<CursorGlow />
			<ScrollProgress />
			<Navbar />

			{/* High-Impact Hero */}
			<Hero />

			{/* Social Proof */}
			<SocialStats />

            {/* Personal Brand Story */}
            <About />

			{/* Featured Services Teaser */}
            <ServicesTeaser />

            {/* Value & Influence: Recent Blog Posts */}
            <RecentPosts />

            {/* Community Building: Newsletter */}
            <Newsletter />

			{/* Final CTA */}
			<Contact />

			<Footer />
			<BackToTop />
		</main>
	);
}
