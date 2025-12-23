"use client";

import { useState } from "react";
import { Heart, Facebook, Linkedin, Copy, Check } from "lucide-react";
import ShareModal from "@/components/ui/ShareModal";

interface ArticleInteractionBarProps {
  postSlug: string;
  postTitle: string;
  initialLikes: number;
}

export default function ArticleInteractionBar({ 
  postSlug, 
  postTitle, 
  initialLikes 
}: ArticleInteractionBarProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/blog/${postSlug}` 
    : "";

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(postTitle)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  return (
    <>
      <div className="border-y border-gray-200 dark:border-gray-800 py-8 my-12 flex flex-col sm:flex-row items-center justify-between gap-6 glass-card rounded-2xl px-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleLike}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all font-bold border ${
              liked
                ? "bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/40 dark:to-pink-900/40 text-red-600 border-red-300 dark:border-red-700"
                : "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 text-red-500 hover:from-red-100 hover:to-pink-100 dark:hover:from-red-900/30 dark:hover:to-pink-900/30 border-red-200 dark:border-red-800/50"
            }`}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
            <span>{likesCount} إعجاب</span>
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-600 dark:text-gray-400 text-sm">مشاركة عبر:</span>
          <div className="flex gap-2">
            <button 
              onClick={shareToFacebook}
              className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all border border-blue-200 dark:border-blue-800/50"
              aria-label="مشاركة على فيسبوك"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button 
              onClick={shareToTwitter}
              className="w-12 h-12 rounded-full bg-black dark:bg-gray-800 text-white flex items-center justify-center hover:scale-110 transition-all border border-gray-300 dark:border-gray-700"
              aria-label="مشاركة على X"
            >
              <span className="text-xl font-bold">X</span>
            </button>
            <button 
              onClick={shareToLinkedIn}
              className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 flex items-center justify-center hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all border border-blue-200 dark:border-blue-800/50"
              aria-label="مشاركة على لينكد إن"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button 
              onClick={async (e) => {
                e.stopPropagation();
                try {
                  await navigator.clipboard.writeText(shareUrl);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                } catch (err) {
                  console.error("Failed to copy:", err);
                  // Fallback: open share modal if copy fails
                  setIsShareModalOpen(true);
                }
              }}
              className={`w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all border ${
                copied
                  ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700"
              }`}
              title={copied ? "تم النسخ!" : "نسخ الرابط"}
              aria-label={copied ? "تم النسخ!" : "نسخ الرابط"}
            >
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        url={shareUrl}
        title={postTitle}
      />
    </>
  );
}

