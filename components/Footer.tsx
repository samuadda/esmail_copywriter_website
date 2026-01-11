"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTENT } from "@/lib/content";
import { FOCUS_RING_INPUT } from "@/lib/design-utils";

// Social icons as components (keeping icons in component since they're presentation)
const SocialIcon = ({ name }: { name: string }) => {
	const icons: Record<string, React.ReactElement> = {
		"تويتر": (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
			</svg>
		),
		"لينكدإن": (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
			</svg>
		),
		"إنستغرام": (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
			</svg>
		),
		"بيهانس": (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
			</svg>
		),
	};
	return icons[name] || null;
};

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden" role="contentinfo">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#f44674]/10 to-[#fd2862]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#4ADE80]/10 to-[#22c55e]/10 rounded-full blur-3xl"></div>
            </div>

            <div ref={ref} className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 min-w-0"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f44674] to-[#fd2862] flex items-center justify-center shadow-lg flex-shrink-0"
                            >
                                <Image 
                                    src={FOOTER_CONTENT.brand.name === "إسماعيل إبراهيم" ? "/logo.svg" : "/logo.svg"} 
                                    alt="" 
                                    width={28} 
                                    height={28} 
                                    className="brightness-0 invert"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                    aria-hidden="true"
                                />
                            </motion.div>
                            <div className="min-w-0">
                                <h3 className="text-2xl font-bold truncate">{FOOTER_CONTENT.brand.name}</h3>
                                <p className="text-sm text-gray-400 truncate">{FOOTER_CONTENT.brand.tagline}</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-md break-words">
                            {FOOTER_CONTENT.brand.description}
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-4 flex-wrap">
                            {FOOTER_CONTENT.social.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 200 }}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all flex-shrink-0 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <SocialIcon name={social.name} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Column 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold mb-6">{FOOTER_CONTENT.sections.navigation}</h4>
                        <ul className="space-y-3">
                            {FOOTER_CONTENT.navigation.map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#f44674] transition-colors block truncate"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Links Column 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-bold mb-6">{FOOTER_CONTENT.sections.more}</h4>
                        <ul className="space-y-3">
                            {FOOTER_CONTENT.support.map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#f44674] transition-colors block truncate"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Booking CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="py-8 border-t border-gray-800"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">جاهز لبدء مشروعك؟</h3>
                        <p className="text-gray-400 mb-6 break-words">
                            احجز مكالمة استشارة مجانية لتحديد العرض المناسب لمشروعك
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-[#fd2862] hover:to-[#ca1d4b] font-semibold shadow-lg transition-all whitespace-nowrap text-white"
                        >
                            احجز استشارتك المجانية
                        </motion.a>
                    </div>
                </motion.div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="py-8 border-t border-gray-800"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">{FOOTER_CONTENT.newsletter.title}</h3>
                        <p className="text-gray-400 mb-6 break-words">
                            {FOOTER_CONTENT.newsletter.description}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" aria-label="نشرة بريدية">
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                placeholder={FOOTER_CONTENT.newsletter.placeholder}
                                className={`flex-1 px-6 py-3 rounded-full bg-gray-800 border border-gray-700 ${FOCUS_RING_INPUT} outline-none transition-all text-white placeholder-gray-500 min-w-0`}
                                aria-label={FOOTER_CONTENT.newsletter.placeholder}
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-[#fd2862] hover:to-[#ca1d4b] font-semibold shadow-lg transition-all whitespace-nowrap"
                            >
                                {FOOTER_CONTENT.newsletter.button}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom Bar with Signature Slogan */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="py-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm break-words text-center md:text-right">
                            {FOOTER_CONTENT.copyright}
                        </p>
                        
                        {/* Signature Slogan - Subtle and Elegant */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group cursor-default"
                        >
                            <p className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-300 font-arabic tracking-wide whitespace-nowrap">
                                {FOOTER_CONTENT.signature}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
