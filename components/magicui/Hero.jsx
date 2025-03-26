import React from "react";
import Image from "next/image";

const MainButton = ({ text }) => {
    return (
        <button className="w-fit bg-gradient-to-r from-[#f44674] to-[#fd2862] hover:from-blue-[#fd2862] hover:to-blue-[#ca1d4b] text-white font-bold text-xl py-3 px-10 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            {text}
        </button>
    );
};


const Hero = () => {
    return (
        <div className="">
            <header className="">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <Image className="w-auto h-8" src="/logo.svg" alt="" width={192} height={192} />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                            </a>

                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                                {" "}
                                السيرة
                            </a>

                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                                الخدمات
                            </a>

                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                                {" "}
                                المدونة{" "}
                            </a>

                            <div className="w-px h-5 bg-black/20"></div>

<MainButton text="النشرة البريدية"/>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-700 sm:text-6xl lg:text-7xl">
                                كلمات تبيع، وقصص
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                    <h1 className="relative text-3xl font-bold text-gray-700 sm:text-6xl lg:text-7xl">تُلهم.</h1>
                                </div>
                            </h1>

                            <p className="mt-8 text-1xl font-semibold leading-7 text-[#0c3359]">
                                مراحب أنا إسماعيل إبراهيم للمرء نصيب من اسمه، فمنا من يحمل اسمه كهوية، ومنا من يستلهم منه طريقه، أما أنا، فقد أخذت من اسمي الياء
                            </p>

                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <MainButton text="يلا نشتغل" />
                            </div>
                        </div>

                        <div>
                            <Image className="w-[80%]" src="/avatar-1.png" width={2000} height={2000} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
