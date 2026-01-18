import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Technology from './components/sections/Technology';
import Projects from './components/sections/Projects';
import Blogs from './components/sections/Blogs';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
    return (
        <main className="bg-dark text-white selection:bg-neon-cyan selection:text-black">
            <Navbar />
            <Hero />
            <About />
            <Technology />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
