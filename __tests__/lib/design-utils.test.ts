import { describe, it, expect } from "vitest";
import {
    PRIMARY_CTA_CLASSES,
    SECONDARY_CTA_CLASSES,
    FOCUS_RING,
    FOCUS_RING_INPUT,
    getSectionSpacing,
    getSectionContainer,
    getSectionPadding,
    getSectionBackground,
    getSectionSeparator,
    getHeadingClasses,
    getBodyClasses,
} from "@/lib/design-utils";

describe("design-utils", () => {
    it("PRIMARY_CTA_CLASSES is a non-empty string", () => {
        expect(typeof PRIMARY_CTA_CLASSES).toBe("string");
        expect(PRIMARY_CTA_CLASSES.length).toBeGreaterThan(0);
    });

    it("SECONDARY_CTA_CLASSES is a non-empty string", () => {
        expect(typeof SECONDARY_CTA_CLASSES).toBe("string");
        expect(SECONDARY_CTA_CLASSES.length).toBeGreaterThan(0);
    });

    it("FOCUS_RING contains focus styles", () => {
        expect(FOCUS_RING).toContain("focus:");
    });

    it("FOCUS_RING_INPUT contains focus styles", () => {
        expect(FOCUS_RING_INPUT).toContain("focus:");
    });

    describe("getSectionSpacing", () => {
        it("returns a non-empty string", () => {
            const result = getSectionSpacing();
            expect(typeof result).toBe("string");
            expect(result.length).toBeGreaterThan(0);
        });
    });

    describe("getSectionContainer", () => {
        it("returns a non-empty string", () => {
            const result = getSectionContainer();
            expect(typeof result).toBe("string");
            expect(result.length).toBeGreaterThan(0);
        });
    });

    describe("getSectionPadding", () => {
        it("returns a non-empty string", () => {
            const result = getSectionPadding();
            expect(typeof result).toBe("string");
            expect(result.length).toBeGreaterThan(0);
        });
    });

    describe("getSectionBackground", () => {
        it("returns white background for even index", () => {
            const result = getSectionBackground(0);
            expect(result).toContain("bg-white");
        });

        it("returns gray background for odd index", () => {
            const result = getSectionBackground(1);
            expect(result).toContain("bg-gray");
        });

        it("alternates correctly", () => {
            expect(getSectionBackground(0)).toBe(getSectionBackground(2));
            expect(getSectionBackground(1)).toBe(getSectionBackground(3));
            expect(getSectionBackground(0)).not.toBe(getSectionBackground(1));
        });
    });

    describe("getSectionSeparator", () => {
        it("returns a non-empty string", () => {
            const result = getSectionSeparator();
            expect(typeof result).toBe("string");
            expect(result.length).toBeGreaterThan(0);
        });
    });

    describe("getHeadingClasses", () => {
        it("returns classes for h1", () => {
            const result = getHeadingClasses("h1");
            expect(typeof result).toBe("string");
            expect(result.length).toBeGreaterThan(0);
        });

        it("returns different classes for different heading levels", () => {
            const h1 = getHeadingClasses("h1");
            const h3 = getHeadingClasses("h3");
            expect(h1).not.toBe(h3);
        });
    });

    describe("getBodyClasses", () => {
        it("returns classes for default size", () => {
            const result = getBodyClasses();
            expect(typeof result).toBe("string");
            expect(result.length).toBeGreaterThan(0);
        });

        it("returns different classes for different sizes", () => {
            const large = getBodyClasses("large");
            const small = getBodyClasses("small");
            expect(large).not.toBe(small);
        });
    });
});
