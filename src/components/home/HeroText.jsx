import { motion } from "framer-motion";
import { animationStart, reveal } from "../../utils/animation";
import TagLineComponent from "./Tagline";
import scrollTo from "../../utils/scroll";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center relative z-10"
    >
      {/* Animated background gradient orb */}
      <motion.div
        className="absolute rounded-full w-64 h-64 bg-amber-600/20 blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.7,
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          delay: animationStart + 1.2,
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Company name with enhanced styling - IMPROVED for mobile */}
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-7vw sm:text-6vw md:text-5vw lg:text-6vw font-bold mb-6 md:mb-8 pt-20 md:pt-28 text-yellow-400 drop-shadow-xl italic relative"
      >
        <motion.span
          className="flex justify-center items-center parisienne-regular"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Welcome Events
        </motion.span>

        {/* Animated underline */}
        <motion.div
          className="h-1 bg-amber-600 rounded-full w-0 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ delay: animationStart + 1.3, duration: 0.8 }}
        />
      </motion.div>

      {/* Tagline - FIXED to appear as one coherent sentence with better mobile sizing */}
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="px-4 sm:px-6 md:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animationStart + 1.2, duration: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white leading-tight max-w-3xl mx-auto"
        >
          Transforming occasions into extraordinary experiences in Patna, Bihar
        </motion.h2>
      </motion.div>

      {/* Content section with improved spacing and responsiveness */}
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.4, duration: 0.5 }}
        className="w-full max-w-3xl px-4 md:px-8 mx-auto text-base md:text-lg font-normal leading-relaxed pt-8 md:pt-10 mb-20 md:mb-32"
      >
        <TagLineComponent />

        {/* CTA Section with improved styling */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animationStart + 1.5, duration: 0.5 }}
          >
            Ready to create your <span className="text-amber-600">dream event</span>?
          </motion.h3>

          {/* Social icons with subtle hover effects */}
          <motion.div
            className="flex flex-col items-center gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: animationStart + 1.7, duration: 0.5 }}
          >
            <div className="flex gap-5 md:gap-8 items-center">
              {/* Instagram Icon with enhanced hover effect */}
              <motion.a
                href="https://www.instagram.com/welcome_event_patna"
                target="_blank"
                className="text-white hover:text-amber-600 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  className="w-7 h-7 md:w-8 md:h-8"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.a>

              {/* YouTube Icon with enhanced hover effect */}
              <motion.a
                href="https://www.youtube.com/@welcome_events_patna"
                target="_blank"
                className="text-white hover:text-amber-600 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  className="w-7 h-7 md:w-8 md:h-8"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Button with improved hover animation and better mobile visibility */}
          <motion.button
            className="bg-white/10 backdrop-blur-sm border border-white/50 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all overflow-hidden relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animationStart + 1.8, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
          >
            {/* Button background animation */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Button text content */}
            <span className="relative z-10 text-base sm:text-lg">Get In Touch</span>

            {/* Arrow with animation */}
            <motion.svg
              width="20" height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <path d="M9 3L7.9425 4.0575L12.1275 8.25H3V9.75H12.1275L7.9425 13.9425L9 15L15 9L9 3Z" fill="currentColor" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroText;