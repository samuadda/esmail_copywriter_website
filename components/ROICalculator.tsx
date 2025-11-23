"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { DollarSign, TrendingUp, Calculator, RefreshCcw } from "lucide-react";

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(1000);
  const [conversionRate, setConversionRate] = useState(1);
  const [orderValue, setOrderValue] = useState(50);
  const [improvement, setImprovement] = useState(20); // Expected improvement %

  const currentRevenue = visitors * (conversionRate / 100) * orderValue;
  const newConversionRate = conversionRate * (1 + improvement / 100);
  const newRevenue = visitors * (newConversionRate / 100) * orderValue;
  const extraRevenue = newRevenue - currentRevenue;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <SectionHeader
          badge="حاسبة العائد"
          title="كم تخسر"
          highlight="بسبب النص الضعيف؟"
          description="الكتابة الإعلانية ليست تكلفة، بل استثمار. استخدم هذه الحاسبة لتعرف كم يمكن أن تربح من تحسين نصوصك."
          isInView={true}
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Controls */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 space-y-8">
            {/* Visitors */}
            <div>
              <label className="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
                <span>عدد الزوار شهرياً</span>
                <span className="text-[#f44674]">{visitors.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="100"
                max="50000"
                step="100"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#f44674]"
              />
            </div>

            {/* Current Conversion Rate */}
            <div>
              <label className="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
                <span>معدل التحويل الحالي (%)</span>
                <span className="text-[#f44674]">{conversionRate}%</span>
              </label>
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#f44674]"
              />
            </div>

            {/* Average Order Value */}
            <div>
              <label className="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
                <span>متوسط قيمة الطلب ($)</span>
                <span className="text-[#f44674]">${orderValue}</span>
              </label>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={orderValue}
                onChange={(e) => setOrderValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#f44674]"
              />
            </div>

             {/* Expected Improvement */}
             <div>
              <label className="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
                <span>التحسن المتوقع مع "Dragon Copy" (%)</span>
                <span className="text-[#4ADE80]">{improvement}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="300"
                step="10"
                value={improvement}
                onChange={(e) => setImprovement(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4ADE80]"
              />
            </div>
          </div>

          {/* Results */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f44674]/20 to-[#4ADE80]/20 blur-3xl rounded-full -z-10" />
            
            <div className="grid gap-6">
              {/* Current Situation */}
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">الدخل الشهري الحالي</p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">${currentRevenue.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
                    <DollarSign className="w-6 h-6" />
                </div>
              </div>

              {/* Potential */}
              <motion.div 
                key={extraRevenue}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-[#f44674] to-[#fd2862] p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                 
                 <div className="relative z-10">
                    <p className="text-white/80 font-medium mb-2">الدخل الإضافي المتوقع</p>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-5xl font-bold mb-4">+${extraRevenue.toLocaleString()}</h3>
                        <span className="text-sm font-medium opacity-80">/ شهرياً</span>
                    </div>
                    
                    <div className="h-px bg-white/20 my-4"></div>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-white/80">الدخل السنوي الإضافي</p>
                            <p className="text-2xl font-bold text-[#4ADE80]">+${(extraRevenue * 12).toLocaleString()}</p>
                        </div>
                        <TrendingUp className="w-10 h-10 text-white/90" />
                    </div>
                 </div>
              </motion.div>

              <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                      * هذه الأرقام تقديرية وتعتمد على عوامل متعددة، لكن تحسين النصوص دائماً ما يأتي بعائد إيجابي.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

