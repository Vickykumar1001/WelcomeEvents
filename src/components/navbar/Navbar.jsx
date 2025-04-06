import { useState, useEffect } from "react";
import Logo from "./Logo";
import ArrowRight from "./ArrowRight";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../../utils/animation";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: animationStart }}
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
                className={`w-full flex items-center justify-around h-[70px] fixed top-0 z-100 transition-all duration-300 ${scrolled ? "bg-[#161212]" : "bg-transparent"
                    }`}
            >
                <motion.div variants={reveal}>
                    <Logo />
                </motion.div>
                <div className="flex gap-20px items-center">
                    <motion.span variants={reveal} className="cursor-pointer">
                        <a href="#home"> Home</a>
                    </motion.span>
                    <motion.span variants={reveal} className="cursor-pointer">
                        <a href="#about">About</a>
                    </motion.span>
                    <motion.span variants={reveal} className="cursor-pointer">
                        Services
                    </motion.span>
                    <motion.span variants={reveal} className="cursor-pointer">
                        Gallery
                    </motion.span>
                </div>
                <motion.div
                    variants={reveal}
                    className="flex gap-5px items-center cursor-pointer"
                >
                    <span className="mb-3px">Contact Us</span>
                    <ArrowRight className="animate-bounce" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Navbar;
