"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";


const MainButton = ({ text, className }) => {
    return (
        <button
            className={`w-fit bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-blue-[#fd2862] hover:to-blue-[#ca1d4b] text-white font-bold py-3 px-10 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce ${className}`}
        >
            {text}
        </button>
    );
};

const Hero = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-700 sm:text-4xl lg:text-6xl">
                            كلمات تبيع، وقصص
                            <div className="relative inline-flex">
                                <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                <h1 className="relative text-6xl font-bold text-gray-700 sm:text-4xl lg:text-6xl">تُلهم.</h1>
                            </div>
                        </h1>

                        <p className="mt-8 text-[1.2rem] font-semibold leading-7 text-[#0c3359]">
                            مراحب أنا إسماعيل إبراهيم للمرء نصيب من اسمه، فمنا من يحمل اسمه كهوية، ومنا من يستلهم منه طريقه، أما أنا، فقد أخذت من اسمي الياء
                        </p>

                        <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                            <MainButton text="يلا نشتغل" className="text-lg font-semibold" />
                        </div>
                    </div>

                    <div className="relative">
                        {/* Animated Pen */}
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ delay: 0.3, duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[80px] right-[420px] z-10">
                            <Image src="/pen.png" alt="Pen" width={120} height={120} />
                        </motion.div>
                        {/* Floating Note */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ delay: 0.8, duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-[200px] -right-[70px] -z-10"
                        >
                            <Image src="/note.png" alt="Note" width={100} height={100} />
                        </motion.div>
                        <Image className="w-[80%]" src="/avatar-1.png" width={2000} height={2000} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
