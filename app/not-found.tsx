"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import MagneticButton from "@/components/MagneticButton";
import { FileQuestion, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main dir="rtl" className="min-h-screen bg-white dark:bg-gray-950 font-sans flex flex-col">
      <CursorGlow />
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden py-32">
        <AnimatedBackground variant="minimal" />
        
        <div className="container px-4 text-center relative z-10">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8 inline-block"
            >
                <div className="text-9xl font-black text-gray-100 dark:text-gray-800 select-none relative z-0">
                    404
                </div>
                <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f44674]"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FileQuestion className="w-20 h-20" />
                </motion.div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
                عذراً.. هذه الصفحة <span className="text-[#f44674]">ضائعة</span> في المسودات!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
                يبدو أن الرابط الذي تحاول الوصول إليه قد تم حذفه، أو أنه لم يُكتب بعد.
                لا تقلق، يمكنك العودة إلى الصفحة الرئيسية والبدء من جديد.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
                <MagneticButton>
                    <Link 
                        href="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <Home className="w-5 h-5" />
                        <span>العودة للرئيسية</span>
                    </Link>
                </MagneticButton>

                <Link 
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 font-semibold hover:text-[#f44674] transition-colors group"
                >
                    <span>اقرأ أحدث المقالات</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </Link>
            </motion.div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}

