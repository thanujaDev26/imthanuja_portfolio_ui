import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarsCanvas from '../../components/canvas/Stars';
import { FaArrowDown } from 'react-icons/fa';

const titles = [
    "I'm a Software Engineer",
    "DevOps Engineer",
    "I build scalable systems",
    "I turn your name into a brand.",
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden">
            {/* Background Particles */}
            <div className="absolute inset-0 z-0">
                <StarsCanvas />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-screen-2xl mx-auto">

                {/* Intro */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-gray-400 text-lg sm:text-xl font-light tracking-wider mb-4 uppercase"
                >
                    Welcome to my digital space
                </motion.p>

                {/* Morphing Text */}
                <div className="h-20 sm:h-32 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={index}
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-xl"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-violet">
                                {titles[index]}
                            </span>
                        </motion.h1>
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="mt-12"
                >
                    <button
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-3 bg-white/10 text-white rounded-full font-semibold overflow-hidden transition-all hover:bg-white/20 hover:scale-105 border border-white/10 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,255,242,0.4)]"
                    >
                        Get Started
                        <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-neon-cyan animate-pulse"></div>
                    </button>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 w-full flex justify-center items-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <a href="#about" className="flex flex-col items-center">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-500 flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-neon-cyan mb-1"
                        />
                    </div>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
