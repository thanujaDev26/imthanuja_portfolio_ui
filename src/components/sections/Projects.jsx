import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const loaderOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <section ref={targetRef} className="relative h-[150vh] bg-black" id="projects">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />

                <motion.div
                    style={{ scale }}
                    className="relative w-full h-full flex items-center justify-center"
                >
                    <div className="absolute w-[20vw] h-[20vw] min-w-[200px] min-h-[200px] rounded-full bg-white blur-[80px] opacity-10 mix-blend-screen" />

                    <motion.div style={{ opacity }} className="absolute z-10 text-center">
                        <h3 className="text-5xl sm:text-7xl font-bold text-white tracking-tighter">
                            Enter the<br />Galaxy
                        </h3>
                        <p className="text-gray-400 mt-4 animate-bounce">Scroll to Warp</p>
                    </motion.div>

                    <motion.div
                        style={{ opacity: loaderOpacity }}
                        className="absolute flex flex-col items-center justify-center gap-6"
                    >
                        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                                className="absolute inset-0 rounded-full border-t-2 border-l-2 border-neon-cyan opacity-80"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
                                className="absolute inset-2 rounded-full border-b-2 border-r-2 border-neon-violet opacity-80"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            </div>
                        </div>

                        <div className="text-center">
                            <h4 className="text-white font-bold text-xl tracking-wider">Initializing</h4>
                            <p className="text-gray-500 font-bold text-xs mt-2 animate-pulse">Searching for Projects...</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
