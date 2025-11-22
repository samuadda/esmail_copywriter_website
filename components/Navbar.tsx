"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

	const moreDropdownRef = useRef<HTMLDivElement>(null);

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

	return (
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="fixed top-0 left-0 right-0 z-50 px-4 pt-5"
			dir="rtl"
		>
			<div className="max-w-7xl mx-auto relative">
				{/* Gradient background with glassmorphism effect */}
				<motion.div
					initial={{ scale: 0.95, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="absolute inset-0 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
					style={{
						backdropFilter: "blur(12px)",
						WebkitBackdropFilter: "blur(12px)",
						boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
					}}
				/>

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
							className="flex items-center gap-2 group"
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 5 }}
								whileTap={{ scale: 0.95 }}
								className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center shadow-lg transition-transform duration-300"
							>
								<span className="text-white text-xl font-bold">
									إ
								</span>
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
						<NavItem href="#about" label="من أنا" delay={0.35} />
						<NavItem href="#services" label="الخدمات" delay={0.4} />
						<NavItem
							href="#portfolio"
							label="الأعمال"
							delay={0.45}
						/>
						<NavItem href="#skills" label="المهارات" delay={0.5} />

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
										className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
									>
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
										>
											<Link
												href="#process"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
												onClick={() =>
													setIsMoreDropdownOpen(false)
												}
											>
												كيف أعمل
											</Link>
											<Link
												href="#testimonials"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
												onClick={() =>
													setIsMoreDropdownOpen(false)
												}
											>
												آراء العملاء
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
						<motion.a
							href="#contact"
							whileHover={{
								scale: 1.05,
								boxShadow: "0 8px 25px rgba(244, 70, 116, 0.4)",
							}}
							whileTap={{ scale: 0.95 }}
							className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] text-white font-semibold text-sm shadow-lg transition-all duration-300 ease-in-out"
						>
							يلا نشتغل
						</motion.a>

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
							className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-xl rounded-2xl z-50 overflow-hidden"
							style={{
								backdropFilter: "blur(12px)",
								WebkitBackdropFilter: "blur(12px)",
							}}
						>
							<div className="flex flex-col p-4">
								<MobileNavItem
									href="#about"
									label="من أنا"
									delay={0.1}
								/>
								<MobileNavItem
									href="#services"
									label="الخدمات"
									delay={0.15}
								/>
								<MobileNavItem
									href="#portfolio"
									label="الأعمال"
									delay={0.2}
								/>
								<MobileNavItem
									href="#skills"
									label="المهارات"
									delay={0.25}
								/>
								<MobileNavItem
									href="#process"
									label="كيف أعمل"
									delay={0.3}
								/>
								<MobileNavItem
									href="#testimonials"
									label="آراء العملاء"
									delay={0.35}
								/>
								<MobileNavItem
									href="#contact"
									label="تواصل معنا"
									delay={0.4}
								/>

								{/* Mobile CTA Button */}
								<motion.a
									href="#contact"
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
}

function NavItem({ href, label, isActive, delay = 0 }: NavItemProps) {
	return (
		<motion.a
			initial={{ opacity: 0, y: -5 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			href={href}
			className={cn(
				"px-3 py-2 rounded-lg text-sm font-medium transition-colors",
				isActive
					? "bg-purple-600 text-white hover:bg-purple-700"
					: "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
			)}
		>
			{label}
		</motion.a>
	);
}

function MobileNavItem({ href, label, isActive, delay = 0 }: NavItemProps) {
	return (
		<motion.a
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.3, delay }}
			whileTap={{ scale: 0.98 }}
			href={href}
			className={cn(
				"px-4 py-3 rounded-lg text-base font-medium transition-colors",
				isActive
					? "bg-purple-600 text-white"
					: "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
			)}
		>
			{label}
		</motion.a>
	);
}
