import { type SchemaTypeDefinition } from "sanity";
import blogPost from "./schemas/blogPost";
import caseStudy from "./schemas/caseStudy";
import testimonial from "./schemas/testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blogPost, caseStudy, testimonial],
};
