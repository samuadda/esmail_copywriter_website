"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Play, Quote, ArrowLeft } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

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
    // Simple copy to clipboard simulation
    navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`);
    alert("تم نسخ الرابط!");
  };

  // Card Variants based on Type
  const renderContent = () => {
    switch (post.type) {
      case "quote":
        return (
          <div className={`p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px] relative overflow-hidden group ${
             post.content.length > 100 ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white" : "bg-gradient-to-br from-[#f44674]/5 to-[#fd2862]/5"
          }`}>
            <Quote className={`w-10 h-10 mb-6 opacity-30 ${post.content.length > 100 ? "text-white" : "text-[#f44674]"}`} />
            <p className={`font-bold leading-relaxed ${
              post.content.length > 100 
                ? "text-lg md:text-xl text-gray-100" 
                : "text-xl md:text-3xl text-gray-800 dark:text-white"
            }`}>
              "{post.content}"
            </p>
             {post.content.length > 100 && (
                <div className="mt-6 flex justify-center">
                    <span className="text-sm text-[#f44674] font-semibold">- إسماعيل إبراهيم</span>
                </div>
             )}
          </div>
        );

      case "video":
        return (
          <div className="relative h-64 bg-black group">
            <Image
              src={post.coverImage || "/gradient-02.png"}
              alt={post.title || "Video"}
              fill
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs text-white font-medium">
                {post.readTime}:00
            </div>
          </div>
        );

      case "article":
      default:
        return (
          <div className="relative h-64 overflow-hidden group">
            <Image
              src={post.coverImage || "/gradient-01.png"}
              alt={post.title || "Article"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-4 right-4 left-4">
               {post.tags && (
                   <div className="flex gap-2 mb-2">
                       {post.tags.slice(0, 2).map(tag => (
                           <span key={tag} className="px-2 py-0.5 bg-white/90 dark:bg-black/80 text-xs rounded-full backdrop-blur-sm">
                               {tag}
                           </span>
                       ))}
                   </div>
               )}
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col ${
          post.type === "quote" && post.content.length > 100 ? "md:col-span-2" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block flex-1">
        {renderContent()}
        
        {post.type !== "quote" && (
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-[#f44674] transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                </p>
                <span className="text-[#f44674] text-sm font-bold flex items-center gap-1 group/link">
                    اقرأ المزيد <ArrowLeft className="w-4 h-4 transition-transform group-hover/link:-translate-x-1" />
                </span>
            </div>
        )}
      </Link>

      {/* Interaction Bar */}
      <div className={`px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between ${
          post.type === "quote" && post.content.length > 100 ? "bg-gray-900 border-gray-700 text-white" : ""
      }`}>
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
    </motion.div>
  );
}

