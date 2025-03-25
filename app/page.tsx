"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="w-full h-screen flex flex-col justify-evenly md:flex-row items-center px-8 md:px-16 lg:px-32">
            <div className="flex flex-col space-y-5">
                <h1 className="text-5xl font-bold text-[#0c3359]">كلمات تبيع ،،، وقصص تُلهم</h1>
                <h2 className="text-xl font-semibold">
                    مــراحــب <Image src="/star.svg" width={30} height={30} alt="Decorative star icon" className="inline cursor-pointer hover:border" /> أنا إســمــاعــيــل إبــراهــيــم
                    <br /> يقولون للمرء نصيب من اسمه أما أنا فقد أخذت من اسمي الياء
                </h2>
            </div>
            <div className="self-end relative">
                {/* Animated Pen */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ delay: 0.3, duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[80px] right-[420px] z-10">
                    <Image src="/pen.png" alt="Pen" width={120} height={120} />
                </motion.div>

                {/* Floating Note */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ delay: 0.8, duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[200px] -right-[70px] -z-10">
                    <Image src="/note.png" alt="Note" width={150} height={150} />
                </motion.div>

                {/* Main Avatar */}
                <Image src="/avatar-1.png" alt="Avatar" width={500} height={500} />
            </div>
        </section>
    );
}
