import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQSection from "@/components/FAQSection";
import { getContactContent, getContactPageContent } from "@/lib/page-content";

export const revalidate = 300;

export default async function ContactPage() {
  const [contactContent, contactPageContent] = await Promise.all([
    getContactContent(),
    getContactPageContent(),
  ]);

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <CursorGlow />
      <Navbar />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedBackground variant="accent-only" />
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeader
            badge={contactPageContent.pageBadge}
            title={contactPageContent.pageTitle}
            highlight={contactPageContent.pageHighlight}
            description={contactPageContent.pageDescription}
            isInView={true}
          />
        </div>
      </section>

      <div className="-mt-20">
        <Contact content={contactContent} />
      </div>

      <FAQSection content={contactPageContent} />

      <Footer />
    </main>
  );
}
