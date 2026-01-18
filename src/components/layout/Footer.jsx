import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm bg-black border-t border-white/5">
            <p>© {new Date().getFullYear()} Thanuja Priyadarshane. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
