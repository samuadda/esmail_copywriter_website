"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { CheckCircle2, AlertCircle, Sparkles, ArrowRight } from "lucide-react";

// Arabic Power Words Dictionary
const POWER_WORDS = [
  "مجانا", "مجاني", "جديد", "سري", "فوري", "حصري", "الآن", "تخفيض", 
  "نتيجة", "ضمان", "سرعة", "اكتشف", "كيف", "لماذا", "أفضل", "أقوى",
  "تحتوي", "هدية", "وفر", "الوحيد", "محدود", "فرصة", "لا تصدق",
  "مدهش", "خارق", "ثورة", "أسرار", "حقائق", "دليل", "شامل"
];

const EMOTIONAL_WORDS = [
  "خائف", "قلق", "سعيد", "راحة", "أمان", "خطر", "تحذير", "تنبيه",
  "حب", "كره", "نجاح", "فشل", "مستقبل", "حلم", "كابوس"
];

export default function CopyAnalyzer() {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text.trim().length > 5) {
        setIsAnalyzing(true);
        // Simulate complex processing
        setTimeout(() => {
          analyzeText();
          setIsAnalyzing(false);
        }, 1500);
      } else {
        setAnalysisResult(null);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [text]);

  const analyzeText = () => {
    const words = text.trim().split(/\s+/);
    const charCount = text.length;
    const wordCount = words.length;

    const foundPowerWords = words.filter(w => 
      POWER_WORDS.some(pw => w.includes(pw))
    );
    
    const foundEmotionalWords = words.filter(w => 
      EMOTIONAL_WORDS.some(ew => w.includes(ew))
    );

    // Scoring Logic
    let score = 0;
    
    // Length Score (ideal headline 5-12 words)
    if (wordCount >= 5 && wordCount <= 12) score += 30;
    else if (wordCount > 0) score += 10;

    // Power Words Score
    score += Math.min(foundPowerWords.length * 15, 45);

    // Emotional Score
    score += Math.min(foundEmotionalWords.length * 10, 25);

    setAnalysisResult({
      score: Math.min(score, 100),
      wordCount,
      charCount,
      foundPowerWords,
      foundEmotionalWords,
      feedback: score < 50 ? "يحتاج إلى تحسين. حاول إضافة كلمات قوية." : 
                score < 80 ? "جيد! لكن يمكن أن يكون أكثر إقناعاً." : 
                "ممتاز! عنوان قوي وجذاب."
    });
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container px-4 mx-auto max-w-5xl">
        <SectionHeader
          badge="العيادة"
          title="افحص"
          highlight="عنوانك"
          description="أداة مجانية سريعة لتحليل قوة عناوينك الإعلانية. هل هي قوية بما يكفي للبيع؟"
          isInView={isInView}
        />

        <div className="mt-12 relative">
          {/* Background Decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#f44674]/5 to-[#fd2862]/5 blur-3xl rounded-full -z-10" />

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-10 overflow-hidden relative">
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Input Section */}
              <div className="space-y-6">
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
                  اكتب عنوانك الإعلاني هنا:
                </label>
                <div className="relative">
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="مثال: كيف تضاعف مبيعاتك في 30 يوماً بدون ميزانية إعلانية؟"
                    className="w-full h-32 p-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:border-[#f44674] focus:ring-0 bg-transparent transition-all resize-none"
                    dir="rtl"
                  />
                  <div className="absolute bottom-4 left-4 text-sm text-gray-400">
                    {text.length} حرف
                  </div>
                </div>
                
                <div className="flex gap-2 text-sm text-gray-500">
                  <AlertCircle className="w-4 h-4" />
                  <span>التحليل يعتمد على خوارزميات الكتابة الإعلانية النفسية.</span>
                </div>
              </div>

              {/* Results Section */}
              <div className="relative min-h-[300px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {isAnalyzing ? (
                     <motion.div
                        key="analyzing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center space-y-4"
                     >
                        <div className="w-16 h-16 border-4 border-[#f44674]/30 border-t-[#f44674] rounded-full animate-spin"></div>
                        <p className="text-gray-500 font-medium animate-pulse">جاري تحليل الكلمات...</p>
                        <div className="flex gap-2 text-xs text-gray-400">
                            <span>فحص القوة العاطفية...</span>
                        </div>
                     </motion.div>
                  ) : !analysisResult ? (
                    <motion.div 
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center text-gray-400 space-y-4"
                    >
                      <Sparkles className="w-12 h-12 mx-auto text-gray-300" />
                      <p>اكتب شيئاً لتبدأ المعجزة...</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      {/* Score Circle */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">النتيجة</h3>
                          <p className={`text-sm font-medium mt-1 ${
                            analysisResult.score > 80 ? "text-green-500" : 
                            analysisResult.score > 50 ? "text-yellow-500" : "text-red-500"
                          }`}>
                            {analysisResult.feedback}
                          </p>
                        </div>
                        <div className="relative w-24 h-24 flex items-center justify-center">
                           <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="48"
                              cy="48"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="transparent"
                              className="text-gray-100 dark:text-gray-700"
                            />
                            <motion.circle
                              cx="48"
                              cy="48"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="transparent"
                              className={`${
                                analysisResult.score > 80 ? "text-green-500" : 
                                analysisResult.score > 50 ? "text-yellow-500" : "text-red-500"
                              }`}
                              initial={{ strokeDasharray: "0 251" }}
                              animate={{ strokeDasharray: `${analysisResult.score * 2.51} 251` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </svg>
                          <span className="absolute text-2xl font-bold text-gray-800 dark:text-white">
                            {analysisResult.score}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                          <span className="text-gray-600 dark:text-gray-300">كلمات القوة</span>
                          <span className="font-bold text-[#f44674]">{analysisResult.foundPowerWords.length}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                          <span className="text-gray-600 dark:text-gray-300">طول العنوان</span>
                          <span className={`font-bold ${
                            analysisResult.wordCount >= 5 && analysisResult.wordCount <= 12 ? "text-green-500" : "text-yellow-500"
                          }`}>
                            {analysisResult.wordCount >= 5 && analysisResult.wordCount <= 12 ? "مثالي" : "يحتاج تعديل"}
                          </span>
                        </div>
                      </div>
                      
                      {/* CTA within Analysis */}
                      {analysisResult.score < 100 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="pt-4 border-t border-gray-100 dark:border-gray-700"
                        >
                          <p className="text-sm text-gray-500 mb-2">تريد تحويل هذا العنوان إلى مغناطيس للنقرات؟</p>
                          <a href="#contact" className="inline-flex items-center text-[#f44674] font-bold hover:underline">
                             احصل على استشارة مجانية <ArrowRight className="w-4 h-4 mr-1" />
                          </a>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

