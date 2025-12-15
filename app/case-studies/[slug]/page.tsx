import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getRelatedCaseStudies } from "@/lib/case-studies-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import { Calendar, ArrowRight, Target, CheckCircle, TrendingUp, Award } from "lucide-react";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) return {};
  
  return {
    title: `${caseStudy.client} - دراسة حالة | إسماعيل إبراهيم`,
    description: `كيف ساعدت ${caseStudy.client} على تحقيق ${caseStudy.goal}. دراسة حالة مفصلة عن الاستراتيجية والنتائج.`,
    openGraph: {
      title: `${caseStudy.client} - دراسة حالة`,
      description: caseStudy.goal,
      type: "article",
      images: caseStudy.coverImage ? [caseStudy.coverImage] : [],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = getRelatedCaseStudies(caseStudy.slug, caseStudy.tags);

  return (
    <main dir="rtl" className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-[#f44674]/30">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <article className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Breadcrumb */}
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-[#f44674] transition-colors mb-8 group"
          >
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            العودة لدراسات الحالة
          </Link>

          {/* Header */}
          <header className="mb-12">
            {caseStudy.tags && caseStudy.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold border border-gray-200 dark:border-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {caseStudy.client}
              {caseStudy.isAnonymized && (
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mr-2">
                  (دراسة حالة مجهولة)
                </span>
              )}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(caseStudy.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                {caseStudy.industry}
              </span>
            </div>
          </header>

          {/* Cover Image */}
          {caseStudy.coverImage && (
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100 dark:border-gray-800">
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.client}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Goal Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-[#f44674]/10 to-[#fd2862]/10 rounded-2xl p-8 border border-[#f44674]/20">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-[#f44674]" />
                الهدف
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {caseStudy.goal}
              </p>
            </div>
          </section>

          {/* Constraints Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">التحديات والقيود</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.constraints.map((constraint, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 dark:text-red-400 text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{constraint}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Was Done Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">ما تم إنجازه</h2>
            <div className="space-y-4">
              {caseStudy.whatWasDone.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed flex-1">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Copy Excerpts Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">نماذج من النصوص</h2>
            <div className="space-y-8">
              {caseStudy.copyExcerpts.map((excerpt, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  {excerpt.headline && (
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {excerpt.headline}
                    </h3>
                  )}
                  {excerpt.body && (
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-4 border-r-4 border-[#f44674]">
                      <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                        {excerpt.body}
                      </pre>
                    </div>
                  )}
                  {excerpt.notes && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      💡 {excerpt.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#4ADE80]" />
              النتائج
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                  {result.type === "quantitative" && result.metric && result.value && (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-[#4ADE80]" />
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {result.metric}
                        </span>
                      </div>
                      <div className="text-4xl font-bold text-[#4ADE80] mb-2">
                        {result.value}
                      </div>
                    </>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 p-8 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-center text-white">
            <Award className="w-12 h-12 mx-auto mb-4 text-[#f44674]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              هل تريد نتائج مشابهة؟
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
              دعنا نعمل معاً لتحويل علامتك التجارية من خلال الكلمات الاستراتيجية.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              اطلب استشارة مجانية
            </Link>
          </section>
        </div>
      </article>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                دراسات حالة أخرى
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCaseStudies.map((cs, idx) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

