"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import PhilosophyAnimation from "@/components/PhilosophyAnimation";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <CursorGlow />
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedBackground />
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

      <Skills />
      
      <Footer />
    </main>
  );
}

