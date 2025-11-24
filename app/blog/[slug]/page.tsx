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
import ScrollProgress from "@/components/ScrollProgress";
import { Calendar, Clock, ArrowRight, Share2, Facebook, Twitter, Linkedin, Copy, Heart, List } from "lucide-react";

interface Props {
  params: { slug: string };
}

function processContent(content: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  // Regex to match h2 and h3, capturing level and inner content
  const processedContent = content.replace(/<h([2-3])(?:[^>]*)>(.*?)<\/h\1>/g, (match, level, text) => {
    const cleanText = text.replace(/<[^>]*>/g, "");
    // Simple slugify for Arabic/English
    const id = cleanText
        .trim()
        .replace(/\s+/g, "-")
        // Keep Arabic chars, English chars, numbers, dashes
        .replace(/[^\w\-\u0600-\u06FF]/g, "")
        .toLowerCase();
        
    headings.push({ id, text: cleanText, level: parseInt(level) });
    return `<h${level} id="${id}" class="scroll-mt-24">${text}</h${level}>`;
  });
  return { processedContent, headings };
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
  const { processedContent, headings } = processContent(post.content);

  return (
    <main dir="rtl" className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-[#f44674]/30">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <article className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {/* Breadcrumb */}
            <Link 
                href="/blog" 
                className="inline-flex items-center text-sm text-gray-500 hover:text-[#f44674] transition-colors mb-8 group"
            >
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                العودة للمدونة
            </Link>

            {/* Header */}
            <header className="mb-10">
                {post.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
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

                <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-8">
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
                className={`prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-[#f44674] prose-img:rounded-2xl max-w-none mb-12 ${
                    post.type === "quote" ? "text-center font-serif text-2xl leading-relaxed" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: processedContent }}
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

          {/* Sidebar / TOC */}
          <div className="hidden lg:block lg:col-span-4 relative">
             <div className="sticky top-32 space-y-8">
                 {/* Table of Contents */}
                 {headings.length > 0 && (
                     <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
                         <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4">
                             <List className="w-5 h-5 text-[#f44674]" />
                             <h3>محتويات المقال</h3>
                         </div>
                         <nav className="space-y-2">
                             {headings.map((heading, idx) => (
                                 <a 
                                    key={idx} 
                                    href={`#${heading.id}`}
                                    className={`block text-sm text-gray-600 dark:text-gray-400 hover:text-[#f44674] dark:hover:text-[#f44674] transition-colors ${
                                        heading.level === 3 ? "mr-4 text-xs" : ""
                                    }`}
                                 >
                                     {heading.text}
                                 </a>
                             ))}
                         </nav>
                     </div>
                 )}

                 {/* Author Bio (Mini) */}
                 <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#f44674] to-[#fd2862] p-1 mb-4">
                        <Image 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            width={80} 
                            height={80} 
                            className="rounded-full bg-white dark:bg-gray-800 p-0.5 object-cover" 
                        />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{post.author.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.author.role}</p>
                    <Link href="/about" className="text-[#f44674] text-sm font-semibold hover:underline">
                        المزيد عني
                    </Link>
                 </div>
             </div>
          </div>

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
