"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Comment } from "@/lib/blog-data";

interface CommentsSectionProps {
  initialComments: Comment[];
}

export default function CommentsSection({ initialComments }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      author: "زائر", // Default for now
      avatar: "/avatar-1.png", // Default avatar
      content: newComment,
      date: new Date().toISOString(),
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div id="comments" className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-[#f44674]/10 flex items-center justify-center text-[#f44674]">
          <MessageCircle className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          التعليقات ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-10 relative">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="شاركنا رأيك..."
          className="w-full p-4 pl-12 rounded-xl bg-white dark:bg-gray-800 border-2 border-transparent focus:border-[#f44674] focus:ring-0 resize-none h-32 text-gray-800 dark:text-white shadow-sm transition-all"
        />
        <button
          type="submit"
          disabled={!newComment.trim()}
          className="absolute bottom-4 left-4 p-2 bg-[#f44674] text-white rounded-lg hover:bg-[#fd2862] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50">
               {/* Avatar Placeholder */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex-shrink-0" />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">
                    {comment.author}
                  </span>
                  <span className="text-xs text-gray-400">
                     {new Date(comment.date).toLocaleDateString("ar-EG")}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">كن أول من يعلق!</p>
        )}
      </div>
    </div>
  );
}

