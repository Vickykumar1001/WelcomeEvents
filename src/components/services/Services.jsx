import { motion } from "framer-motion";
import { useState } from "react";
import { animationStart, reveal } from "../../utils/animation";
import lighting from "../../assets/images/lighting.png"
import firecracker from "../../assets/images/firecracker.jpeg"
import sound from "../../assets/images/sound.jpeg"
import truss from "../../assets/images/truss.jpeg"
import entry from "../../assets/images/entry.jpg"
import fog from "../../assets/images/fog.jpeg"
import efire from "../../assets/images/efirework.jpeg"
import confetti from "../../assets/images/confetti.png"
import varmala from "../../assets/images/varmala.png"
import scrollTo from '../../utils/scroll';
function ServicesSection() {
    const [hoveredService, setHoveredService] = useState(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Services data - all services directly shown
    const services = [
        {
            id: "fireworks",
            title: "Fireworks & Special Effects",
            description: "Make a statement with our spectacular pyrotechnics and special effects. From indoor cold spark fountains to grand outdoor displays, our fireworks create unforgettable moments.",
            image: firecracker,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L9 7l-7 0 5 5-2 7 7-4 7 4-2-7 5-5-7 0z"></path>
                </svg>
            ),
        },
        {
            id: "varmala",
            title: "Varmala Concepts",
            description: "Elevate your Jaimala/Varmala ceremony with innovative presentation concepts. From floating platforms to beautiful mechanical rigs, we create magical moments for this sacred exchange.",
            image: varmala,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V10"></path>
                    <path d="M15.4 14a3 3 0 1 0-6 0l3 8 3-8Z"></path>
                    <path d="M19 3v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3"></path>
                </svg>
            ),
        },
        {
            id: "lighting",
            title: "Lighting Design",
            description: "From ambient mood lighting to dynamic dance floor effects, our lighting transforms venues into magical spaces. We use state-of-the-art LED systems, architectural lighting, and custom gobos to create the perfect atmosphere for your event.",
            image: lighting,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M12 1v2"></path>
                    <path d="M12 21v2"></path>
                    <path d="M4.22 4.22l1.42 1.42"></path>
                    <path d="M18.36 18.36l1.42 1.42"></path>
                    <path d="M1 12h2"></path>
                    <path d="M21 12h2"></path>
                    <path d="M4.22 19.78l1.42-1.42"></path>
                    <path d="M18.36 5.64l1.42-1.42"></path>
                </svg>
            ),
        },

        {
            id: "sound",
            title: "Sound Engineering",
            description: "Crystal-clear sound for ceremonies, speeches, and celebrations. Our professional-grade audio equipment ensures every word and beat is heard with perfect clarity, regardless of venue size.",
            image: sound,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 18L2 6"></path>
                    <rect x="4" y="6" width="4" height="12" rx="1"></rect>
                    <path d="M14 13.5v-3a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0z"></path>
                    <path d="M17 10.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3z"></path>
                    <path d="M8 8v8l4-2.5v-3L8 8z"></path>
                </svg>
            ),
        },

        {
            id: "entry",
            title: "Bride & Groom Entry Concepts",
            description: "Make a grand entrance with our custom-designed entry concepts. Whether it's a dramatic reveal, an aerial descent, or a fog-filled pathway, we create magical moments that captivate your guests.",
            image: entry,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 4v16M6 4v16"></path>
                    <path d="M12 4v2M12 10v2M12 18v2"></path>
                    <path d="M4 12h4M16 12h4"></path>
                </svg>
            ),
        },
        {
            id: "truss",
            title: "Truss & Staging",
            description: "Custom-designed stages and structural elements that serve as the perfect foundation for your event. Our sturdy, versatile truss systems can accommodate any design requirement.",
            image: truss,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M7 14v2"></path>
                    <path d="M11 11v5"></path>
                    <path d="M15 8v8"></path>
                    <path d="M19 5v11"></path>
                </svg>
            ),
        },

        {
            id: "fog",
            title: "CO2 & Ground Fog Effects",
            description: "Create mystical atmospheres with our ground fog systems or add excitement with CO2 jet blasts. Perfect for first dances, entries, or creating dreamy photo opportunities.",
            image: fog,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 19h18"></path>
                    <path d="M5 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4 8 8 0 0 1-7 7.93A8 8 0 0 1 5 8z"></path>
                    <path d="M9 19v-3.17"></path>
                    <path d="M15 19v-3.17"></path>
                </svg>
            ),
        },
        {
            id: "electronic",
            title: "Electronic Fireworks",
            description: "Safe indoor pyrotechnics that bring the wow factor to any venue. Our electronic fireworks provide the visual impact of traditional fireworks without the safety concerns or venue restrictions.",
            image: efire,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9v5"></path>
                    <path d="M18 9v5"></path>
                    <path d="M12 4v15"></path>
                    <path d="m9 8 3-4 3 4"></path>
                    <path d="m9 16 3 4 3-4"></path>
                </svg>
            ),
        },
        {
            id: "confetti",
            title: "Confetti Blowers",
            description: "Celebrate key moments with spectacular confetti effects. Our high-powered blowers can fill the space with color for announcements, first dances, or grand finales.",
            image: confetti,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"></path>
                    <path d="M4 12h16"></path>
                    <path d="M12 4v16"></path>
                    <path d="M9 4v4"></path>
                    <path d="M15 16v4"></path>
                    <path d="M15 4v4"></path>
                    <path d="M9 16v4"></path>
                </svg>
            ),
        },

    ];

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
            <motion.section
                id="services"
                className="pb-20 bg-black relative overflow-hidden"
            >
                {/* Animated color gradient backgrounds */}
                <motion.div
                    className="absolute -right-48 top-20 w-96 h-96 rounded-full bg-amber-600 mix-blend-overlay opacity-20 blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

                <motion.div
                    className="absolute -left-24 bottom-20 w-80 h-80 rounded-full bg-amber-700 mix-blend-overlay opacity-20 blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            className="h-1 w-16 bg-amber-600 mx-auto mb-6"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our <span className="text-amber-500">Services</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            From breathtaking lighting designs to immersive special effects,
                            we bring technical excellence and creative flair to every event.
                        </p>
                    </motion.div>

                    {/* Services grid with animations and images - responsive layout */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                layoutId={service.id}
                                variants={itemVariants}
                                className={`bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 ${hoveredService === service.id ? "shadow-xl shadow-amber-600/10" : ""
                                    }`}
                                onMouseEnter={() => setHoveredService(service.id)}
                                onMouseLeave={() => setHoveredService(null)}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Service image - increased height */}
                                <div className="h-56 overflow-hidden">
                                    <motion.img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <motion.div
                                            className="p-3 rounded-lg bg-amber-600 bg-opacity-20 text-amber-500"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {service.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-white">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* "And much more" section with additional text */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl text-gray-300 italic mb-4">And much more...</p>
                        <motion.div
                            onClick={() => {
                                scrollTo("contact")
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <button className="bg-transparent border-2 border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300">
                                Request Custom Services
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    );
}

export default ServicesSection;