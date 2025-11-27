import { Vazirmatn } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { CommandMenu } from "@/components/CommandMenu";

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "إسماعيل إبراهيم - شريكك في بناء علامتك الشخصية",
    description: "كلمات تبني أثراً، وقصص تُلهم جيلاً. كاتب محتوى استراتيجي يساعدك في بناء علامتك الشخصية.",
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/logo.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir="rtl">
            <body className={vazirmatn.className}>
                {children}
                <CommandMenu />
            </body>
        </html>
    );
}
