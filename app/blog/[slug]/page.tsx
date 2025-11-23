import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import BlogCard from "@/components/blog/BlogCard";
import CommentsSection from "@/components/blog/CommentsSection";
import { Calendar, Clock, ArrowRight, Share2, Facebook, Twitter, Linkedin, Copy, Heart } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  
  return {
    title: `${post.title || "منشور"} | إسماعيل إبراهيم`,
    description: post.excerpt || post.content.substring(0, 160),
    openGraph: {
      title: post.title || "منشور",
      description: post.excerpt || post.content.substring(0, 160),
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.tags);

  return (
    <main dir="rtl" className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-[#f44674]/30">
      <CursorGlow />
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Breadcrumb */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-[#f44674] transition-colors mb-8 group"
          >
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            العودة للمدونة
          </Link>

          {/* Header */}
          <header className="mb-10 text-center">
            {post.tags && (
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold border border-gray-200 dark:border-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {post.title && (
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                {post.title}
                </h1>
            )}

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              {post.readTime && (
                <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime} دقيقة قراءة
                </span>
              )}
            </div>
          </header>

          {/* Media (Image or Video) */}
          {post.type === "video" && post.videoUrl ? (
             <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 bg-black">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={post.videoUrl} 
                    title={post.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                />
             </div>
          ) : post.coverImage ? (
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100 dark:border-gray-800">
              <Image
                src={post.coverImage}
                alt={post.title || ""}
                fill
                priority
                className="object-cover"
              />
            </div>
          ) : null}

          {/* Content Body */}
          <div 
            className={`prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-[#f44674] prose-img:rounded-2xl max-w-none mb-12 ${
                post.type === "quote" ? "text-center font-serif text-2xl leading-relaxed" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Interaction Bar */}
          <div className="border-y border-gray-100 dark:border-gray-800 py-6 my-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors font-bold">
                    <Heart className="w-5 h-5 fill-current" />
                    <span>{post.likes} إعجاب</span>
                </button>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-500 text-sm">مشاركة عبر:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-600 flex items-center justify-center hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-sky-500 flex items-center justify-center hover:scale-110 transition-transform">
                    <Twitter className="w-5 h-5" />
                </button>
                 <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-700 flex items-center justify-center hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                </button>
                 <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:scale-110 transition-transform tooltip" title="نسخ الرابط">
                    <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <CommentsSection initialComments={post.comments} />

        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                اقرأ أيضاً
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, idx) => (
                <BlogCard key={post.slug} post={post} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

