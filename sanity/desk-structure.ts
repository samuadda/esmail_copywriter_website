import type { StructureBuilder } from "sanity/structure";

// Singleton document IDs
const SINGLETONS = [
	{ id: "heroSection", title: "القسم الرئيسي (Hero)", icon: "🏠" },
	{ id: "aboutSection", title: "عني (About)", icon: "👤" },
	{ id: "servicesSection", title: "الخدمات (Services)", icon: "💼" },
	{ id: "clientLogosSection", title: "العملاء (Client Logos)", icon: "🏢" },
	{ id: "contactSection", title: "التواصل (Contact)", icon: "📬" },
	{ id: "siteSettings", title: "إعدادات عامة", icon: "⚙️" },
] as const;

export default (S: StructureBuilder) =>
	S.list()
		.title("إدارة المحتوى")
		.items([
			// Content collections
			S.listItem()
				.title("المقالات")
				.schemaType("blogPost")
				.child(S.documentTypeList("blogPost").title("المقالات")),
			S.listItem()
				.title("دراسات الحالة")
				.schemaType("caseStudy")
				.child(S.documentTypeList("caseStudy").title("دراسات الحالة")),
			S.listItem()
				.title("الشهادات")
				.schemaType("testimonial")
				.child(S.documentTypeList("testimonial").title("الشهادات")),

			S.divider(),

			// Singleton page sections
			...SINGLETONS.map(({ id, title }) =>
				S.listItem()
					.title(title)
					.id(id)
					.child(S.document().schemaType(id).documentId(id))
			),
		]);
