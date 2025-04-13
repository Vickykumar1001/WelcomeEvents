import { motion } from "framer-motion";
import { useState } from "react";
import { animationStart, reveal } from "../../utils/animation";
import { FaWhatsapp, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
    // For staggered animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 30, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // For parallax effect
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / -40;
        const moveY = (clientY - window.innerHeight / 2) / -40;
        setMousePosition({ x: moveX, y: moveY });
    };

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({ name: "", phone: "", email: "", message: "" });
        alert("Thank you for your message! We'll get back to you soon.");
    };

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
            <section
                className="pb-20 lg:pb-32 overflow-hidden relative bg-black"
                id="contact"
                onMouseMove={handleMouseMove}
            >
                {/* Background accents */}
                <motion.div
                    className="absolute -left-1/4 top-1/4 w-96 h-96 rounded-full bg-amber-600 opacity-10 blur-3xl"
                    animate={{
                        x: mousePosition.x * 2,
                        y: mousePosition.y * 2
                    }}
                    transition={{ type: "spring", stiffness: 50 }}
                />

                <motion.div
                    className="absolute -right-1/4 bottom-1/4 w-80 h-80 rounded-full bg-amber-500 opacity-10 blur-3xl"
                    animate={{
                        x: mousePosition.x * -2,
                        y: mousePosition.y * -2
                    }}
                    transition={{ type: "spring", stiffness: 50 }}
                />

                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        className="mb-16 text-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={container}
                    >
                        <motion.div
                            className="mb-6 mx-auto inline-block"
                            initial={{ width: 0 }}
                            whileInView={{ width: "4rem" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="h-1 w-16 bg-amber-600"></div>
                        </motion.div>

                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
                            variants={item}
                        >
                            Get in <span className="text-amber-600">Touch</span>
                        </motion.h2>

                        <motion.p
                            className="text-gray-300 max-w-2xl mx-auto text-lg"
                            variants={item}
                        >
                            Let us make your next event unforgettable. Reach out to discuss how we can bring your vision to life.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={container}
                    >
                        {/* Left column: Contact Info */}
                        <motion.div className="w-full lg:w-2/5" variants={item}>
                            <motion.div
                                className="bg-gray-900 p-8 rounded-2xl h-full border border-gray-800"
                                whileHover={{ boxShadow: "0 0 20px rgba(217, 119, 6, 0.2)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                                <div className="space-y-8">
                                    {/* Phone Numbers */}
                                    <motion.div
                                        className="flex items-start gap-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="bg-amber-600/20 p-3 rounded-full">
                                            <FaPhone className="text-amber-500 text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Call Us</h4>
                                            <a href="tel:+91 7903108839"><p className="text-gray-300">+91 7903108839</p></a>
                                            <a href="tel:+91 9102943258"><p className="text-gray-300">+91 9102943258</p></a>
                                        </div>
                                    </motion.div>

                                    {/* Email */}
                                    <motion.div
                                        className="flex items-start gap-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="bg-amber-600/20 p-3 rounded-full">
                                            <FaEnvelope className="text-amber-500 text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Email Us</h4>
                                            <p className="text-gray-300">welcomeevent@gmail.com</p>
                                        </div>
                                    </motion.div>

                                    {/* Address */}
                                    <motion.div
                                        className="flex items-start gap-4"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="bg-amber-600/20 p-3 rounded-full">
                                            <FaMapMarkerAlt className="text-amber-500 text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-2">Visit Us</h4>
                                            <p className="text-gray-300">Garikhana Khagaul, near DRM Office, Danapur, Patna, Bihar 801105</p>
                                        </div>
                                    </motion.div>

                                    {/* Social Media */}
                                    <div>
                                        <h4 className="text-white font-medium mb-4">Connect With Us</h4>
                                        <div className="flex gap-4">
                                            <motion.a
                                                href="https://wa.me/917903108839"
                                                target="_blank"
                                                className="bg-gray-800 p-3 rounded-full"
                                                whileHover={{ y: -5, backgroundColor: "#25D366", scale: 1.1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <FaWhatsapp className="text-xl text-white" />
                                            </motion.a>
                                            <motion.a
                                                href="https://www.instagram.com/welcome_event_patna"
                                                target="_blank"
                                                className="bg-gray-800 p-3 rounded-full"
                                                whileHover={{ y: -5, backgroundColor: "#E1306C", scale: 1.1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <FaInstagram className="text-xl text-white" />
                                            </motion.a>
                                            <motion.a
                                                href="https://www.youtube.com/@welcome_events_patna"
                                                target="_blank"
                                                className="bg-gray-800 p-3 rounded-full"
                                                whileHover={{ y: -5, backgroundColor: "#FF0000", scale: 1.1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <FaYoutube className="text-xl text-white" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right column: Contact Form */}
                        <motion.div className="w-full lg:w-3/5" variants={item}>
                            <motion.form
                                onSubmit={handleSubmit}
                                className="bg-gray-900 p-8 rounded-2xl border border-gray-800"
                                whileHover={{ boxShadow: "0 0 20px rgba(217, 119, 6, 0.2)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <motion.div
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
                                            placeholder="Your name"
                                        />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
                                            placeholder="Your phone number"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    className="mb-6"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300"
                                        placeholder="Your email address"
                                    />
                                </motion.div>

                                <motion.div
                                    className="mb-8"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your event..."
                                    ></textarea>
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full md:w-auto"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </motion.form>
                        </motion.div>
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="rounded-2xl overflow-hidden border border-gray-800"
                        whileHover={{ boxShadow: "0 0 20px rgba(217, 119, 6, 0.2)" }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Find Us Here</h3>
                        <div className="h-96 w-full bg-gray-800">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.5243377322045!2d85.03896857485019!3d25.587487315782997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57cb84974f87%3A0x37651e8b13b0eb73!2sWelcome%20Events!5e0!3m2!1sen!2sin!4v1744469361805!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Welcome Event Location"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

export default ContactUs;