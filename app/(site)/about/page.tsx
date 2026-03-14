import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import AboutPageSections from "@/components/AboutPageSections";
import { getAboutContent, getAboutPageContent } from "@/lib/page-content";

export const revalidate = 300;

export default async function AboutPage() {
  const [aboutContent, aboutPageContent] = await Promise.all([
    getAboutContent(),
    getAboutPageContent(),
  ]);

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <CursorGlow />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedBackground variant="orange-yellow" />
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeader
            badge={aboutPageContent.pageBadge}
            title={aboutPageContent.pageTitle}
            highlight={aboutPageContent.pageHighlight}
            description={aboutPageContent.pageDescription}
            isInView={true}
          />
        </div>
      </section>

      <About content={aboutContent} />

      <AboutPageSections content={aboutPageContent} />

      <Skills />

      <Footer />
    </main>
  );
}
