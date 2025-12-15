"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Mail, Calendar } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { PRIMARY_CTA_CLASSES, SECONDARY_CTA_CLASSES, FOCUS_RING } from "@/lib/design-utils";

export default function ArticleEndCTA() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      className="mt-16 p-8 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          هل أعجبتك هذه الأفكار؟
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
          إذا كنت تبحث عن كاتب محتوى يمكنه تطبيق هذه المبادئ على علامتك التجارية، 
          دعنا نتحدث. أقدم استشارات استراتيجية وخدمات كتابة محتوى للعلامات التي تريد التأثير الحقيقي.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton>
            <motion.a
              href="/contact"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-8 py-4 ${PRIMARY_CTA_CLASSES} ${FOCUS_RING}`}
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              احجز استشارة مجانية
            </motion.a>
          </MagneticButton>
          
          <motion.a
            href="#newsletter"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-4 ${SECONDARY_CTA_CLASSES} ${FOCUS_RING}`}
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            اشترك في النشرة البريدية
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

