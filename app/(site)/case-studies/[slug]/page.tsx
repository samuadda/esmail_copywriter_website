import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getRelatedCaseStudies } from "@/lib/case-studies-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import { Calendar, ArrowRight, Target, CheckCircle, TrendingUp, Award, ArrowLeft } from "lucide-react";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { PRIMARY_CTA_CLASSES, FOCUS_RING, getSectionSeparator } from "@/lib/design-utils";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
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

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedCaseStudies = await getRelatedCaseStudies(caseStudy.slug, caseStudy.tags);

  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans selection:bg-[#f44674]/30">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <article className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <AnimatedBackground variant="geometric" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/10 to-[#fd2862]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4ADE80]/10 to-[#22c55e]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          
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
                  <span key={tag} className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f44674]/10 to-[#fd2862]/10 text-[#f44674] dark:text-[#f44674] text-xs font-bold border border-[#f44674]/20 backdrop-blur-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {caseStudy.client}
              </span>
              {caseStudy.isAnonymized && (
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mr-2">
                  (دراسة حالة مجهولة)
                </span>
              )}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 pb-8 border-b border-gradient-to-r from-[#f44674]/20 via-transparent to-transparent">
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                <Calendar className="w-4 h-4 text-[#f44674]" />
                {new Date(caseStudy.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800/50">
                <Target className="w-4 h-4 text-[#4ADE80]" />
                {caseStudy.industry}
              </span>
            </div>
          </header>

          {/* Cover Image */}
          {caseStudy.coverImage && (
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border-2 border-gray-200 dark:border-gray-700 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#f44674]/20 via-transparent to-transparent z-10"></div>
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.client}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}

          {/* Quick Summary Section */}
          {(caseStudy.offer || caseStudy.role || caseStudy.duration || caseStudy.deliverables || caseStudy.topResults) && (
            <section className="mb-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-[#4ADE80]" />
                  ملخص سريع
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.goal && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">الهدف</h3>
                      <p className="text-base text-gray-800 dark:text-white leading-relaxed">{caseStudy.goal}</p>
                    </div>
                  )}
                  {caseStudy.role && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">الدور</h3>
                      <p className="text-base text-gray-800 dark:text-white leading-relaxed">{caseStudy.role}</p>
                    </div>
                  )}
                  {caseStudy.duration && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">المدة</h3>
                      <p className="text-base text-gray-800 dark:text-white leading-relaxed">{caseStudy.duration}</p>
                    </div>
                  )}
                  {caseStudy.offer && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">العرض</h3>
                      <p className="text-base text-gray-800 dark:text-white leading-relaxed">{caseStudy.offer}</p>
                    </div>
                  )}
                  {caseStudy.deliverables && caseStudy.deliverables.length > 0 && (
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">المخرجات</h3>
                      <ul className="space-y-2">
                        {caseStudy.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-base text-gray-800 dark:text-white">
                            <span className="text-[#4ADE80] mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {caseStudy.topResults && caseStudy.topResults.length > 0 && (
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">أبرز نتيجتين</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {caseStudy.topResults.map((result, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                            <p className="text-base font-semibold text-[#4ADE80]">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Goal Section (if not in Quick Summary) */}
          {!caseStudy.goal || (caseStudy.goal && !caseStudy.role && !caseStudy.duration) ? (
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
          ) : null}

          {/* Constraints Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-[#f44674] to-[#fd2862] rounded-full"></span>
              التحديات والقيود
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.constraints.map((constraint, index) => (
                <div key={index} className="flex items-start gap-4 p-6 glass-card rounded-2xl border border-red-200/50 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-800/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/40 dark:to-red-800/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-red-600 dark:text-red-400 text-lg font-bold">!</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">{constraint}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Was Done Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-[#4ADE80] to-[#22c55e] rounded-full"></span>
              ما تم إنجازه
            </h2>
            <div className="space-y-4">
              {caseStudy.whatWasDone.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 glass-card rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#f44674]/30 dark:hover:border-[#f44674]/20 transition-all group hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed flex-1">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Copy Excerpts Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></span>
              نماذج من النصوص
            </h2>
            <div className="space-y-8">
              {caseStudy.copyExcerpts.map((excerpt, index) => (
                <div key={index} className="glass-card rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow">
                  {excerpt.headline && (
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862]"></span>
                      {excerpt.headline}
                    </h3>
                  )}
                  {excerpt.body && (
                    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-4 border-r-4 border-[#f44674] shadow-lg">
                      <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 font-medium leading-relaxed text-lg">
                        {excerpt.body}
                      </pre>
                    </div>
                  )}
                  {excerpt.notes && (
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#4ADE80]/10 to-[#22c55e]/10 rounded-xl border border-[#4ADE80]/20">
                      <span className="text-2xl">💡</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">
                        {excerpt.notes}
                      </p>
                    </div>
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

          {/* View All Case Studies Button */}
          <div className="mt-16 mb-12 text-center">
            <Link
              href="/case-studies"
              className={`inline-flex items-center gap-2 px-8 py-4 ${PRIMARY_CTA_CLASSES} hover:scale-105 transition-transform ${FOCUS_RING}`}
            >
              <TrendingUp className="w-5 h-5" />
              شاهد كل دراسات الحالة <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

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
              احجز استشارتك المجانية
            </Link>
          </section>
        </div>
      </article>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className={`py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden ${getSectionSeparator()}`}>
          <AnimatedBackground variant="geometric" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                دراسات حالة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f44674] to-[#fd2862]">أخرى</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                استكشف المزيد من النجاحات والنتائج المثبتة
              </p>
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

