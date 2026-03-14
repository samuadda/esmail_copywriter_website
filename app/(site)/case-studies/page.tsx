import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import { getAllCaseStudies } from "@/lib/case-studies-data";
import { getCaseStudiesPageContent } from "@/lib/page-content";

export const revalidate = 60;

export default async function CaseStudiesIndexPage() {
  const [caseStudies, pageContent] = await Promise.all([
    getAllCaseStudies(),
    getCaseStudiesPageContent(),
  ]);

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <CursorGlow />
      <Navbar />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedBackground variant="geometric" />
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeader
            badge={pageContent.badge}
            title={pageContent.title}
            highlight={pageContent.highlight}
            description={pageContent.description}
            isInView={true}
          />
        </div>
      </section>

      <div className="-mt-20 pb-20">
         <CaseStudiesGrid caseStudies={caseStudies} />
      </div>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
         <div className="container px-4 mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{pageContent.ctaHeading}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
                {pageContent.ctaDescription}
            </p>
            <a
                href="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
                {pageContent.ctaText}
            </a>
         </div>
      </section>

      <Footer />
    </main>
  );
}
