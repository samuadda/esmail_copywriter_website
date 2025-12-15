"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import { NAV_CONTENT } from "@/lib/content";

// Simple utility function for class names
function cn(...classes: (string | boolean | undefined)[]) {
	return classes.filter(Boolean).join(" ");
}

// Icons as components
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
		aria-hidden="true"
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
		aria-hidden="true"
	>
		<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
	</svg>
);

export default function Navbar() {
	const prefersReducedMotion = useReducedMotion();
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	// Handle scroll for enhanced glassmorphism
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
		document.documentElement.classList.toggle("dark");
	};

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
			transition={{
				duration: prefersReducedMotion ? 0 : 0.5,
				ease: "easeOut",
			}}
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
					transition={{
						duration: prefersReducedMotion ? 0 : 0.5,
						delay: prefersReducedMotion ? 0 : 0.1,
					}}
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
						animate={
							prefersReducedMotion
								? {}
								: {
										background: [
											"linear-gradient(90deg, rgba(244,70,116,0.3) 0%, rgba(74,222,128,0.3) 100%)",
											"linear-gradient(180deg, rgba(74,222,128,0.3) 0%, rgba(168,85,247,0.3) 100%)",
											"linear-gradient(270deg, rgba(168,85,247,0.3) 0%, rgba(244,70,116,0.3) 100%)",
											"linear-gradient(360deg, rgba(244,70,116,0.3) 0%, rgba(74,222,128,0.3) 100%)",
										],
								  }
						}
						transition={{
							duration: 10,
							repeat: Infinity,
							ease: "linear",
						}}
						className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
						style={{ padding: "1px" }}
					/>
				</motion.div>

				<nav
					className="relative flex items-center justify-between px-4 py-4 md:px-8 z-10"
					aria-label="التنقل الرئيسي"
				>
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.5,
							delay: prefersReducedMotion ? 0 : 0.2,
						}}
						className="flex items-center"
					>
						<Link
							href="/"
							className="flex items-center gap-3 group min-w-0"
							aria-label="الصفحة الرئيسية"
						>
							<motion.div
								whileHover={
									prefersReducedMotion
										? {}
										: { scale: 1.1, rotate: 5 }
								}
								whileTap={{ scale: 0.95 }}
								className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center shadow-lg transition-transform duration-300 flex-shrink-0"
							>
								<Image
									src={NAV_CONTENT.brand.logo}
									alt=""
									width={24}
									height={24}
									className="brightness-0 invert"
									style={{
										filter: "brightness(0) invert(1)",
									}}
									aria-hidden="true"
								/>
							</motion.div>
							<div className="hidden md:block min-w-0">
								<p className="text-lg font-bold text-gray-800 dark:text-white truncate">
									{NAV_CONTENT.brand.name}
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400 truncate">
									{NAV_CONTENT.brand.tagline}
								</p>
							</div>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.5,
							delay: prefersReducedMotion ? 0 : 0.3,
						}}
						className="hidden md:flex items-center gap-1 lg:gap-2 min-w-0"
					>
						{NAV_CONTENT.links.map((link, index) => (
							<NavItem
								key={link.href}
								href={link.href}
								label={link.label}
								delay={0.35 + index * 0.05}
								isActive={isLinkActive(link.href)}
								isSpecial={
									"isSpecial" in link ? link.isSpecial : false
								}
							/>
						))}
					</motion.div>

					{/* CTA Button, Theme Toggle and Mobile Menu Toggle */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: prefersReducedMotion ? 0 : 0.5,
							delay: prefersReducedMotion ? 0 : 0.6,
						}}
						className="flex items-center gap-3 flex-shrink-0"
					>
						{/* CTA Button */}
						<MagneticButton>
							<motion.a
								href={NAV_CONTENT.cta.href}
								whileHover={
									prefersReducedMotion
										? {}
										: {
												scale: 1.05,
												boxShadow:
													"0 8px 25px rgba(244, 70, 116, 0.4)",
										  }
								}
								whileTap={{ scale: 0.95 }}
								className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-semibold text-sm shadow-lg transition-all duration-300 ease-in-out whitespace-nowrap min-w-0"
							>
								{NAV_CONTENT.cta.label}
							</motion.a>
						</MagneticButton>

						{/* Theme Toggle */}
						<motion.button
							whileHover={
								prefersReducedMotion
									? {}
									: { scale: 1.1, rotate: 180 }
							}
							whileTap={{ scale: 0.95 }}
							onClick={toggleTheme}
							className="flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
							aria-label={NAV_CONTENT.ariaLabels.themeToggle}
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
							aria-label={NAV_CONTENT.ariaLabels.mobileMenu}
							aria-expanded={isMobileMenuOpen}
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
							transition={{
								duration: prefersReducedMotion ? 0 : 0.3,
							}}
							className="md:hidden absolute top-full left-0 right-0 mt-2 glass-panel rounded-2xl z-50 overflow-hidden"
							role="dialog"
							aria-label="قائمة التنقل"
						>
							<div className="flex flex-col p-4">
								{NAV_CONTENT.mobileLinks.map((link, index) => (
									<MobileNavItem
										key={link.href}
										href={link.href}
										label={link.label}
										delay={0.1 + index * 0.05}
										isActive={isLinkActive(link.href)}
										isSpecial={
											"isSpecial" in link
												? link.isSpecial
												: false
										}
									/>
								))}

								{/* Mobile CTA Button */}
								<motion.a
									href={NAV_CONTENT.cta.href}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: prefersReducedMotion
											? 0
											: 0.3,
										delay: prefersReducedMotion ? 0 : 0.45,
									}}
									whileTap={{ scale: 0.98 }}
									className="mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-semibold text-base text-center shadow-lg whitespace-nowrap"
								>
									{NAV_CONTENT.cta.label}
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

function NavItem({
	href,
	label,
	isActive,
	delay = 0,
	isSpecial,
}: NavItemProps) {
	const prefersReducedMotion = useReducedMotion();
	return (
		<Link href={href} passHref legacyBehavior>
			<motion.a
				initial={{ opacity: 0, y: -5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay }}
				whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={cn(
					"px-3 py-2 rounded-lg text-sm font-medium transition-colors relative group/item min-w-0",
					isActive
						? "bg-[#f44674]/10 text-[#f44674]"
						: "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
					isSpecial ? "text-gray-900 dark:text-white font-bold" : ""
				)}
			>
				<span className="relative z-10 truncate block">{label}</span>
				{isSpecial && (
					<span
						className="absolute bottom-1 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-[#4ADE80] to-[#22c55e] rounded-full opacity-80"
						aria-hidden="true"
					/>
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

function MobileNavItem({
	href,
	label,
	isActive,
	delay = 0,
	isSpecial,
}: NavItemProps) {
	const prefersReducedMotion = useReducedMotion();
	return (
		<Link href={href} passHref legacyBehavior>
			<motion.a
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay }}
				whileTap={{ scale: 0.98 }}
				className={cn(
					"px-4 py-3 rounded-lg text-base font-medium transition-colors relative min-w-0",
					isActive
						? "bg-[#f44674]/10 text-[#f44674]"
						: "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
					isSpecial
						? "font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800/50"
						: ""
				)}
			>
				<span className="relative z-10 flex items-center gap-2 min-w-0">
					<span className="truncate">{label}</span>
					{isSpecial && (
						<span
							className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse flex-shrink-0"
							aria-hidden="true"
						/>
					)}
				</span>
			</motion.a>
		</Link>
	);
}
