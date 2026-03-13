import { describe, it, expect } from "vitest";
import {
    getAllPosts,
    getPostBySlug,
    getRelatedPosts,
    getPostsByCategory,
} from "@/lib/blog-data";

describe("blog-data", () => {
    describe("getAllPosts", () => {
        it("returns an array", async () => {
            const posts = await getAllPosts();
            expect(Array.isArray(posts)).toBe(true);
        });

        it("returns at least one post", async () => {
            const posts = await getAllPosts();
            expect(posts.length).toBeGreaterThan(0);
        });

        it("each post has required fields", async () => {
            const posts = await getAllPosts();
            for (const post of posts) {
                expect(post).toHaveProperty("id");
                expect(post).toHaveProperty("slug");
                expect(post).toHaveProperty("title");
                expect(post).toHaveProperty("category");
                expect(post).toHaveProperty("content");
                expect(post).toHaveProperty("date");
                expect(typeof post.slug).toBe("string");
                expect(post.slug.length).toBeGreaterThan(0);
            }
        });
    });

    describe("getPostBySlug", () => {
        it("returns the correct post for a valid slug", async () => {
            const posts = await getAllPosts();
            const first = posts[0];
            const found = await getPostBySlug(first.slug);
            expect(found).toBeDefined();
            expect(found?.id).toBe(first.id);
        });

        it("returns undefined for a non-existent slug", async () => {
            const result = await getPostBySlug("slug-that-does-not-exist-xyz");
            expect(result).toBeUndefined();
        });
    });

    describe("getRelatedPosts", () => {
        it("returns an array", async () => {
            const posts = await getAllPosts();
            const result = await getRelatedPosts(posts[0].slug, posts[0].tags);
            expect(Array.isArray(result)).toBe(true);
        });

        it("does not include the current post", async () => {
            const posts = await getAllPosts();
            const current = posts[0];
            const related = await getRelatedPosts(current.slug, current.tags);
            const ids = related.map((p) => p.id);
            expect(ids).not.toContain(current.id);
        });
    });

    describe("getPostsByCategory", () => {
        it("returns all posts when category is 'all'", async () => {
            const all = await getPostsByCategory("all");
            const total = await getAllPosts();
            expect(all.length).toBe(total.length);
        });

        it("returns only matching posts for a specific category", async () => {
            const posts = await getAllPosts();
            if (posts.length === 0) return;
            const category = posts[0].category;
            const filtered = await getPostsByCategory(category);
            expect(filtered.every((p) => p.category === category)).toBe(true);
        });
    });
});
