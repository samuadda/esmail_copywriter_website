import { Vazirmatn } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "إسماعيل إبراهيم - كاتب محتوى إبداعي",
    description: "كلمات تبيع، وقصص تُلهم. كاتب محتوى إبداعي ومتخصص في الكتابة الإعلانية.",
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
