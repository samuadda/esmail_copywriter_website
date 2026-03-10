"use client";

import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { PRIMARY_CTA_CLASSES, FOCUS_RING } from "@/lib/design-utils";

// Problem to Offer mapping
const problemOfferMap: Record<string, { offer: string; description: string }> = {
  "مبيعات-ضعيفة": {
    offer: "Strategy Sprint",
    description: "إذا كانت مبيعاتك/طلباتك ضعيفة رغم المحتوى → أنسب عرض لك هو Strategy Sprint"
  },
  "رسالة-غير-واضحة": {
    offer: "Strategy Sprint",
    description: "إذا كانت رسالتك غير واضحة (وش نقدم؟ وليه نحن؟) → أنسب عرض لك هو Strategy Sprint"
  },
  "محتوى-بدون-أثر": {
    offer: "Advisory",
    description: "إذا كان لديك محتوى كثير بدون أثر → أنسب عرض لك هو Advisory"
  },
  "ضعف-التحويل": {
    offer: "Strategy Sprint",
    description: "إذا كان هناك ضعف في التحويل في الموقع/الصفحات → أنسب عرض لك هو Strategy Sprint"
  },
  "سكربتات-فيديو": {
    offer: "Story Factory",
    description: "إذا كنت تحتاج سكربتات/محتوى فيديو يبيع → أنسب عرض لك هو Story Factory"
  },
  "ترتيب-التسويق": {
    offer: "Advisory",
    description: "إذا كنت تحتاج ترتيب التسويق بالمحتوى (تقويم/أولويات/تنفيذ) → أنسب عرض لك هو Advisory"
  }
};

export default function ArticleEndCTA() {
  const prefersReducedMotion = useReducedMotion();
  
  // Default offer suggestion (can be customized per post via props in future)
  const defaultSuggestion = {
    offer: "Strategy Sprint",
    description: "إذا مشكلتك تتعلق بالرسالة أو الاستراتيجية → أنسب عرض لك هو Strategy Sprint"
  };
  
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      className="mt-16 p-8 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl border-2 border-[#f44674]/20 dark:border-[#f44674]/30"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            {defaultSuggestion.description}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            استشارة مجانية قصيرة لتحديد العرض المناسب لمشروعك
          </p>
        </div>
        
        <div className="text-center">
          <MagneticButton>
            <m.a
              href="/contact"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-8 py-4 ${PRIMARY_CTA_CLASSES} ${FOCUS_RING}`}
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              احجز استشارتك المجانية
            </m.a>
          </MagneticButton>
        </div>
      </div>
    </m.div>
  );
}

