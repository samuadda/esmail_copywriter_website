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
			<div className="max-w-7xl mx-auto relative">
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
				/>

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
										: {
												scale: 1.12,
												rotate: [0, -8, 8, -4, 0],
												boxShadow:
													"0 8px 24px rgba(244, 70, 116, 0.4)",
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 15,
												},
										  }
								}
								whileTap={{ scale: 0.92 }}
								className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center shadow-lg transition-all duration-300 flex-shrink-0 relative overflow-hidden group/logo"
							>
								{/* Modern glow effect */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 rounded-xl"
									aria-hidden="true"
								/>
								<motion.div
									className="relative z-10"
									whileHover={
										prefersReducedMotion
											? {}
											: {
													scale: 1.1,
													transition: {
														duration: 0.2,
													},
											  }
									}
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
												scale: 1.06,
												y: -1,
												boxShadow:
													"0 10px 30px rgba(244, 70, 116, 0.5)",
												transition: {
													duration: 0.2,
													ease: "easeOut",
												},
										  }
								}
								whileTap={{ scale: 0.96 }}
								className="hidden md:flex px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-semibold text-sm shadow-lg transition-all duration-300 ease-out whitespace-nowrap min-w-0 relative overflow-hidden group/cta"
							>
								{/* Modern shimmer effect */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
									initial={{ x: "-100%" }}
									whileHover={
										prefersReducedMotion
											? {}
											: {
													x: "200%",
													transition: {
														duration: 0.6,
														ease: "easeInOut",
													},
											  }
									}
								/>
								<span className="relative z-10">
									{NAV_CONTENT.cta.label}
								</span>
							</motion.a>
						</MagneticButton>

						{/* Theme Toggle */}
						<motion.button
							whileHover={
								prefersReducedMotion
									? {}
									: {
											scale: 1.12,
											rotate: 180,
											transition: {
												duration: 0.3,
												ease: "easeOut",
											},
									  }
							}
							whileTap={{ scale: 0.92 }}
							onClick={toggleTheme}
							className="flex items-center justify-center rounded-full p-2.5 text-gray-700 dark:text-gray-200 bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 relative overflow-hidden group/theme"
							aria-label={NAV_CONTENT.ariaLabels.themeToggle}
						>
							{/* Subtle glow on hover */}
							<motion.div
								className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f44674]/10 to-[#4ADE80]/10 opacity-0 group-hover/theme:opacity-100 transition-opacity duration-300"
								aria-hidden="true"
							/>
							<motion.div
								className="relative z-10"
								animate={
									prefersReducedMotion
										? {}
										: {
												rotate:
													theme === "light" ? 0 : 180,
										  }
								}
								transition={{
									duration: 0.4,
									ease: "easeInOut",
								}}
							>
								{theme === "light" ? <SunIcon /> : <MoonIcon />}
							</motion.div>
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
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link href={href} passHref legacyBehavior>
			<motion.a
				initial={{ opacity: 0, y: -5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay }}
				whileHover={
					prefersReducedMotion
						? {}
						: {
								scale: 1.05,
								transition: { duration: 0.2, ease: "easeOut" },
						  }
				}
				whileTap={{ scale: 0.98 }}
				onMouseEnter={() => !prefersReducedMotion && setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className={cn(
					"px-4 py-2.5 rounded-xl text-sm font-medium relative min-w-0 overflow-hidden no-underline",
					isActive
						? "text-[#f44674] dark:text-[#f44674]"
						: "text-gray-700 dark:text-gray-200",
					isSpecial ? "text-gray-900 dark:text-white font-bold" : ""
				)}
			>
				{/* Modern hover background with smooth transition */}
				{!isActive && !isSpecial && (
					<motion.div
						className="absolute inset-0 rounded-xl bg-gray-100 dark:bg-gray-800"
						initial={{ opacity: 0 }}
						animate={{ opacity: isHovered ? 0.8 : 0 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
					/>
				)}

				{/* Active state background */}
				{isActive && !isSpecial && (
					<motion.div
						layoutId="activeNav"
						className="absolute inset-0 rounded-xl bg-[#f44674]/10 dark:bg-[#f44674]/20"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.2 }}
					/>
				)}

				<span className="relative z-10 truncate block">{label}</span>
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
				whileHover={
					prefersReducedMotion
						? {}
						: {
								x: 6,
								transition: { duration: 0.2, ease: "easeOut" },
						  }
				}
				whileTap={{ scale: 0.98 }}
				className={cn(
					"px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 relative min-w-0 group/mobile overflow-hidden no-underline",
					isActive
						? "text-[#f44674] dark:text-[#f44674]"
						: "text-gray-700 dark:text-gray-200"
				)}
			>
				{/* Modern hover background */}
				<motion.div
					className={cn(
						"absolute inset-0 rounded-xl transition-all duration-300",
						isActive
							? "bg-[#f44674]/10 dark:bg-[#f44674]/20"
							: "bg-gray-100/0 dark:bg-gray-800/0 group-hover/mobile:bg-gray-100/80 dark:group-hover/mobile:bg-gray-800/80"
					)}
					initial={false}
				/>

				{/* Modern left border indicator */}
				{!isActive && !isSpecial && (
					<motion.div
						className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#f44674] to-[#fd2862] rounded-l-full"
						initial={false}
						whileHover={
							prefersReducedMotion
								? {}
								: {
										height: "60%",
										transition: {
											duration: 0.3,
											ease: "easeOut",
										},
								  }
						}
					/>
				)}

				<span className="relative z-10 flex items-center gap-2 min-w-0">
					<span className="truncate">{label}</span>
					{isSpecial && (
						<motion.span
							className="w-2 h-2 rounded-full bg-[#4ADE80] flex-shrink-0"
							animate={
								prefersReducedMotion
									? {}
									: {
											scale: [1, 1.2, 1],
											opacity: [1, 0.8, 1],
									  }
							}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							aria-hidden="true"
						/>
					)}
				</span>
			</motion.a>
		</Link>
	);
}
