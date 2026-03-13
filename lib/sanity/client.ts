import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

/**
 * If projectId isn't set yet the client is a no-op stub that always
 * throws on fetch — callers already fall back to hardcoded data.
 */
export const sanityClient = projectId
	? createClient({
			projectId,
			dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
			apiVersion: "2024-01-01",
			useCdn: true,
		})
	: (new Proxy({} as ReturnType<typeof createClient>, {
			get(_, prop) {
				if (prop === "fetch") {
					return () => Promise.reject(new Error("Sanity not configured"));
				}
				return undefined;
			},
		}) as ReturnType<typeof createClient>);

const builder = projectId ? createImageUrlBuilder(sanityClient) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
	if (!builder) return { url: () => "" };
	return builder.image(source);
}
