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
                    <Tilt className="Tilt" options={{ max: 25, scale: 1.05, speed: 400 }}>
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden glass border-0 ring-1 ring-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-violet/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                            <img
                                src="/images/avatar.png"
                                alt="Profile"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -inset-2 bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        </div>
                    </Tilt>
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
                        {/* <button className="flex items-center gap-2 px-6 py-3 bg-white text-dark font-bold rounded-lg hover:bg-neon-cyan transition-colors duration-300">
                            Download CV <FaDownload />
                        </button> */}
                        <a
                            href="/pdf/Thanuja.pdf"
                            download
                            className="flex items-center gap-2 px-6 py-3 bg-white text-dark font-bold rounded-lg hover:bg-neon-cyan transition-colors duration-300"
                        >
                            Download My CV <FaDownload />
                        </a>


                        {/* <div className="flex gap-4 items-center pl-4">
                            {[FaLinkedin, FaGithub, FaFacebook, FaInstagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="text-2xl text-gray-400 hover:text-white hover:text-neon-violet transition-colors duration-300">
                                    <Icon />
                                </a>
                            ))}
                        </div> */}
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
