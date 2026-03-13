"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <CursorGlow />
      <Navbar />
      
      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedBackground variant="accent-only" />
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeader
            badge="احجز استشارتك المجانية"
            title="احجز"
            highlight="استشارتك المجانية"
            description="مكالمة قصيرة للتعارف وتشخيص المشكلة وتحديد العرض الأنسب."
            isInView={true}
          />
        </div>
      </section>

      <div className="-mt-20">
        <Contact />
      </div>
      
      {/* FAQ Section (Elite Feature) */}
      <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto max-w-3xl">
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">أسئلة شائعة</h3>
              <div className="space-y-6">
                  <FAQItem 
                    question="كم يستغرق تسليم المشروع؟" 
                    answer="يعتمد ذلك على حجم المشروع. عادة ما تستغرق صفحات الهبوط 3-5 أيام، بينما قد تستغرق المشاريع الكبيرة أسبوعين أو أكثر." 
                  />
                  <FAQItem 
                    question="هل تقدم تعديلات على النصوص؟" 
                    answer="نعم، أقدم جولتين من التعديلات المجانية لضمان رضاك التام عن النتيجة النهائية." 
                  />
                  <FAQItem 
                    question="ما هي طرق الدفع المتاحة؟" 
                    answer="أقبل التحويلات البنكية، بايبال (PayPal)، وInstapay." 
                  />
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{question}</h4>
            <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
    )
}

