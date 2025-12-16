"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts, getPostsByCategory, BlogCategory, CATEGORY_LABELS } from "@/lib/blog-data";
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES: { label: string; value: BlogCategory | "all" }[] = [
    { label: "الكل", value: "all" },
    { label: CATEGORY_LABELS["copy-teardowns"], value: "copy-teardowns" },
    { label: CATEGORY_LABELS["frameworks-strategy"], value: "frameworks-strategy" },
    { label: CATEGORY_LABELS["stories-principles"], value: "stories-principles" },
];

export default function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">("all");

  const categoryPosts = getPostsByCategory(activeCategory);
  
  const filteredPosts = categoryPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans selection:bg-[#f44674]/30">
      <CursorGlow />
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <AnimatedBackground variant="subtle" />
        <div className="container px-4 mx-auto relative z-10">
          <SectionHeader
            badge="المدونة"
            title="أفكار"
            highlight="وخواطر"
            description="مساحتي الخاصة لمشاركة الخبرات، الأفكار، وما تعلمته في رحلة الكتابة والتسويق."
            isInView={true}
          />

          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                
                {/* Categories */}
                <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar scroll-smooth">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setActiveCategory(cat.value)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                                activeCategory === cat.value
                                    ? "bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white shadow-md"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        placeholder="ابحث..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[#f44674]/50 text-gray-700 dark:text-gray-200 text-sm placeholder-gray-400"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          {filteredPosts.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">لا توجد نتائج</h3>
              <p className="text-gray-500 mt-2">جرب البحث بكلمة مختلفة أو تغيير التصنيف.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-6 text-[#f44674] font-semibold hover:underline"
              >
                مسح الفلاتر
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

