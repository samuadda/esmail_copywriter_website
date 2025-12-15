"use client";

import { getAllCaseStudies } from "@/lib/case-studies-data";
import CaseStudyCard from "./CaseStudyCard";
import { getSectionSpacing, getSectionContainer } from "@/lib/design-utils";

export default function CaseStudiesGrid() {
  const caseStudies = getAllCaseStudies();

  return (
    <section className={`${getSectionSpacing()} relative overflow-hidden`}>
      <div className={`${getSectionContainer()}`}>
        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <p className="text-gray-500 dark:text-gray-400">لا توجد دراسات حالة متاحة حالياً.</p>
          </div>
        )}
      </div>
    </section>
  );
}

