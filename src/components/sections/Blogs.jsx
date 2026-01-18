import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

// Static array for display info (as requested)
const staticBlogs = [
    {
        id: 1,
        title: "The Future of Cloud Computing with AWS",
        date: "Oct 24, 2024",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        desc: "Exploring serverless architectures and edge computing."
    },
    {
        id: 2,
        title: "Building Scalable Systems in 2025",
        date: "Nov 12, 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2574&auto=format&fit=crop",
        desc: "Microservices vs Monoliths: The eternal debate."
    },
    {
        id: 3,
        title: "Unreal Engine 5 for Web Developers",
        date: "Dec 05, 2024",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1614726365723-49cfae9278bf?q=80&w=2574&auto=format&fit=crop",
        desc: "How 3D technologies are reshaping the browser."
    },
];

const BlogModal = ({ blogId, onClose }) => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    React.useEffect(() => {
        const fetchBlog = async () => {
            try {
                // Using the requested API endpoint
                const response = await axios.get(`https://api.imthanuja.com/blogs/${blogId}`);
                console.log(response.data);
                setContent(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch blog, using fallback content for demo.", err);
                setError(true);
                // Fallback for demo purposes since the API likely doesn't exist yet for me
                setTimeout(() => {
                    setContent({
                        title: "Demo Blog Content (API Failed)",
                        body: `This is a simulated body because the API request to https://api.imthanuja.com/blogs/${blogId} failed or is not reachable. In a real environment, this would be the actual blog HTML or Markdown content.`,
                        author: "Imthanuja"
                    });
                    setLoading(false);
                }, 1000);
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
                            <h1 className="text-3xl font-bold text-white">{content?.title || "Untitled"}</h1>
                            <div className="prose prose-invert max-w-none text-gray-300">
                                <p>{content?.body || "No content available."}</p>
                                {/* If content is HTML, use dangerouslySetInnerHTML safely */}
                            </div>

                            <div className="pt-8 flex justify-center">
                                <button className="px-6 py-2 border border-neon-cyan text-neon-cyan rounded hover:bg-neon-cyan hover:text-black transition-colors">
                                    Download PDF
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
            <div className="max-w-screen-2xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-neon-cyan font-mono text-xl tracking-wider mb-2"
                >
                    04. THOUGHTS
                </motion.h2>
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

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory">
                    {staticBlogs.map((blog, i) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="min-w-[300px] sm:min-w-[400px] bg-dark-200 rounded-2xl overflow-hidden snap-center group cursor-pointer border border-white/5 hover:border-neon-violet/50 transition-colors duration-300"
                            onClick={() => setSelectedBlogId(blog.id)}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white flex items-center gap-2">
                                    <FaClock size={10} /> {blog.readTime}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-gray-500 text-xs mb-3 flex items-center gap-2">
                                    <FaCalendarAlt /> {blog.date}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon-violet transition-colors">{blog.title}</h4>
                                <p className="text-gray-400 text-sm line-clamp-2">{blog.desc}</p>
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
