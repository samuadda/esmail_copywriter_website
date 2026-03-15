"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { Heart, MessageCircle, Share2, ArrowLeft, Target, BookOpen, Sparkles } from "lucide-react";
import { BlogPost, CATEGORY_LABELS } from "@/lib/blog-data";
import { PRIMARY_TEXT } from "@/lib/design-utils";
import ShareModal from "@/components/ui/ShareModal";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const CATEGORY_CONFIG = {
    "copy-teardowns": { label: CATEGORY_LABELS["copy-teardowns"], icon: Target, color: "from-blue-500 to-blue-600" },
    "frameworks-strategy": { label: CATEGORY_LABELS["frameworks-strategy"], icon: BookOpen, color: "from-purple-500 to-purple-600" },
    "stories-principles": { label: CATEGORY_LABELS["stories-principles"], icon: Sparkles, color: "from-[#f44674] to-[#fd2862]" },
};

export default function BlogCard({ post, index }: BlogCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsShareModalOpen(true);
  };

  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${post.slug}` : "";

  const CategoryBadge = () => {
    const config = CATEGORY_CONFIG[post.category];

    return (
        <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full shadow-sm flex items-center gap-2 border border-gray-200 dark:border-gray-700">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.color}`}></div>
            <span className="text-xs font-bold text-gray-800 dark:text-white">{config.label}</span>
        </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="relative h-64 overflow-hidden group">
        <CategoryBadge />
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${CATEGORY_CONFIG[post.category].color} opacity-20`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 right-4 left-4">
           {post.tags && post.tags.length > 0 && (
               <div className="flex gap-2 mb-2">
                   {post.tags.slice(0, 2).map(tag => (
                       <span key={tag} className="px-2 py-0.5 bg-white/90 dark:bg-black/80 text-xs rounded-full backdrop-blur-sm text-gray-800 dark:text-white">
                           {tag}
                       </span>
                   ))}
               </div>
           )}
        </div>
      </div>
    );
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
      className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
    >
      <Link href={`/blog/${post.slug}`} className="block flex-1">
        {renderContent()}
        
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-[#f44674] transition-colors break-words">
                {post.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 break-words">
                {post.excerpt}
            </p>
            <div className="flex items-center justify-between min-w-0">
                <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">
                    {post.readTime} دقيقة قراءة
                </span>
                <span className={`${PRIMARY_TEXT} text-sm font-bold flex items-center gap-1 group/link min-w-0`}>
                    <span className="truncate">اقرأ المزيد</span> <ArrowLeft className="w-4 h-4 transition-transform group-hover/link:-translate-x-1 flex-shrink-0" aria-hidden="true" />
                </span>
            </div>
        </div>
      </Link>

      {/* Interaction Bar */}
      <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <button 
                onClick={toggleLike}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
                }`}
            >
                <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                <span>{likesCount}</span>
            </button>
            <Link 
                href={`/blog/${post.slug}#comments`}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors"
            >
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments.length}</span>
            </Link>
         </div>
         <button 
            onClick={handleShare}
            className="text-gray-400 hover:text-[#f44674] transition-colors"
         >
            <Share2 className="w-5 h-5" />
         </button>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        url={shareUrl}
        title={post.title}
      />
    </m.div>
  );
}
