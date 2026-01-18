import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Cloud Infrastructure Dashboard",
        category: "AWS / React",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "Neon E-Commerce Platform",
        category: "Next.js / Stripe",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    },
    {
        title: "AI Image Generator",
        category: "Python / React",
        image: "https://images.unsplash.com/photo-1620641788421-7f1c91ade639?q=80&w=2672&auto=format&fit=crop",
    },
    {
        title: "Fintech Mobile App",
        category: "Flutter / Firebase",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 sm:px-16 lg:px-24 bg-black relative">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-dark-100 to-transparent pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-neon-violet font-mono text-xl tracking-wider mb-2"
                >
                    03. FEATURED WORKS
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-16"
                >
                    Built to scale
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden cursor-default shadow-2xl"
                        >
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-neon-cyan text-sm font-bold tracking-widest mb-2 uppercase">{project.category}</p>
                                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h4>
                                <div className="h-1 w-0 bg-neon-violet group-hover:w-full transition-all duration-500 delay-100" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
