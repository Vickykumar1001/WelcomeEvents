import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { animationStart } from "../../utils/animation";

function Footer() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Current year for copyright
    const currentYear = new Date().getFullYear();

    return (
        <motion.div
            layout
            initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "unset", opacity: 1, overflow: "visible" }}
            transition={{
                height: { delay: animationStart, duration: 1 },
                opacity: { delay: animationStart + 0.5, duration: 0.5 },
                overflow: { delay: animationStart + 1, duration: 0 }
            }}
        >
            <footer className="bg-gray-950 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-70"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 md:px-8 py-16">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Company Info */}
                        <motion.div variants={item} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: animationStart, duration: 0.5 }}
                            >
                                <motion.h2
                                    className="text-white text-2xl font-bold mb-4"
                                    whileHover={{ color: "#d97706" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Welcome Event
                                </motion.h2>
                                <p className="text-gray-400 mb-4">
                                    Turning ordinary moments into extraordinary memories with state-of-the-art event production.
                                </p>
                                <div className="flex space-x-4 mt-6">
                                    <motion.a
                                        href="https://wa.me/917903108839"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white"
                                        whileHover={{ y: -5, backgroundColor: "#25D366", scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                        aria-label="WhatsApp"
                                    >
                                        <FaWhatsapp className="text-lg" />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.instagram.com/welcome_event_patna"
                                        target="_blank"
                                        className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white"
                                        whileHover={{ y: -5, backgroundColor: "#E1306C", scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram className="text-lg" />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.youtube.com/@welcome_events_patna"
                                        target="_blank"
                                        className="bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white"
                                        whileHover={{ y: -5, backgroundColor: "#FF0000", scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                        aria-label="YouTube"
                                    >
                                        <FaYoutube className="text-lg" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={item} className="space-y-4">
                            <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((link, index) => (
                                    <motion.li key={index}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <a
                                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                                            className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center"
                                        >
                                            <span className="mr-2">›</span> {link}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={item} className="space-y-4">
                            <h3 className="text-white text-xl font-semibold mb-6">Our Services</h3>
                            <ul className="space-y-3">
                                {[
                                    'Luxury Wedding Production',
                                    'Lighting Design',
                                    'Sound Engineering',
                                    'Truss & Staging',
                                    'Special Effects',
                                    'Bridal Entry Concepts',
                                    'College Events'
                                ].map((service, index) => (
                                    <motion.li key={index}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <a
                                            href="#services"
                                            className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center"
                                        >
                                            <span className="mr-2">›</span> {service}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={item} className="space-y-6">
                            <h3 className="text-white text-xl font-semibold mb-6">Contact Us</h3>

                            <motion.div
                                className="flex items-start gap-3"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaPhone className="text-amber-500 mt-1" />
                                <div>
                                    <a href="tel:+917903108839"><p className="text-gray-400">+91 7903108839</p></a>
                                    <a href="tel:+919264184997"><p className="text-gray-400">+91 9264184997</p></a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-3"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaEnvelope className="text-amber-500 mt-1" />
                                <a href="mailto:welcomeevent@gmail.com"><p className="text-gray-300">welcomeevent@gmail.com</p></a>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-3"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaMapMarkerAlt className="text-amber-500 mt-1" />
                                <p className="text-gray-400">Garikhana Khagaul, near DRM Office, Danapur, Patna, Bihar 801105</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        className="w-full h-px bg-gray-800 my-10"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    ></motion.div>

                    {/* Bottom Section with Copyright and Developer Info */}
                    <div className="flex flex-col md:flex-row justify-evenly items-center">
                        <motion.p
                            className="text-gray-400 text-sm mb-4 md:mb-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            © {currentYear} Welcome Event. All Rights Reserved.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center text-sm text-gray-400 text-center sm:text-left"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <p className="flex items-center justify-center">
                                Designed & Developed with
                                <motion.span
                                    className="inline-block mx-1 text-red-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                                >
                                    <FaHeart />
                                </motion.span>
                                by
                            </p>

                            <div className="flex flex-col sm:flex-row items-center sm:ml-2 mt-1 sm:mt-0">
                                <motion.a
                                    href="https://linkedin.com/in/vicky-kumar1001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-500 hover:text-amber-400 mx-1 flex items-center"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="mr-1">Vicky Kumar</span>
                                    <FaLinkedin />
                                </motion.a>

                                <span className="mx-1 hidden sm:inline">/</span>

                                <motion.a
                                    href="https://github.com/vickykumar1001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-500 hover:text-amber-400 mx-1 flex items-center"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="mr-1">GitHub</span>
                                    <FaGithub />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </footer>
        </motion.div>
    );
}

export default Footer;