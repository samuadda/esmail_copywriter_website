import { CommandMenu } from "@/components/CommandMenu";
import MotionProvider from "@/components/MotionProvider";
import { getAllPosts } from "@/lib/blog-data";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
	const posts = await getAllPosts();

	return (
		<MotionProvider>
			{children}
			<CommandMenu posts={posts} />
		</MotionProvider>
	);
}
