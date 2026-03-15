"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, X } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { STICKY_CTA_CONTENT, NAV_CONTENT } from "@/lib/content";
import { PRIMARY_CTA_CLASSES, FOCUS_RING } from "@/lib/design-utils";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
          role="dialog"
          aria-label="دعوة للعمل"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-4 flex items-center gap-4 relative min-w-0">
            {/* Close Button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex-shrink-0"
              aria-label={STICKY_CTA_CONTENT.close}
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Content */}
            <div className="flex-1 pr-8 min-w-0">
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-1 break-words">
                {STICKY_CTA_CONTENT.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 break-words">
                {STICKY_CTA_CONTENT.description}
              </p>
            </div>

            {/* CTA Button */}
            <MagneticButton>
              <Link
                href={NAV_CONTENT.cta.href}
                className={`flex items-center gap-2 px-5 py-2.5 ${PRIMARY_CTA_CLASSES} text-sm whitespace-nowrap flex-shrink-0 ${FOCUS_RING}`}
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {STICKY_CTA_CONTENT.button}
              </Link>
            </MagneticButton>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
