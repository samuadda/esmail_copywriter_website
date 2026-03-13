import { getAllPosts } from "@/lib/blog-data";
import BlogIndex from "@/components/blog/BlogIndex";

export const revalidate = 60;

export default async function BlogPage() {
	const posts = await getAllPosts();

	return <BlogIndex posts={posts} />;
}
