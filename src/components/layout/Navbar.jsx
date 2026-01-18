import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'blogs', title: 'Blogs' },
    { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
    const [active, setActive] = useState('');
    const [open, setOpen] = useState(false);

    const handleNavClick = (id, title) => {
        setActive(title);
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={twMerge(
                    "hidden sm:flex fixed top-6 left-1/2 -translate-x-1/2 z-50",
                    "w-[90%] max-w-[520px] h-[60px]",
                    "glass rounded-full px-6 items-center"
                )}
            >
                <ul className="flex justify-between w-full">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            onClick={() => handleNavClick(nav.id, nav.title)}
                            className={clsx(
                                "cursor-pointer text-sm font-medium transition-colors",
                                active === nav.title
                                    ? "text-neon-cyan"
                                    : "text-gray-400 hover:text-white"
                            )}
                        >
                            {nav.title}
                        </li>
                    ))}
                </ul>
            </motion.nav>

            <div className="sm:hidden fixed top-0 left-0 w-full h-[60px] z-50 bg-black/70 backdrop-blur-md flex items-center justify-between px-4">
                <button
                    onClick={() => setOpen(true)}
                    className="text-white text-xl"
                >
                    <FaBars />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="sm:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
                    >
                        <div className="flex justify-end p-6">
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white text-2xl"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full gap-10">
                            {navLinks.map((nav, i) => (
                                <motion.button
                                    key={nav.id}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => handleNavClick(nav.id, nav.title)}
                                    className={clsx(
                                        "text-2xl font-semibold transition-colors",
                                        active === nav.title
                                            ? "text-neon-cyan"
                                            : "text-gray-300 hover:text-white"
                                    )}
                                >
                                    {nav.title}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
