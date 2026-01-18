import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaCheckCircle, FaFacebook, FaInstagram, FaExclamationCircle } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await axios.post('https://api.imthanuja.com/send-email', formData);
            if (response.status === 200) {
                setStatus('success');
                setModalMessage('Thanks for reaching out. I\'ll get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error("Email send failed:", error);
            setStatus('error');

            if (error.response) {
                if (error.response.status === 429) {
                    setModalMessage("Rate limit exceeded. Please try again later.");
                } else {
                    setModalMessage(`Server Error: ${error.response.data?.message || 'Something went wrong.'}`);
                }
            } else if (error.request) {
                setModalMessage("Network Error: Could not reach the server. Check your connection.");
            } else {
                setModalMessage(`Error: ${error.message}`);
            }
        }
    };

    const closeModal = () => {
        setStatus('idle');
        setModalMessage('');
    };

    return (
        <section id="contact" className="py-20 px-6 sm:px-16 lg:px-24 min-h-screen flex items-center bg-black relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-screen-2xl mx-auto w-full grid md:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Let's create something <br />
                        <span className="text-gray-500">amazing</span> together.
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex gap-6 mt-4">
                        <a href="mailto:thanujapriyadarshane26@gmail.com" className="text-3xl text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                            <FaEnvelope />
                        </a>
                        <a href="https://www.linkedin.com/in/thanuja-priyadarshane/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/thanujaDev26" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                            <FaGithub />
                        </a>
                        <a href="https://www.facebook.com/thanuja.priyadarshana.14/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/_thanuja10_/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white hover:text-neon-green transition-colors">
                            <FaInstagram />
                        </a>
                    </div>
                </motion.div>

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
                                className="w-full bg-dark-200 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
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
                                className="w-full bg-dark-200 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
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
                                placeholder="Hi Thanuja, I have a project idea..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="group flex items-center gap-3 px-8 py-3 bg-black/50 backdrop-blur-md border border-neon-cyan/50 text-neon-cyan font-mono font-bold rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 tracking-widest"
                        >
                            {status === 'loading' ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
                        </button>
                    </form>
                </motion.div>
            </div>

            <AnimatePresence>
                {(status === 'success' || status === 'error') && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`bg-dark-200 border ${status === 'success' ? 'border-neon-green' : 'border-red-500'} rounded-2xl p-8 text-center max-w-sm w-full shadow-2xl`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`w-16 h-16 ${status === 'success' ? 'bg-neon-green/20' : 'bg-red-500/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                {status === 'success' ? (
                                    <FaCheckCircle className="text-3xl text-neon-green" />
                                ) : (
                                    <FaExclamationCircle className="text-3xl text-red-500" />
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {status === 'success' ? 'Message Sent!' : 'Error'}
                            </h3>
                            <p className="text-gray-400 mb-6">{modalMessage}</p>
                            <button
                                onClick={closeModal}
                                className="w-full py-2 bg-white/10 hover:bg-white/20 rounded text-white transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
