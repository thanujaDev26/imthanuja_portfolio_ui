import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaDocker, FaAws, FaGoogle, FaGithub, FaPython } from 'react-icons/fa';

const technologies = [
    { name: "Java", icon: FaJava, color: "#f89820" },
    { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
    { name: "Python", icon: FaPython, color: "#f7df1e" },
    { name: "Docker", icon: FaDocker, color: "#2496ed" },
    { name: "GitHub Actions", icon: FaGithub, color: "#ffffff" },
    { name: "AWS", icon: FaAws, color: "#ff9900" },
    { name: "Google Cloud", icon: FaGoogle, color: "#4285f4" },
];

const Technology = () => {
    return (
        <section className="py-20 px-6 sm:px-16 lg:px-24 min-h-[80vh] flex flex-col justify-center" id="tech">
            <div className="max-w-screen-2xl mx-auto text-center w-full">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold text-white mb-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                    Tech Debris
                </motion.h3>

                {/* Zero Gravity Container */}
                <div className="relative w-full flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 perspective-1000">
                    {technologies.map((tech, i) => {
                        // Random float parameters for organic feel
                        const randomDuration = 3 + Math.random() * 3; // 3s to 6s
                        const randomDelay = Math.random() * 2;
                        const randomY = 15 + Math.random() * 15; // 15px to 30px float range

                        return (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="relative group"
                            >
                                {/* Floating Animation Wrapper */}
                                <motion.div
                                    animate={{
                                        y: [0, -randomY, 0],
                                        rotate: [0, 1, -1, 0], // Subtle rotation
                                    }}
                                    transition={{
                                        duration: randomDuration,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut",
                                        delay: randomDelay,
                                    }}
                                    className="w-28 h-28 sm:w-36 sm:h-36 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl flex flex-col justify-center items-center gap-3 cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30"
                                    style={{
                                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {/* Tech Icon */}
                                    <tech.icon
                                        className="text-4xl sm:text-5xl text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                                        style={{ color: tech.color, filter: 'grayscale(100%) brightness(1.5)' }}
                                    />

                                    {/* Label */}
                                    <span className="text-xs sm:text-sm font-code text-gray-400 group-hover:text-white tracking-wider uppercase opacity-80 group-hover:opacity-100">
                                        {tech.name}
                                    </span>

                                    {/* Holographic Edge Glow (Standard css based) */}
                                    <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl sm:rounded-2xl transition-all duration-500" />

                                    {/* Corner Accents for "Space Crate" look */}
                                    <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white/30 rounded-full" />
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/30 rounded-full" />
                                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/30 rounded-full" />
                                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-white/30 rounded-full" />

                                </motion.div>

                                {/* Floor Shadow Effect to sell altitude */}
                                <motion.div
                                    animate={{
                                        scale: [1, 0.8, 1],
                                        opacity: [0.3, 0.1, 0.3],
                                    }}
                                    transition={{
                                        duration: randomDuration,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut",
                                        delay: randomDelay,
                                    }}
                                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/50 blur-lg rounded-[100%] pointer-events-none"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Technology;
