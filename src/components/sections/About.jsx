import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaDownload } from 'react-icons/fa';
import { Tilt } from 'react-tilt';


const About = () => {
    return (
        <section id="about" className="relative w-full min-h-screen py-20 px-6 sm:px-16 lg:px-24 bg-dark-100/50 flex items-center">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-16 items-center">


                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full max-w-md"
                >
                    <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                        <motion.div
                            animate={{ y: [-20, 10, -20] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative w-full h-full"
                        >
                            <img
                                src="/images/astro-me.png"
                                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]"
                                alt="Thanuja as Astronaut"
                            />
                        </motion.div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex flex-col justify-center space-y-6 text-left"
                >
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        I help turn your name <br />
                        <span className="text-gray-500">into a personal digital brand.</span>
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        I am a passionate <span className="text-white font-medium">Software Engineer</span> and <span className="text-white font-medium">DevOps Engineer</span>,
                        helping turn ideas into scalable digital solutions for real world challenges.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">

                        <a
                            href="/pdf/Thanuja.pdf"
                            download
                            className="group flex items-center gap-3 px-8 py-3 bg-black/50 backdrop-blur-md border border-neon-cyan/50 text-neon-cyan font-mono font-bold rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 tracking-widest uppercase"
                        >
                            <span>COLLECT ARTIFACT</span>
                            <FaDownload className="group-hover:translate-y-1 transition-transform" />
                        </a>


                        <div className="flex gap-4 items-center pl-4">
                            <a
                                href="https://www.linkedin.com/in/thanuja-priyadarshane/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-white hover:text-neon-violet transition-colors duration-300"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/thanujaDev26"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-white hover:text-neon-violet transition-colors duration-300"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.facebook.com/thanuja.priyadarshana.14/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-white hover:text-neon-violet transition-colors duration-300"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://www.instagram.com/_thanuja10_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-white hover:text-neon-violet transition-colors duration-300"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
