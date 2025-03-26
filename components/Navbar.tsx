"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Simple utility function for class names
function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

// Icons as components
const ChevronDownIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
    >
        <path d="m6 9 6 6 6-6" />
    </svg>
);

const GlobeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const SunIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
    >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
    </svg>
);

const MoonIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
    >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

export default function Navbar() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    const moreDropdownRef = useRef<HTMLDivElement>(null);
    const langDropdownRef = useRef<HTMLDivElement>(null);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark");
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
                setIsMoreDropdownOpen(false);
            }
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
                setIsLangDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed top-5 w-full z-50" dir="rtl">
            {/* Gradient background with glassmorphism effect */}
            <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border border-white/10 shadow-lg"
                style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                }}
            />

            <nav className="relative flex items-center justify-between px-4 py-4 md:px-8 z-10">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold">
                        <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12H8L12 4L20 20L28 4L32 12H40" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 md:gap-2 lg:gap-4">
                    <NavItem href="/services" label="الخدمات" />
                    <NavItem href="/features" label="الميزات" isActive />
                    <NavItem href="/pricing" label="الأسعار" />
                    <NavItem href="/contact" label="تواصل معنا" />

                    {/* More Dropdown */}
                    <div className="relative" ref={moreDropdownRef}>
                        <button
                            onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                        >
                            المزيد
                            <ChevronDownIcon />
                        </button>

                        {isMoreDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <Link
                                        href="/about"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setIsMoreDropdownOpen(false)}
                                    >
                                        من نحن
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setIsMoreDropdownOpen(false)}
                                    >
                                        المدونة
                                    </Link>
                                    <Link
                                        href="/faq"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setIsMoreDropdownOpen(false)}
                                    >
                                        الأسئلة الشائعة
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Language and Theme Toggles */}
                <div className="flex items-center gap-2">
                    {/* Language Dropdown */}
                    <div className="relative" ref={langDropdownRef}>
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            className="flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                        >
                            <GlobeIcon />
                            <span className="ml-1 text-xs">AR</span>
                        </button>

                        {isLangDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <Link
                                        href="?lang=ar"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setIsLangDropdownOpen(false)}
                                    >
                                        العربية
                                    </Link>
                                    <Link
                                        href="?lang=en"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                        onClick={() => setIsLangDropdownOpen(false)}
                                    >
                                        English
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Theme Toggle */}
                    <button onClick={toggleTheme} className="flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                        {theme === "light" ? <SunIcon /> : <MoonIcon />}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <div className="w-6 flex flex-col gap-1">
                            <span className={`block h-0.5 w-full bg-current transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                            <span className={`block h-0.5 w-full bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-0.5 w-full bg-current transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 right-0 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border border-white/10 shadow-lg rounded-b-lg z-50"
                    style={{
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                >
                    <div className="flex flex-col p-4">
                        <MobileNavItem href="/services" label="الخدمات" />
                        <MobileNavItem href="/features" label="الميزات" isActive />
                        <MobileNavItem href="/pricing" label="الأسعار" />
                        <MobileNavItem href="/contact" label="تواصل معنا" />
                        <MobileNavItem href="/about" label="من نحن" />
                        <MobileNavItem href="/blog" label="المدونة" />
                        <MobileNavItem href="/faq" label="الأسئلة الشائعة" />
                    </div>
                </div>
            )}
        </div>
    );
}

interface NavItemProps {
    href: string;
    label: string;
    isActive?: boolean;
}

function NavItem({ href, label, isActive }: NavItemProps) {
    return (
        <Link
            href={href}
            className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive ? "bg-purple-600 text-white hover:bg-purple-700" : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            )}
        >
            {label}
        </Link>
    );
}

function MobileNavItem({ href, label, isActive }: NavItemProps) {
    return (
        <Link
            href={href}
            className={cn(
                "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                isActive ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            )}
        >
            {label}
        </Link>
    );
}
