import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import axios from "axios";

const staticBlogs = [
    {
        id: 1,
        title: "Introduction to Microservices Architecture",
        description: "Learn about the core principles and benefits of Microservices Architecture.",
        date: "November 20, 2024",
        image: "https://miro.medium.com/v2/resize:fit:1200/1*1hBwhZ--xEVY35z5owT1Qw.jpeg",
        readTime: "10 min read",
        pdf: "/Thanuja.pdf"
    },
    {
        id: 2,
        title: "Build a CI/CD Pipeline using GitHub Actions",
        description: "Let's build a CI/CD Pipeline using GitHub Actions.",
        date: "December 22, 2024",
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        readTime: "30 min read",
        pdf: "/Thanuja.pdf"
    },
    {
        id: 3,
        title: "Service Oriented Architecture",
        description: "The Forgotten Foundation of Modern Systems",
        date: "November 07, 2025",
        image: "https://duws858oznvmq.cloudfront.net/Service_Oriented_Architecture_3bb8013c84.webp",
        readTime: "20 min read",
        pdf: "/Thanuja.pdf"
    },
];

const BlogContentRenderer = ({ content }) => {
    if (!content || !Array.isArray(content)) return <p className="text-gray-400">No content available.</p>;

    return (
        <div className="space-y-6 text-gray-300">
            {content.map((section) => (
                <div key={section.id || section._id} className="space-y-3">
                    {section.title && <h3 className="text-xl font-bold text-white">{section.title}</h3>}

                    {section.content && typeof section.content === 'string' && (
                        <p className="leading-relaxed">{section.content}</p>
                    )}

                    {section.subsections && section.subsections.length > 0 && (
                        <div className="pl-4 border-l-2 border-white/10 mt-2">
                            <BlogContentRenderer content={section.subsections} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const BlogModal = ({ blogId, onClose }) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.imthanuja.com/blogs/${blogId}`);
                setBlog(response.data.data.blog);
                console.log(response.data.data.blog)
            } catch (err) {
                console.error("API fetch failed, using fallback content", err);
                setError(true);
                const fallback = staticBlogs.find(b => b.id === blogId) || { title: "Demo Blog", description: "No content available.", pdf: "/Thanuja.pdf" };
                setBlog(fallback);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [blogId]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-4xl h-[80vh] bg-dark-200 border border-white/10 rounded-2xl overflow-hidden relative flex flex-col shadow-2xl"
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/5 bg-dark-200">
                    <span className="text-neon-cyan font-mono text-sm">BLOG READER</span>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <IoClose size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold text-white mb-4">{blog.title}</h1>

                            {/* Render structured content or fallback description */}
                            {blog.content ? (
                                <BlogContentRenderer content={blog.content} />
                            ) : (
                                <p className="text-gray-400">{blog.description || blog.body || "No content available."}</p>
                            )}

                            <div className="pt-8 flex justify-center gap-4">
                                {blog.pdf && (
                                    <a
                                        href={blog.pdf}
                                        download={`${blog.title}.pdf`}
                                        className="px-6 py-2 border border-neon-cyan text-neon-cyan rounded hover:bg-neon-cyan hover:text-black transition-colors"
                                    >
                                        Download PDF
                                    </a>
                                )}
                                <button
                                    className="px-6 py-2 border border-white/20 text-white rounded hover:bg-white hover:text-black transition-colors"
                                    onClick={onClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Blogs = () => {
    const [selectedBlogId, setSelectedBlogId] = useState(null);

    return (
        <section id="blogs" className="py-20 px-4 sm:px-16 lg:px-24 bg-dark-100 relative">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white"
                    >
                        Latest Articles
                    </motion.h3>
                </div>


                <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-8 pb-12 pt-4 snap-x snap-mandatory lg:snap-none px-4 justify-start lg:justify-between w-full scrollbar-hide">
                    {staticBlogs.map((blog, i) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            className="relative flex-shrink-0 w-[320px] lg:w-full h-[420px] bg-black/40 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden snap-center group cursor-pointer hover:-translate-y-4 transition-all duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:border-neon-cyan/50"
                            onClick={() => setSelectedBlogId(blog.id)}
                        >

                            <div className="relative h-[55%] w-full overflow-hidden rounded-t-[3rem] border-b border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                                />
                                {/* Reading Time Badge - Floating */}
                                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs text-neon-cyan flex items-center gap-2 z-20 shadow-lg">
                                    <FaClock size={10} /> {blog.readTime}
                                </div>
                            </div>

                            {/* UFO 'Body' / Content Area */}
                            <div className="relative h-[45%] p-6 flex flex-col items-center text-center justify-between bg-gradient-to-b from-black/0 to-neon-violet/5">
                                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                                        <FaCalendarAlt /> {blog.date}
                                    </div>
                                    <h4 className="text-lg font-bold text-white leading-tight group-hover:text-neon-cyan transition-colors">{blog.title}</h4>
                                </div>

                                {/* 'Tractor Beam' Effect on Hover */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-neon-cyan shadow-[0_-10px_20px_rgba(34,211,238,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                                <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
                                    Tap to Interact
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            <AnimatePresence>
                {selectedBlogId && (
                    <BlogModal blogId={selectedBlogId} onClose={() => setSelectedBlogId(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blogs;
