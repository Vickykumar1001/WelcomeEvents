import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { animationStart, reveal } from "../../utils/animation";
import firecracker from '../../assets/images/firecracker.jpeg';
import wedding from '../../assets/images/wedding.png';
import lighting from '../../assets/images/lighting.png';
function GallerySection() {
    const [activeTab, setActiveTab] = useState("videos");
    const [selectedImage, setSelectedImage] = useState(null);
    const galleryRef = useRef(null);
    const [columns, setColumns] = useState(3);

    // Update columns based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setColumns(1);
            } else if (window.innerWidth < 1024) {
                setColumns(2);
            } else {
                setColumns(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const videos = [
        {
            id: "video1",
            title: "Luxury Wedding",
            youtubeId: "TP0Bfw1USwE",
        },
        {
            id: "video2",
            title: "DJ Night at PMCH-2024",
            youtubeId: "C3_ALYYLH-k",
        },
        {
            id: "video3",
            title: "Fest at IIT Patna",
            youtubeId: "QTLr_5IfWF4",
        },
        {
            id: "video4",
            title: "Bride Entry Concept",
            youtubeId: "08O7hTjL2-M",
        },
        {
            id: "video5",
            title: "Jaimala Concept",
            youtubeId: "uAtKJb-tYP0",
        },
        {
            id: "video6",
            title: "Truss & Lighting",
            youtubeId: "ietqpYxJd7A",
        },
    ];


    const images = [
        { id: "1", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740071/welcome-event/2_tkvkei.jpg", alt: "img" },
        { id: "2", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740072/welcome-event/5_wla5rr.jpg", alt: "img" },
        { id: "3", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740073/welcome-event/1_odzucc.jpg", alt: "img" },
        { id: "4", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740073/welcome-event/4_t4busr.jpg", alt: "img" },
        { id: "8", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740073/welcome-event/7_zpnz8s.jpg", alt: "img" },
        { id: "9", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740076/welcome-event/6_pcrf1j.jpg", alt: "img" },
        { id: "10", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740083/welcome-event/17_eycjbg.jpg", alt: "img" },
        { id: "11", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740078/welcome-event/12_xjczrk.jpg", alt: "img" },
        { id: "12", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740078/welcome-event/10_twpefa.jpg", alt: "img" },
        { id: "13", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740079/welcome-event/13_a7oamv.jpg", alt: "img" },
        { id: "14", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740079/welcome-event/14_byugtc.jpg", alt: "img" },
        { id: "15", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740080/welcome-event/9_cmseyi.jpg", alt: "img" },
        { id: "16", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740081/welcome-event/8_s81d5p.jpg", alt: "img" },
        { id: "17", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740082/welcome-event/3_tug1ij.jpg", alt: "img" },
        { id: "18", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740083/welcome-event/15_yofdi3.jpg", alt: "img" },
        { id: "19", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740084/welcome-event/20_nkekxt.jpg", alt: "img" },
        { id: "20", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740084/welcome-event/19_hjxgde.jpg", alt: "img" },
        { id: "21", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740085/welcome-event/24_owndxf.jpg", alt: "img" },
        { id: "22", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740085/welcome-event/23_kweq20.jpg", alt: "img" },
        { id: "23", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740086/welcome-event/18_rqxukp.jpg", alt: "img" },
        { id: "24", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740092/welcome-event/22_vfbqqc.jpg", alt: "img" },
        { id: "25", src: "https://res.cloudinary.com/dlpdm7vye/image/upload/v1744740095/welcome-event/25_fchueq.jpg", alt: "img" },
    ];


    // Create array of columns for masonry layout
    const getColumnsData = () => {
        const columnsData = Array.from({ length: columns }, () => []);

        images.forEach((image, index) => {
            columnsData[index % columns].push(image);
        });

        return columnsData;
    };

    const columnsData = getColumnsData();

    // Full screen image modal
    const ImageModal = ({ image, onClose }) => {
        if (!image) return null;

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.button
                    className="absolute top-6 right-6 text-white bg-black bg-opacity-50 rounded-full p-2 z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </motion.button>
                <motion.div
                    className="relative max-w-screen-xl max-h-screen"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
                    />
                </motion.div>
            </motion.div>
        );
    };

    // Video modal
    const VideoModal = ({ video, onClose }) => {
        if (!video) return null;

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.button
                    className="absolute top-6 right-6 text-white bg-black bg-opacity-50 rounded-full p-2 z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </motion.button>
                <motion.div
                    className="relative w-full max-w-md h-[80vh] max-h-[800px]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <iframe
                        className="w-full h-full rounded-lg shadow-2xl"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </motion.div>
        );
    };

    // Background elements for visual interest
    const BackgroundElements = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute top-1/4 right-10 w-80 h-80 bg-amber-600 rounded-full opacity-10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
            <motion.div
                className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-700 rounded-full opacity-10 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </div>
    );

    // State for video modal
    const [selectedVideo, setSelectedVideo] = useState(null);

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
                id="gallery"
                className="pb-20 lg:pb-32 bg-black relative overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{
                    opacity: { delay: animationStart, duration: 1.5 },
                    height: { delay: animationStart, duration: 1.5 }
                }}
            >
                <BackgroundElements />

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
                            Our <span className="text-amber-500">Gallery</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Explore our previous work through videos and images showcasing our creative lighting, special effects, and event productions.
                        </p>
                    </motion.div>

                    {/* Gallery tabs */}
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "videos"
                                ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                            onClick={() => setActiveTab("videos")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Videos
                        </motion.button>
                        <motion.button
                            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "images"
                                ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                            onClick={() => setActiveTab("images")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Images
                        </motion.button>
                    </motion.div>

                    {/* Videos Grid */}
                    {activeTab === "videos" && (
                        <motion.div
                            ref={galleryRef}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {videos.map((video) => (
                                <motion.div
                                    key={video.id}
                                    variants={itemVariants}
                                    className="relative group rounded-xl overflow-hidden"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`${video.isShort ? 'aspect-[9/16]' : 'aspect-video'} bg-gray-900 relative overflow-hidden rounded-xl`}>
                                        {/* YouTube's default thumbnail */}
                                        <img
                                            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Play button overlay */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"
                                            whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                                            onClick={() => setSelectedVideo(video)}
                                        >
                                            <motion.div
                                                className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    <h3 className="text-white font-medium mt-3 text-center">{video.title}</h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Images Masonry Grid */}
                    {activeTab === "images" && (
                        <motion.div
                            ref={galleryRef}
                            className="flex gap-4 w-full"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {columnsData.map((column, columnIndex) => (
                                <div key={columnIndex} className="flex flex-col gap-4 w-full">
                                    {column.map((image, imageIndex) => (
                                        <motion.div
                                            key={image.id}
                                            variants={itemVariants}
                                            className="w-full relative overflow-hidden rounded-lg"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                            custom={(columnIndex + 1) * (imageIndex + 1)}
                                            onClick={() => setSelectedImage(image)}
                                        >
                                            <div className="relative overflow-hidden group h-64">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full rounded-lg transition-transform duration-700 group-hover:scale-110 object-cover"
                                                />

                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    whileHover={{ opacity: 1 }}
                                                >
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <motion.div
                                                            className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center opacity-0 group-hover:opacity-100"
                                                            initial={{ scale: 0, opacity: 0 }}
                                                            whileInView={{ scale: 1, opacity: 1 }}
                                                            transition={{ delay: 0.2 }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                            </svg>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    )}
                    {/* Load more button */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="https://www.instagram.com/welcome_event_patna"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            See More
                        </motion.a>
                    </motion.div>

                    {/* Image Modal */}
                    {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}

                    {/* Video Modal */}
                    {selectedVideo && <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
                </div>
            </motion.section>
        </motion.div>
    );
}

export default GallerySection;