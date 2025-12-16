"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { FOCUS_RING_INPUT, getSectionSeparator } from "@/lib/design-utils";

export default function Newsletter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email) {
            setError("يرجى إدخال البريد الإلكتروني");
            return;
        }
        
        // Basic email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("يرجى إدخال بريد إلكتروني صحيح");
            return;
        }

        setStatus("loading");
        setError("");
        
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className={`py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden ${getSectionSeparator()}`}>
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#f44674]/5 rounded-full blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div ref={ref} className="px-4 mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#f44674] to-transparent opacity-50"></div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        نشرة بريدية <span className="text-[#f44674]">مختلفة</span>
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                        انضم لقائمتي الخاصة حيث أشارك أسرار الكتابة، قصص ملهمة، وتجارب شخصية لا أنشرها في أي مكان آخر. بلا إزعاج، رسالة واحدة أسبوعياً مليئة بالقيمة.
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (error) setError("");
                                }}
                                disabled={status === "success"}
                                className={`w-full px-6 py-4 rounded-full bg-white/10 border text-white placeholder-gray-400 focus:outline-none focus:bg-white/15 transition-all pr-14 ${
                                    error 
                                        ? "border-red-500/50 focus:border-red-500" 
                                        : `border-white/20 ${FOCUS_RING_INPUT}`
                                }`}
                            />
                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className={`absolute left-2 top-2 bottom-2 aspect-square rounded-full flex items-center justify-center transition-all ${
                                    status === "success" 
                                        ? "bg-green-500 text-white" 
                                        : "bg-[#f44674] text-white hover:bg-[#d63d66]"
                                }`}
                            >
                                {status === "loading" ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : status === "success" ? (
                                    <CheckCircle className="w-5 h-5" />
                                ) : (
                                    <Send className="w-5 h-5 -ml-0.5" />
                                )}
                            </button>
                        </div>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-sm mt-2 font-medium text-right px-4"
                            >
                                {error}
                            </motion.p>
                        )}
                        {status === "success" && (
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-400 text-sm mt-3 font-medium"
                            >
                                تم الاشتراك بنجاح! تفقد بريدك الإلكتروني قريباً.
                            </motion.p>
                        )}
                    </form>
                    
                    <p className="mt-6 text-xs text-gray-500">
                        أحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

