"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X as CloseIcon, Facebook, Linkedin, Copy, Check } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export default function ShareModal({ isOpen, onClose, url, title }: ShareModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  if (!mounted || typeof document === "undefined") return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-md px-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-200 dark:border-gray-800">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 id="share-modal-title" className="text-xl font-bold text-gray-900 dark:text-white">
                  مشاركة المقال
                </h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="إغلاق"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Social Media Options */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <button
                  onClick={shareToFacebook}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Facebook className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">فيسبوك</span>
                </button>

                <button
                  onClick={shareToTwitter}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-black dark:bg-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-white text-3xl font-bold leading-none">X</span>
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">X</span>
                </button>

                <button
                  onClick={shareToLinkedIn}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-700 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">لينكد إن</span>
                </button>
              </div>

              {/* Copy Link Section */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    نسخ الرابط
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyLink}
                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 flex-shrink-0 ${
                      copied
                        ? "bg-green-500 text-white shadow-lg"
                        : "bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>تم النسخ!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span>نسخ</span>
                      </>
                    )}
                  </button>
                  <input
                    type="text"
                    value={url}
                    readOnly
                    className="flex-1 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f44674]/20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

