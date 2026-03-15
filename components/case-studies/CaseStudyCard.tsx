"use client";

import Link from "next/link";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { CaseStudy } from "@/lib/case-studies-data";
import { ArrowLeft, Target, TrendingUp } from "lucide-react";
import { PRIMARY_GRADIENT, PRIMARY_TEXT } from "@/lib/design-utils";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const primaryResult = caseStudy.results.find(r => r.type === "quantitative");

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
      className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
    >
      <Link href={`/case-studies/${caseStudy.slug}`} className="block flex-1">
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          {caseStudy.coverImage ? (
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.client}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${PRIMARY_GRADIENT} opacity-20`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Industry Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full shadow-sm">
            <span className="text-xs font-bold text-gray-800 dark:text-white flex items-center gap-1 break-words">
              <Target className="w-3 h-3 text-[#f44674] flex-shrink-0" aria-hidden="true" />
              <span className="truncate">{caseStudy.industry}</span>
            </span>
          </div>

          {/* Offer Badge */}
          {caseStudy.offer && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#f44674]/95 backdrop-blur-md rounded-full shadow-sm">
              <span className="text-xs font-bold text-white truncate">
                {caseStudy.offer}
              </span>
            </div>
          )}

          {/* Result Badge */}
          {primaryResult && primaryResult.value && (
            <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#4ADE80]/90 backdrop-blur-md rounded-full shadow-sm">
              <span className="text-xs font-bold text-white flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {primaryResult.value}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight group-hover:text-[#f44674] transition-colors break-words">
            {caseStudy.client}
            {caseStudy.isAnonymized && (
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400 mr-2">
                (مجهول)
              </span>
            )}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 break-words">
            {caseStudy.goal}
          </p>
          <span className={`${PRIMARY_TEXT} text-sm font-bold flex items-center gap-1 group/link min-w-0`}>
            <span className="truncate">اقرأ التفاصيل</span> <ArrowLeft className="w-4 h-4 transition-transform group-hover/link:-translate-x-1 flex-shrink-0" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </m.div>
  );
}

