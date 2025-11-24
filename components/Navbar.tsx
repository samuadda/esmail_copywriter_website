"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

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
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	const moreDropdownRef = useRef<HTMLDivElement>(null);

	// Handle scroll for enhanced glassmorphism
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark");
	};

	// Close dropdowns when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				moreDropdownRef.current &&
				!moreDropdownRef.current.contains(event.target as Node)
			) {
				setIsMoreDropdownOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const isLinkActive = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(href);
	};

	return (
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="fixed top-0 left-0 right-0 z-50 px-4 pt-5"
			dir="rtl"
		>
			<div className="max-w-7xl mx-auto relative group">
				{/* Enhanced Gradient background with glassmorphism effect */}
				<motion.div
					initial={{ scale: 0.95, opacity: 0 }}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					transition={{ duration: 0.5, delay: 0.1 }}
					className={`absolute inset-0 rounded-3xl border transition-all duration-300 ${
						isScrolled
							? "glass-panel shadow-xl"
							: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-transparent"
					}`}
					style={{
						boxShadow: isScrolled
							? "0 8px 40px rgba(0, 0, 0, 0.1)"
							: "none",
					}}
				>
					{/* Animated gradient border effect */}
					<motion.div
						animate={{
							background: [
								"linear-gradient(90deg, rgba(244,70,116,0.3) 0%, rgba(74,222,128,0.3) 100%)",
								"linear-gradient(180deg, rgba(74,222,128,0.3) 0%, rgba(168,85,247,0.3) 100%)",
								"linear-gradient(270deg, rgba(168,85,247,0.3) 0%, rgba(244,70,116,0.3) 100%)",
								"linear-gradient(360deg, rgba(244,70,116,0.3) 0%, rgba(74,222,128,0.3) 100%)",
							],
						}}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: "linear",
						}}
						className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
						style={{ padding: "1px" }}
					/>
				</motion.div>

				<nav className="relative flex items-center justify-between px-4 py-4 md:px-8 z-10">
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex items-center"
					>
						<Link
							href="/"
							className="flex items-center gap-3 group"
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 5 }}
								whileTap={{ scale: 0.95 }}
								className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center shadow-lg transition-transform duration-300"
							>
								<Image
									src="/logo.svg"
									alt="Logo"
									width={24}
									height={24}
									className="brightness-0 invert"
									style={{
										filter: "brightness(0) invert(1)",
									}}
								/>
							</motion.div>
							<div className="hidden md:block">
								<p className="text-lg font-bold text-gray-800 dark:text-white">
									إسماعيل إبراهيم
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">
									كاتب محتوى إبداعي
								</p>
							</div>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="hidden md:flex items-center gap-1 lg:gap-2"
					>
						<NavItem href="/about" label="من أنا" delay={0.35} isActive={isLinkActive("/about")} />
						<NavItem href="/services" label="الخدمات" delay={0.4} isActive={isLinkActive("/services")} />
						<NavItem href="/portfolio" label="الأعمال" delay={0.45} isActive={isLinkActive("/portfolio")} />
						<NavItem href="/blog" label="المدونة" delay={0.48} isSpecial isActive={isLinkActive("/blog")} />

						{/* More Dropdown */}
						<div className="relative" ref={moreDropdownRef}>
							<button
								onClick={() =>
									setIsMoreDropdownOpen(!isMoreDropdownOpen)
								}
								className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
							>
								المزيد
								<ChevronDownIcon />
							</button>

							<AnimatePresence>
								{isMoreDropdownOpen && (
									<motion.div
										initial={{
											opacity: 0,
											y: -10,
											scale: 0.95,
										}}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{
											opacity: 0,
											y: -10,
											scale: 0.95,
										}}
										transition={{ duration: 0.2 }}
										className="absolute left-0 mt-2 w-48 rounded-xl shadow-lg glass-panel z-50"
									>
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
										>
											<Link
												href="/services"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
												onClick={() =>
													setIsMoreDropdownOpen(false)
												}
											>
												كيف أعمل
											</Link>
											<Link
												href="/contact"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
												onClick={() =>
													setIsMoreDropdownOpen(false)
												}
											>
												تواصل معي
											</Link>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</motion.div>

					{/* CTA Button, Theme Toggle and Mobile Menu Toggle */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="flex items-center gap-3"
					>
						{/* CTA Button */}
                        <MagneticButton>
                            <motion.a
                                href="/contact"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 8px 25px rgba(244, 70, 116, 0.4)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-semibold text-sm shadow-lg transition-all duration-300 ease-in-out"
                            >
                                يلا نشتغل
                            </motion.a>
                        </MagneticButton>

						{/* Theme Toggle */}
						<motion.button
							whileHover={{ scale: 1.1, rotate: 180 }}
							whileTap={{ scale: 0.95 }}
							onClick={toggleTheme}
							className="flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
							aria-label="Toggle theme"
						>
							{theme === "light" ? <SunIcon /> : <MoonIcon />}
						</motion.button>

						{/* Mobile Menu Toggle */}
						<motion.button
							whileTap={{ scale: 0.95 }}
							className="md:hidden p-2"
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							aria-label="Toggle mobile menu"
						>
							<div className="w-6 flex flex-col gap-1">
								<span
									className={`block h-0.5 w-full bg-current transition-all ${
										isMobileMenuOpen
											? "rotate-45 translate-y-1.5"
											: ""
									}`}
								/>
								<span
									className={`block h-0.5 w-full bg-current transition-all ${
										isMobileMenuOpen ? "opacity-0" : ""
									}`}
								/>
								<span
									className={`block h-0.5 w-full bg-current transition-all ${
										isMobileMenuOpen
											? "-rotate-45 -translate-y-1.5"
											: ""
									}`}
								/>
							</div>
						</motion.button>
					</motion.div>
				</nav>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="md:hidden absolute top-full left-0 right-0 mt-2 glass-panel rounded-2xl z-50 overflow-hidden"
						>
							<div className="flex flex-col p-4">
								<MobileNavItem
									href="/about"
									label="من أنا"
									delay={0.1}
                                    isActive={isLinkActive("/about")}
								/>
								<MobileNavItem
									href="/services"
									label="الخدمات"
									delay={0.15}
                                    isActive={isLinkActive("/services")}
								/>
								<MobileNavItem
									href="/portfolio"
									label="الأعمال"
									delay={0.2}
                                    isActive={isLinkActive("/portfolio")}
								/>
								<MobileNavItem
									href="/blog"
									label="المدونة"
									delay={0.22}
									isSpecial
                                    isActive={isLinkActive("/blog")}
								/>
								<MobileNavItem
									href="/contact"
									label="تواصل معنا"
									delay={0.4}
                                    isActive={isLinkActive("/contact")}
								/>

								{/* Mobile CTA Button */}
								<motion.a
									href="/contact"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: 0.45 }}
									whileTap={{ scale: 0.98 }}
									className="mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-semibold text-base text-center shadow-lg"
								>
									يلا نشتغل
								</motion.a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}

interface NavItemProps {
	href: string;
	label: string;
	isActive?: boolean;
	delay?: number;
	isSpecial?: boolean;
}

function NavItem({ href, label, isActive, delay = 0, isSpecial }: NavItemProps) {
	return (
		<Link href={href} passHref legacyBehavior>
            <motion.a
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors relative group/item",
                    isActive
                        ? "bg-[#f44674]/10 text-[#f44674]"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
                    isSpecial ? "text-gray-900 dark:text-white font-bold" : ""
                )}
            >
                <span className="relative z-10">{label}</span>
                {isSpecial && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-[#4ADE80] to-[#22c55e] rounded-full opacity-80" />
                )}
                {isActive && !isSpecial && (
                    <motion.div 
                        layoutId="activeNav" 
                        className="absolute inset-0 rounded-lg bg-[#f44674]/5 dark:bg-[#f44674]/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </motion.a>
        </Link>
	);
}

function MobileNavItem({ href, label, isActive, delay = 0, isSpecial }: NavItemProps) {
	return (
        <Link href={href} passHref legacyBehavior>
            <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-colors relative",
                    isActive
                        ? "bg-[#f44674]/10 text-[#f44674]"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
                    isSpecial ? "font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50" : ""
                )}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {label}
                    {isSpecial && (
                        <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                    )}
                </span>
            </motion.a>
        </Link>
	);
}
