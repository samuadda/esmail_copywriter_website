"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Feather } from "lucide-react";

interface HeroImageSectionProps {
    authorName: string;
    prefersReducedMotion: boolean | null;
}

export function HeroImageSection({ authorName, prefersReducedMotion }: HeroImageSectionProps) {
    return (
        <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.4 }}
            className="relative flex items-center justify-center"
        >
            <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f44674]/20 via-[#4ADE80]/20 to-purple-500/20 rounded-full blur-2xl" />

                {/* Avatar */}
                <m.div
                    animate={prefersReducedMotion ? {} : { y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    <Image
                        src="/avatar-1.webp"
                        alt={authorName}
                        width={600}
                        height={600}
                        className="w-full h-auto relative z-10"
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
                        quality={80}
                        priority
                    />
                </m.div>

                {/* Floating Pen */}
                <m.div
                    animate={prefersReducedMotion ? {} : { y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-1/4 left-0 z-20 hidden lg:block"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#f44674]/30 blur-xl rounded-full" />
                        <Image src="/pen.webp" alt="" width={100} height={100} className="relative" sizes="100px" quality={75} aria-hidden="true" />
                    </div>
                </m.div>

                {/* Floating Note */}
                <m.div
                    animate={prefersReducedMotion ? {} : { y: [0, -15, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-0 z-20 hidden lg:block"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#4ADE80]/30 blur-xl rounded-full" />
                        <Image src="/note.webp" alt="" width={90} height={90} className="relative" sizes="90px" quality={75} aria-hidden="true" />
                    </div>
                </m.div>

                {/* Floating Badge */}
                <m.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 1.2, type: "spring" }}
                    className="absolute -bottom-8 -right-8 z-30 hidden sm:block"
                >
                    <div className="glass-card rounded-2xl p-4 flex items-center gap-4 border border-white/40 dark:border-white/10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#f44674] blur-lg opacity-40 rounded-full" />
                            <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#f44674] to-[#fd2862] flex items-center justify-center text-white shadow-lg border border-white/20">
                                <Feather className="w-6 h-6" aria-hidden="true" />
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-[#f44674] font-bold mb-0.5">إبداع بلا حدود</p>
                            <p className="text-base font-bold text-gray-800 dark:text-white leading-tight">نصنع الأثر</p>
                        </div>
                    </div>
                </m.div>

                {/* Star */}
                <m.div
                    animate={prefersReducedMotion ? {} : { rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 right-10 z-20 hidden lg:block"
                >
                    <Image src="/star.svg" alt="" width={60} height={60} className="opacity-80" aria-hidden="true" />
                </m.div>
            </div>
        </m.div>
    );
}
