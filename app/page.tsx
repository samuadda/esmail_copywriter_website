"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Hero from '../components/magicui/Hero'

const MainButton = ({ text }: { text: string }) => {
    return (
        <button className="w-fit bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-blue-[#fd2862] hover:to-blue-[#ca1d4b] text-white font-bold py-2 px-10 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            {text}
        </button>
    );
};




export default function HeroSection() {
    return (
        // <section className="w-full h-screen flex flex-col justify-evenly md:flex-row items-center px-10 md:px-16 lg:px-32">
        //     <div className="flex flex-col space-y-5 justify-center max-w-lg">
        //         <h1 className="text-4xl font-bold text-[#0c3359] leading-14"> كلمات تبيع، وقصص تُلهم، وأفكار تصنع الفرق، وإبداع يُحرك المشاعر</h1>
        //         <p className="text-2xl font-medium text-[#0f3f6f] leading-12">
        //             مــراحــب <Image src="/star.svg" width={30} height={30} alt="Decorative star icon" className="inline cursor-pointer hover:border" /> أنا إسماعيل إبراهيم، للمرء نصيب من اسمه، فمنا
        //             من يحمل اسمه كهوية، ومنا من يستلهم منه طريقه. أما أنا، فقد أخذت من اسمي الياء،اع.
        //         </p>
        //         <MainButton text="يلا نشتغل" />
        //     </div>
        //     <div className="self-end relative">
        //         {/* Animated Pen */}
        //         <motion.div animate={{ y: [0, -10, 0] }} transition={{ delay: 0.3, duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[80px] right-[420px] z-10">
        //             <Image src="/pen.png" alt="Pen" width={120} height={120} />
        //         </motion.div>

        //         {/* Floating Note */}
        //         <motion.div animate={{ y: [0, -10, 0] }} transition={{ delay: 0.8, duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[200px] -right-[70px] -z-10">
        //             <Image src="/note.png" alt="Note" width={150} height={150} />
        //         </motion.div>

        //         {/* Main Avatar */}
        //         <Image src="/avatar-1.png" alt="Avatar" width={500} height={500} />
        //     </div>
        // </section>
        <>
            <Hero/>
        </>
    );
}
