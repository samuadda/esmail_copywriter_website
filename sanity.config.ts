import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schema";
import deskStructure from "./sanity/desk-structure";

export default defineConfig({
	name: "esm2il-studio",
	title: "إسماعيل إبراهيم — إدارة المحتوى",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	plugins: [
		structureTool({
			structure: deskStructure,
		}),
	],
	schema,
});
