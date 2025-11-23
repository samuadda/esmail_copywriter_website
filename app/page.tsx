import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SocialStats from "@/components/SocialStats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";
import CopyAnalyzer from "@/components/CopyAnalyzer";
import ROICalculator from "@/components/ROICalculator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

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

			{/* The Hook: Problem Agitation (ROI Calculator) - NEW ELITE FEATURE */}
			<ROICalculator />

			{/* The Solution: Copy Analyzer (Teaser) */}
			<CopyAnalyzer />

			{/* Featured Services Teaser */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="container px-4 mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
						كيف يمكنني مساعدتك؟
					</h2>
					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
						<ServiceTeaser
							title="كتابة الإعلانات"
							desc="نصوص تبيع منتجاتك من أول جملة."
							icon="/gradient-01.png"
						/>
						<ServiceTeaser
							title="صفحات الهبوط"
							desc="تصميم وتأليف صفحات تحقق أعلى معدلات تحويل."
							icon="/gradient-04.png"
						/>
						<ServiceTeaser
							title="استراتيجية المحتوى"
							desc="خطط محتوى طويلة الأمد تبني جمهوراً مخلصاً."
							icon="/gradient-02.png"
						/>
					</div>
					<Link
						href="/services"
						className="text-[#f44674] font-bold inline-flex items-center gap-2 hover:gap-4 transition-all"
					>
						اكتشف كل خدماتي <ArrowLeft className="w-5 h-5" />
					</Link>
				</div>
			</section>

			{/* Testimonials (Social Proof) */}
			<Testimonials />

			{/* Final CTA */}
			<Contact />

			<Footer />
			<BackToTop />
		</main>
	);
}

function ServiceTeaser({
	title,
	desc,
	icon,
}: {
	title: string;
	desc: string;
	icon: string;
}) {
	return (
		<div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:-translate-y-2 transition-transform duration-300">
			<div className="w-16 h-16 mx-auto mb-4 relative">
				<Image src={icon} alt={title} fill className="object-contain" />
			</div>
			<h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
				{title}
			</h3>
			<p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
		</div>
	);
}
