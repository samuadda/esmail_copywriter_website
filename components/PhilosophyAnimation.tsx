"use client";

import { motion } from "framer-motion";
import { Brain, Feather } from "lucide-react";

export default function PhilosophyAnimation() {
  return (
    <div className="relative h-96 w-full rounded-3xl overflow-hidden bg-white dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 flex items-center justify-center group shadow-sm hover:shadow-md transition-all duration-500">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#f44674 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Glowing Orbs Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 bg-[#f44674]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-64 h-64 bg-[#4ADE80]/10 rounded-full blur-3xl"
      />

      {/* Orbital System */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        
        {/* Connecting Orbit Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-gray-200 dark:border-gray-700/50 animate-[spin_20s_linear_infinite]"></div>
        
        {/* Central Hub */}
        <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="relative z-20 px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700 shadow-2xl text-center min-w-[160px]"
        >
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f44674] to-[#4ADE80]">
                علم + فن
            </span>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium tracking-wide">
                سيكولوجية + إبداع
            </div>
        </motion.div>

        {/* Science Orbit (Logic/Brain) - Green */}
        <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                    className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl border-2 border-[#4ADE80]/20 shadow-xl flex items-center justify-center text-[#4ADE80] relative z-10"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                >
                    <Brain className="w-7 h-7" />
                    {/* Tail effect */}
                    <div className="absolute inset-0 bg-[#4ADE80]/20 blur-lg -z-10 rounded-full"></div>
                </motion.div>
            </div>
        </motion.div>

        {/* Art Orbit (Creativity/Feather) - Pink/Red */}
        <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ rotate: 180 }} // Start from opposite side
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                    className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl border-2 border-[#f44674]/20 shadow-xl flex items-center justify-center text-[#f44674] relative z-10"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                >
                    <Feather className="w-7 h-7" />
                    {/* Tail effect */}
                    <div className="absolute inset-0 bg-[#f44674]/20 blur-lg -z-10 rounded-full"></div>
                </motion.div>
            </div>
        </motion.div>

      </div>
    </div>
  );
}

