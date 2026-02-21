import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJs, 
  FaDocker, 
  FaGoogle, 
  FaPython 
} from 'react-icons/fa';

import { 
  SiGo, 
  SiTerraform, 
  SiGooglecloud 
} from 'react-icons/si';


const SHAPES = {
    shard: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
    crystal: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    void: "circle(50% at 50% 50%)",
    asteroid: "50% 50% 50% 50% / 60% 40% 60% 40%",
    monolith: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
};

const technologies = [
  {
    name: "Go",
    icon: SiGo,
    color: "#00ADD8",
    shape: "shard",
    size: "w-32 h-32",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    shape: "crystal",
    size: "w-32 h-36",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    shape: "asteroid",
    size: "w-36 h-36",
  },
  {
    name: "Terraform",
    icon: SiTerraform,
    color: "#7B42BC",
    shape: "crystal",
    size: "w-32 h-36",
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
    color: "#4285F4",
    shape: "shard",
    size: "w-32 h-32",
  },
];

const Technology = () => {
    return (
        <section className="py-20 px-6 sm:px-16 lg:px-24 min-h-[80vh] flex flex-col justify-center overflow-hidden" id="tech">
            <div className="max-w-screen-2xl mx-auto text-center w-full relative z-10">
                <motion.h3
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold text-white mb-24 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] tracking-tight"
                >
                    Tech Debris
                </motion.h3>

                <div className="relative w-full flex flex-wrap justify-center gap-16 lg:gap-24 perspective-1000">
                    {technologies.map((tech, i) => {
                        const randomDuration = 4 + Math.random() * 4;
                        const randomDelay = Math.random() * 2;
                        const randomY = 20 + Math.random() * 20;
                        const randomRotate = -5 + Math.random() * 10;

                        const isBorderRadius = tech.shape === 'asteroid';
                        const styleObject = isBorderRadius
                            ? { borderRadius: SHAPES[tech.shape] }
                            : { clipPath: SHAPES[tech.shape] };

                        return (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring", stiffness: 50 }}
                                className="relative group"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -randomY, 0],
                                        rotate: [randomRotate, -randomRotate, randomRotate],
                                    }}
                                    transition={{
                                        duration: randomDuration,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut",
                                        delay: randomDelay,
                                    }}
                                    className={`relative ${tech.size} backdrop-blur-md bg-white/5 border border-white/20 flex flex-col justify-center items-center gap-2 cursor-pointer transition-colors duration-500 overflow-hidden group-hover:bg-white/10`}
                                    style={{
                                        ...styleObject,
                                        boxShadow: isBorderRadius ? "0 0 30px rgba(0,0,0,0.5)" : "none" 
                                    }}
                                >
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px] opacity-20 pointer-events-none" />

                                    <tech.icon
                                        className="text-4xl sm:text-5xl text-gray-400 group-hover:text-white transition-all duration-300 z-10"
                                        style={{ color: tech.color, filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}
                                    />

                                    <span className="text-xs font-mono text-gray-500 group-hover:text-white uppercase tracking-widest z-10">
                                        {tech.name}
                                    </span>

                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{ background: `radial-gradient(circle at center, ${tech.color}40 0%, transparent 70%)` }}
                                    />
                                </motion.div>

                                <div className="absolute top-1/2 left-1/2 w-[1px] h-[100px] bg-gradient-to-b from-white/20 to-transparent -translate-x-1/2 -z-10 opacity-30 group-hover:opacity-60 transition-opacity" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Technology;
