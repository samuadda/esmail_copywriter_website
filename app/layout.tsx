import { Vazirmatn } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const vazirmatn = Vazirmatn({
	subsets: ["arabic"],
	weight: ["400", "500", "600", "700", "900"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "إسماعيل إبراهيم - كاتب محتوى استراتيجي | تحويل الكلمات إلى نتائج",
		template: "%s | إسماعيل إبراهيم",
	},
	description:
		"كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس. أعمل مع العلامات التجارية الطموحة لبناء حضور مؤثر وتحقيق نتائج حقيقية من خلال الكتابة الاستراتيجية.",
	keywords: [
		"كاتب محتوى",
		"كتابة إعلانية",
		"استراتيجية محتوى",
		"copywriting",
		"content strategy",
		"marketing",
		"branding",
	],
	authors: [{ name: "إسماعيل إبراهيم" }],
	creator: "إسماعيل إبراهيم",
	publisher: "إسماعيل إبراهيم",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.esm2il.com"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "ar_SA",
		url: "/",
		title: "إسماعيل إبراهيم - كاتب محتوى استراتيجي | تحويل الكلمات إلى نتائج",
		description:
			"كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس. دراسات حالة، مقالات، واستشارات في الكتابة والتسويق.",
		siteName: "إسماعيل إبراهيم",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "إسماعيل إبراهيم - كاتب محتوى استراتيجي",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "إسماعيل إبراهيم - كاتب محتوى استراتيجي",
		description: "كاتب محتوى استراتيجي متخصص في تحويل الكلمات إلى نتائج قابلة للقياس.",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/logo.svg",
		shortcut: "/logo.svg",
		apple: "/logo.svg",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ar" dir="rtl">
			<body className={vazirmatn.className}>{children}</body>
		</html>
	);
}
