import { describe, it, expect } from "vitest";
import {
    getAllCaseStudies,
    getCaseStudyBySlug,
    getRelatedCaseStudies,
} from "@/lib/case-studies-data";

describe("case-studies-data", () => {
    describe("getAllCaseStudies", () => {
        it("returns an array", () => {
            const studies = getAllCaseStudies();
            expect(Array.isArray(studies)).toBe(true);
        });

        it("returns at least one case study", () => {
            const studies = getAllCaseStudies();
            expect(studies.length).toBeGreaterThan(0);
        });

        it("each study has required fields", () => {
            const studies = getAllCaseStudies();
            for (const study of studies) {
                expect(study).toHaveProperty("id");
                expect(study).toHaveProperty("slug");
                expect(study).toHaveProperty("client");
                expect(study).toHaveProperty("goal");
                expect(study).toHaveProperty("results");
                expect(typeof study.slug).toBe("string");
                expect(study.slug.length).toBeGreaterThan(0);
                expect(Array.isArray(study.results)).toBe(true);
            }
        });
    });

    describe("getCaseStudyBySlug", () => {
        it("returns the correct study for a valid slug", () => {
            const studies = getAllCaseStudies();
            const first = studies[0];
            const found = getCaseStudyBySlug(first.slug);
            expect(found).toBeDefined();
            expect(found?.id).toBe(first.id);
        });

        it("returns undefined for a non-existent slug", () => {
            const result = getCaseStudyBySlug("slug-that-does-not-exist-xyz");
            expect(result).toBeUndefined();
        });
    });

    describe("getRelatedCaseStudies", () => {
        it("returns an array", () => {
            const studies = getAllCaseStudies();
            const result = getRelatedCaseStudies(studies[0].slug, studies[0].tags);
            expect(Array.isArray(result)).toBe(true);
        });

        it("does not include the current study", () => {
            const studies = getAllCaseStudies();
            const current = studies[0];
            const related = getRelatedCaseStudies(current.slug, current.tags);
            const ids = related.map((s) => s.id);
            expect(ids).not.toContain(current.id);
        });
    });
});
