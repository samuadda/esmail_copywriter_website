import { type SchemaTypeDefinition } from "sanity";
import blogPost from "./schemas/blogPost";
import caseStudy from "./schemas/caseStudy";
import testimonial from "./schemas/testimonial";
import heroSection from "./schemas/heroSection";
import aboutSection from "./schemas/aboutSection";
import servicesSection from "./schemas/servicesSection";
import clientLogosSection from "./schemas/clientLogosSection";
import contactSection from "./schemas/contactSection";
import siteSettings from "./schemas/siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		// Collections
		blogPost,
		caseStudy,
		testimonial,
		// Singletons (page sections)
		heroSection,
		aboutSection,
		servicesSection,
		clientLogosSection,
		contactSection,
		siteSettings,
	],
};
