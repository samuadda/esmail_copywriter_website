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
import { Calendar, Clock, ArrowRight, List } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { getSectionSeparator } from "@/lib/design-utils";
import ArticleEndCTA from "@/components/blog/ArticleEndCTA";
import ArticleInteractionBar from "@/components/blog/ArticleInteractionBar";
import { getArticleJsonLd } from "@/lib/json-ld";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.tags);
  const { processedContent, headings } = processContent(post.content);

  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans selection:bg-[#f44674]/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(post)) }}
      />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <article className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <AnimatedBackground variant="geometric" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/10 to-[#fd2862]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4ADE80]/10 to-[#22c55e]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
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
            <header className="mb-12">
                {post.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f44674]/10 to-[#fd2862]/10 text-[#f44674] dark:text-[#f44674] text-xs font-bold border border-[#f44674]/20 backdrop-blur-sm">
                        #{tag}
                    </span>
                    ))}
                </div>
                )}

                {post.title && (
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            {post.title}
                        </span>
                    </h1>
                )}

                <div className="flex items-center gap-6 text-sm pb-8 border-b border-gradient-to-r from-[#f44674]/20 via-transparent to-transparent">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 text-[#f44674]" />
                        {new Date(post.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    {post.readTime && (
                        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400">
                            <Clock className="w-4 h-4 text-[#4ADE80]" />
                            {post.readTime} دقيقة قراءة
                        </span>
                    )}
                </div>
            </header>

            {/* Media (Image or Video) */}
            {post.type === "video" && post.videoUrl ? (
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 bg-black border-2 border-gray-200 dark:border-gray-700 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f44674]/20 via-transparent to-transparent z-10"></div>
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
                <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border-2 border-gray-200 dark:border-gray-700 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f44674]/20 via-transparent to-transparent z-10"></div>
                    <Image
                        src={post.coverImage}
                        alt={post.title || ""}
                        fill
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            ) : null}

            {/* Content Body */}
            <div 
                className={`prose prose-lg dark:prose-invert max-w-none mb-12 ${
                    post.type === "quote" ? "text-center font-serif text-2xl leading-relaxed" : ""
                }`}
            >
                <div 
                    className="[&_h2]:font-bold [&_h2]:text-gray-900 dark:[&_h2]:text-white [&_h2]:mb-6 [&_h2]:mt-12 [&_h2]:text-3xl md:[&_h2]:text-4xl [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3 [&_h2]:before:content-[''] [&_h2]:before:w-1 [&_h2]:before:h-8 [&_h2]:before:bg-gradient-to-b [&_h2]:before:from-[#f44674] [&_h2]:before:to-[#fd2862] [&_h2]:before:rounded-full [&_h3]:text-2xl md:[&_h3]:text-3xl [&_h3]:font-bold [&_h3]:text-gray-900 dark:[&_h3]:text-white [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:flex [&_h3]:items-center [&_h3]:gap-2 [&_h3]:before:content-[''] [&_h3]:before:w-1 [&_h3]:before:h-6 [&_h3]:before:bg-gradient-to-b [&_h3]:before:from-[#4ADE80] [&_h3]:before:to-[#22c55e] [&_h3]:before:rounded-full [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-gray-700 dark:[&_p]:text-gray-300 [&_p]:mb-6 [&_a]:text-[#f44674] [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:underline [&_strong]:text-gray-900 dark:[&_strong]:text-white [&_strong]:font-bold [&_ul]:space-y-3 [&_li]:text-gray-700 dark:[&_li]:text-gray-300 [&_li]:text-lg [&_li]:leading-relaxed [&_li]:mb-2 [&_img]:rounded-2xl [&_img]:shadow-xl [&_img]:border [&_img]:border-gray-200 dark:[&_img]:border-gray-800 [&_img]:my-8 [&_blockquote]:border-r-4 [&_blockquote]:border-[#f44674] [&_blockquote]:bg-gradient-to-l [&_blockquote]:from-[#f44674]/10 [&_blockquote]:to-transparent [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-xl [&_blockquote]:not-italic [&_blockquote]:text-gray-700 dark:[&_blockquote]:text-gray-300 [&_code]:bg-gray-100 dark:[&_code]:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-gray-900 dark:[&_pre]:bg-gray-950 [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:overflow-x-auto"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                />
            </div>

            {/* Article End CTA */}
            <ArticleEndCTA />

            {/* Interaction Bar */}
            <ArticleInteractionBar 
              postSlug={post.slug}
              postTitle={post.title || ""}
              initialLikes={post.likes}
            />

            {/* Comments Section */}
            <CommentsSection initialComments={post.comments} />
          </div>

          {/* Sidebar / TOC */}
          <div className="hidden lg:block lg:col-span-4 relative">
             <div className="sticky top-32 space-y-8">
                 {/* Table of Contents */}
                 {headings.length > 0 && (
                     <div className="glass-card rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg">
                         <div className="flex items-center gap-3 font-bold text-gray-900 dark:text-white mb-6">
                             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center">
                                 <List className="w-5 h-5 text-white" />
                             </div>
                             <h3 className="text-xl">محتويات المقال</h3>
                         </div>
                         <nav className="space-y-3">
                             {headings.map((heading, idx) => (
                                 <a 
                                    key={idx} 
                                    href={`#${heading.id}`}
                                    className={`block text-sm text-gray-600 dark:text-gray-400 hover:text-[#f44674] dark:hover:text-[#f44674] transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 ${
                                        heading.level === 3 ? "mr-4 text-xs" : "font-medium"
                                    }`}
                                 >
                                     {heading.text}
                                 </a>
                             ))}
                         </nav>
                     </div>
                 )}

                 {/* Author Bio (Mini) */}
                 <div className="glass-card rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f44674] via-[#fd2862] to-[#f44674]"></div>
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#f44674] to-[#fd2862] p-1.5 mb-6 shadow-lg">
                        <Image 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            width={96} 
                            height={96} 
                            className="rounded-full bg-white dark:bg-gray-800 p-1 object-cover" 
                        />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{post.author.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{post.author.role}</p>
                    <Link 
                        href="/about" 
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold text-sm hover:shadow-lg hover:scale-105 transition-all"
                    >
                        المزيد عني
                    </Link>
                 </div>
             </div>
          </div>

        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className={`py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden ${getSectionSeparator()}`}>
          <AnimatedBackground variant="geometric" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                اقرأ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">أيضاً</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                مقالات أخرى قد تهمك
              </p>
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
