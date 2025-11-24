"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import AnimatedBackground from "./ui/AnimatedBackground";
import BlogCard from "./blog/BlogCard";
import { getAllPosts } from "@/lib/blog-data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RecentPosts() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    
    // Get latest 3 posts
    const recentPosts = getAllPosts().slice(0, 3);

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
            <AnimatedBackground />

            <div ref={ref} className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <SectionHeader 
                    badge="المدونة"
                    title="أحدث"
                    highlight="المقالات"
                    description="أفكار، تحليلات، ونصائح في الكتابة والتسويق"
                    isInView={isInView}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {recentPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full font-bold text-gray-900 dark:text-white hover:border-[#f44674] hover:text-[#f44674] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        تصفح كل المقالات <ArrowLeft className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

