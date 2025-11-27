"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServicesPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <CursorGlow />
      <Navbar />
      
      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedBackground />
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeader
            badge="ماذا أقدم؟"
            title="خدمات"
            highlight="احترافية"
            description="حلول كتابة استراتيجية مصممة لتعزيز وعي جمهورك وبناء علامتك الشخصية على المدى الطويل."
            isInView={true}
          />
        </div>
      </section>

      <Services />
      
      {/* Transformation Showcase */}
      <BeforeAfter />

      <Process />
      
      {/* Pricing Teaser (Optional Future Expansion) */}
      <section className="py-20 bg-white dark:bg-gray-900">
         <div className="container px-4 mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">هل تبحث عن باقة مخصصة؟</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
                كل مشروع فريد من نوعه. تواصل معي لنناقش احتياجاتك ونبني استراتيجية تناسب ميزانيتك وأهدافك.
            </p>
            <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:scale-105 transition-transform"
            >
                استشرني الآن
            </a>
         </div>
      </section>

      <Footer />
    </main>
  );
}

