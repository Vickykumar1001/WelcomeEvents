import { useState, useEffect } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../../utils/animation";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "Testimonials", href: "#testimonials" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: animationStart }}
            className="relative z-50"
        >
            <motion.div
                variants={reveal}
                initial="hiddenVariant"
                animate="revealedVariant"
                transition={{
                    ease: "easeIn",
                    type: "tween",
                    staggerChildren: 0.1,
                    duration: 0.5,
                    delayChildren: animationStart + 0.5,
                }}
                className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#161212] backdrop-blur-md bg-opacity-90 shadow-lg shadow-amber-900/10"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <motion.div
                            variants={reveal}
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Logo />
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-5">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    variants={reveal}
                                    className="text-gray-200 hover:text-amber-400 px-3 py-1 text-md font-medium relative transition-all duration-300"
                                    whileHover={{
                                        scale: 1.05,
                                        textShadow: "0 0 8px rgba(245, 158, 11, 0.7)"
                                    }}
                                >
                                    {item.name}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 rounded-full"
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <motion.div
                            variants={reveal}
                            className="hidden md:flex"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-1 rounded-lg font-medium shadow-lg shadow-amber-600/20 flex items-center space-x-2 hover:shadow-amber-600/40 transition-all duration-300"
                            >
                                <span>Contact Us</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 animate-pulse"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.button>
                        </motion.div>

                        {/* Mobile menu button */}
                        <motion.div variants={reveal} className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-200 hover:text-amber-400 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile menu */}
                <motion.div
                    className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
                    initial={false}
                    animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-4 py-1 space-y-1 bg-[#1f1a1a] border-t border-amber-900/20 shadow-lg shadow-inner">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="block px-3 py-1 text-base font-medium text-gray-200 hover:text-amber-400 hover:bg-gray-900/50 rounded-md"
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-1 rounded-md font-medium shadow-md flex items-center justify-center space-x-2 my-1"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span>Contact Us</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Navbar;