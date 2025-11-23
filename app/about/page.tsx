"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";
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
                <div className="relative h-80 rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    {/* Abstract Graphic */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f44674]/20 to-[#4ADE80]/20" />
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-40 h-40 border-4 border-[#f44674]/30 rounded-full border-dashed"
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute w-32 h-32 border-4 border-[#4ADE80]/30 rounded-full border-dotted"
                    />
                    <div className="absolute font-bold text-xl text-gray-800 dark:text-white">
                        علم + فن
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Skills />
      
      <Footer />
    </main>
  );
}

