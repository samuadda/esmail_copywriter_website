"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { MoveHorizontal } from "lucide-react";

interface ComparisonProps {
  beforeTitle: string;
  beforeText: string;
  afterTitle: string;
  afterText: string;
  category: string;
}

const comparisons: ComparisonProps[] = [
  {
    category: "إعلان فيسبوك",
    beforeTitle: "نسخة عادية",
    beforeText: "نحن نقدم أفضل خدمات التسويق الإلكتروني. اتصل بنا الآن للحصول على عرض سعر. لدينا خبرة كبيرة ونضمن لك النتائج.",
    afterTitle: "نسخة النخبة",
    afterText: "ضاعف مبيعاتك في 30 يوماً أو استرد مالك بالكامل. استراتيجية تسويقية مجربة استخدمها أكثر من 50 عميل لكسر حاجز المليون.",
  },
  {
    category: "صفحة هبوط",
    beforeTitle: "عنوان تقليدي",
    beforeText: "تعلم البرمجة معنا في دورتنا الجديدة. محتوى جيد ومدربين ممتازين.",
    afterTitle: "عنوان لا يُقاوم",
    afterText: "كيف تصبح مطور برمجيات مطلوباً في 3 أشهر فقط... حتى لو لم تكن تجيد الرياضيات!",
  }
];

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleDrag = (event: React.MouseEvent | React.TouchEvent | PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    
    // Calculate percentage
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  // Global event listeners for drag end
  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <SectionHeader
          badge="التحول"
          title="قبل"
          highlight="وبعد"
          description="شاهد كيف يتحول الكلام العادي إلى آلة بيع لا تتوقف."
          isInView={isInView}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
           {comparisons.map((item, idx) => (
             <ComparisonCard key={idx} item={item} />
           ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ item }: { item: ComparisonProps }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-center text-gray-700 dark:text-gray-300">
        {item.category}
      </h3>
      
      <div 
        ref={containerRef}
        className="relative w-full h-80 rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-gray-200 dark:border-gray-800"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Layer (Base) */}
        <div className="absolute inset-0 bg-[#fd2862] flex items-center justify-center p-8 text-center">
            <div className="max-w-md">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold bg-white/20 text-white rounded-full">
                    {item.afterTitle}
                </span>
                <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                    "{item.afterText}"
                </p>
            </div>
             {/* Label */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                بعد (The Elite Way)
            </div>
        </div>

        {/* BEFORE Layer (Clipped) */}
        <div 
            className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8 text-center border-r-4 border-white"
            style={{ 
                clipPath: `polygon(100% 0, 100% 100%, ${100 - sliderPosition}% 100%, ${100 - sliderPosition}% 0)` 
            }}
        >
             <div className="max-w-md">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full">
                    {item.beforeTitle}
                </span>
                <p className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                    "{item.beforeText}"
                </p>
            </div>
             {/* Label */}
             <div className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold z-10">
                قبل
            </div>
        </div>

        {/* Slider Handle */}
        <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#f44674]">
                <MoveHorizontal className="w-4 h-4" />
            </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-gray-400 mt-2">
        حرك المؤشر للمقارنة
      </p>
    </div>
  );
}

