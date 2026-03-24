import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import FAQSection from "@/components/FAQSection";
import CursorGlow from "@/components/CursorGlow";
import { PRIMARY_CTA_CLASSES, FOCUS_RING } from "@/lib/design-utils";
import {
	getServicesContent,
	getBeforeAfterContent,
	getProcessContent,
	getClientLogosContent,
	getServicesPageExtra,
} from "@/lib/page-content";
import { getAllTestimonials } from "@/lib/testimonials-data";

export const revalidate = 300;

export default async function ServicesPage() {
	const [servicesContent, beforeAfterContent, processContent, testimonials, clientLogosContent, pageExtra] =
		await Promise.all([
			getServicesContent(),
			getBeforeAfterContent(),
			getProcessContent(),
			getAllTestimonials(),
			getClientLogosContent(),
			getServicesPageExtra(),
		]);

	return (
		<main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950">
			<CursorGlow />
			<Navbar />

			{/* 1 — The offers */}
			<Services content={servicesContent} />

			{/* 2 — Credibility: trusted brands */}
			<ClientLogos content={clientLogosContent} />

			{/* 3 — Demonstration: before & after */}
			<BeforeAfter content={beforeAfterContent} />

			{/* 4 — Social proof: client testimonials */}
			<Testimonials
				testimonials={testimonials}
				header={{
					badge: pageExtra.testimonialsBadge,
					title: pageExtra.testimonialsTitle,
					highlight: pageExtra.testimonialsHighlight,
					description: pageExtra.testimonialsDescription,
				}}
			/>

			{/* 5 — Process: how it works */}
			<Process content={processContent} />

			{/* 6 — FAQ: remove objections */}
			<FAQSection
				content={{ faqTitle: pageExtra.faqTitle, faqItems: pageExtra.faqItems }}
				className="py-20 bg-gray-50 dark:bg-gray-800"
			/>

			{/* 7 — Final CTA */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="container px-4 mx-auto text-center">
					<h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
						{pageExtra.ctaHeading}
					</h3>
					<p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
						{pageExtra.ctaDescription}
					</p>
					<a
						href={pageExtra.ctaButtonHref}
						className={`inline-flex items-center justify-center px-8 py-4 ${PRIMARY_CTA_CLASSES} ${FOCUS_RING}`}
					>
						{pageExtra.ctaButtonLabel}
					</a>
				</div>
			</section>

			<Footer />
		</main>
	);
}
