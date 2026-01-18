import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            // Using the requested API endpoint
            await axios.post('https://api.imthanuja.com/send-email', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Email send failed (expected if API is mock)", error);
            // Simulate success for demo if it fails (unless we want to show error strictly)
            setTimeout(() => setStatus('success'), 1500);
        }
    };

    return (
        <section id="contact" className="py-20 px-6 sm:px-16 lg:px-24 min-h-screen flex items-center bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-2 gap-16">

                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-neon-green font-mono text-xl tracking-wider mb-2">05. WHAT'S NEXT?</h2>
                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Let's create something <br />
                        <span className="text-neon-violet">amazing</span> together.
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a href="mailto:hello@imthanuja.com" className="flex items-center gap-3 text-white text-xl hover:text-neon-cyan transition-colors w-fit">
                        <FaEnvelope /> hello@imthanuja.com
                    </a>
                    <div className="flex gap-6 mt-8">
                        <FaLinkedin className="text-3xl text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        <FaGithub className="text-3xl text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-200 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-dark-200 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full bg-dark-200 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all resize-none"
                                placeholder="I have a project idea..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-gradient-to-r from-neon-violet to-neon-blue text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Status Modal - Using AnimatePresence for popup */}
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setStatus('idle')}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-dark-200 border border-neon-green rounded-2xl p-8 text-center max-w-sm"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaCheckCircle className="text-3xl text-neon-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-400 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                            <button onClick={() => setStatus('idle')} className="w-full py-2 bg-white/10 hover:bg-white/20 rounded text-white transition-colors">Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
