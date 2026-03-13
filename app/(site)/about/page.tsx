"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import PhilosophyAnimation from "@/components/PhilosophyAnimation";
import { m } from "framer-motion";

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <CursorGlow />
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedBackground variant="orange-yellow" />
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeader
            badge="قصتي"
            title="من هو"
            highlight="إسماعيل؟"
            description="أكثر من مجرد كاتب. أنا مهندس كلمات، ومصمم تجارب، وشريك في نجاحك."
            isInView={true}
          />
        </div>
      </section>

      <About />
      
      {/* My Philosophy Section (New) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">فلسفتي في الكتابة</h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>
                            أؤمن أن الناس لا يشترون "المنتجات"، بل يشترون "تحولاً" في حياتهم.
                        </p>
                        <p>
                            لذلك، لا أكتب نصوصاً تصف المنتج فحسب، بل أرسم صورة للمستقبل الذي سيحصل عليه العميل بعد استخدام المنتج.
                        </p>
                        <p>
                            أمزج بين <span className="text-[#f44674] font-bold">علم النفس السلوكي</span> و <span className="text-[#f44674] font-bold">فن السرد القصصي</span> لخلق نصوص لا يمكن تجاهلها.
                        </p>
                    </div>
                </div>
                <PhilosophyAnimation />
            </div>
        </div>
      </section>

      {/* Who I Work With / Who I Don't Work With Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto max-w-5xl">
          <SectionHeader
            badge="التوافق"
            title="أشتغل مع"
            highlight="/ ما أشتغل مع"
            description="فلترة عالية الجودة لضمان أفضل النتائج للجميع"
            isInView={true}
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* أشتغل مع */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#4ADE80]/10 to-[#22c55e]/10 rounded-3xl p-8 border-2 border-[#4ADE80]/30 dark:border-[#4ADE80]/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]"></span>
                أشتغل مع
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-[#4ADE80] mt-1">✓</span>
                  <span>العلامات التجارية الطموحة التي تريد بناء حضور مؤثر</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-[#4ADE80] mt-1">✓</span>
                  <span>قادة الفكر وأصحاب الرؤى الذين يبحثون عن التأثير الحقيقي</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-[#4ADE80] mt-1">✓</span>
                  <span>المشاريع التي تقدر الجودة والاستراتيجية</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-[#4ADE80] mt-1">✓</span>
                  <span>العلامات التي تريد نتائج قابلة للقياس</span>
                </li>
              </ul>
            </m.div>

            {/* ما أشتغل مع */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-3xl p-8 border-2 border-red-200/50 dark:border-red-800/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                ما أشتغل مع
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>المشاريع التي تبحث عن "أرخص سعر" فقط</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>المحتوى الذي يهدف للخداع أو التضليل</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>المشاريع التي لا تحترم الوقت والجودة</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">✗</span>
                  <span>العملاء الذين يريدون "محتوى سريع" بدون استراتيجية</span>
                </li>
              </ul>
            </m.div>
          </div>

          {/* CTA */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              احجز استشارتك المجانية
            </a>
          </m.div>
        </div>
      </section>

      <Skills />
      
      {/* Final CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">هل أنت مستعد لبدء مشروعك؟</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            أفضل طريقة للبدء هي حجز مكالمة استشارة. دعنا نتحدث ونحول رؤيتك إلى أثر حقيقي من خلال الكلمات الاستراتيجية.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            احجز استشارتك المجانية
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

