import { motion } from "framer-motion";
import { useState } from "react";
import { animationStart, reveal } from "../../utils/animation";
import firecracker from '../../assets/images/firecracker.png';
import wedding from '../../assets/images/wedding.png';
import lighting from '../../assets/images/lighting.png';
function AboutUs() {
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

  // For image parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / -40;
    const moveY = (clientY - window.innerHeight / 2) / -40;
    setMousePosition({ x: moveX, y: moveY });
  };

  // Stats for animation
  const stats = [
    { number: "100+", label: "Events Completed" },
    { number: "10+", label: "Wedding Specialists" },
    { number: "5+", label: "Years Experience" }
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
      <section
        className="py-20 lg:py-32 overflow-hidden relative bg-black"
        id="about"
        onMouseMove={handleMouseMove}
      >
        {/* Background accent */}
        <motion.div
          className="absolute -right-1/4 top-1/4 w-96 h-96 rounded-full bg-amber-600 opacity-10 blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />

        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            {/* Left column: Text content */}
            <motion.div className="w-full lg:w-1/2" variants={item}>
              <motion.div
                className="mb-6 inline-block"
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
                Turning Moments into <span className="text-amber-600">Memories</span>
              </motion.h2>

              <motion.p
                className="text-gray-300 mb-8 text-lg leading-relaxed"
                variants={item}
              >
                Welcome Events has been creating magical experiences in Patna, Bihar since 2020. We're more than just event planners – we're dream creators, turning your vision into unforgettable reality with state-of-the-art lighting, sound engineering, and special effects.
              </motion.p>

              <motion.p
                className="text-gray-300 mb-12 text-lg leading-relaxed"
                variants={item}
              >
                Our team of passionate experts specializes in luxury weddings, corporate events, and college festivals, bringing technical innovation and artistic excellence to every occasion we touch.
              </motion.p>

              {/* Stats section */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8"
                variants={item}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.2) }}
                  >
                    <span className="text-amber-600 text-3xl md:text-4xl font-bold">{stat.number}</span>
                    <span className="text-gray-400 text-sm mt-1">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column: Images */}
            <motion.div
              className="w-full lg:w-1/2 relative"
              variants={item}
            >
              <motion.div
                className="relative z-10 rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={firecracker}
                  alt="Special effects showcase"
                  className="w-full h-full object-cover"
                />

              </motion.div>

              <motion.div
                className="absolute -bottom-12 -right-12 w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-xl z-20 border-4 border-black"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{
                  x: mousePosition.x,
                  y: mousePosition.y
                }}
              ><img
                  src={wedding}
                  alt="Wedding event production"
                  className="w-full h-full object-cover"
                />

              </motion.div>

              <motion.div
                className="absolute -top-8 -left-8 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-xl z-20 border-4 border-black"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                style={{
                  x: mousePosition.x * -1,
                  y: mousePosition.y * -1
                }}
              >
                <img
                  src={lighting}
                  alt="Lighting design"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Team and values section */}
          <motion.div
            className="mt-24 lg:mt-40"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-12 text-center text-white"
              variants={item}
            >
              Our <span className="text-amber-600">Core Values</span>
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={item}
            >
              {[
                {
                  title: "Excellence",
                  description: "We pursue perfection in every detail, ensuring flawless execution from concept to cleanup."
                },
                {
                  title: "Innovation",
                  description: "We constantly explore new technologies and creative approaches to exceed expectations."
                },
                {
                  title: "Reliability",
                  description: "We honor our commitments with meticulous planning and backup systems for every scenario."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 bg-opacity-60 p-8 rounded-lg backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.2), duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <h4 className="text-xl font-bold mb-4 text-amber-600">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutUs;