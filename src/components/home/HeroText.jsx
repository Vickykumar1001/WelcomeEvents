import { motion } from "framer-motion";
import { animationStart, reveal } from "../../utils/animation";
import TagLineComponent from "../hero/Tagline";

function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-4vw <md:text-24px font-bold mb-30px pt-100px text-yellow-400 drop-shadow-lg italic"
      >
        <span className="flex items-center parisienne-regular">
          Welcome Events
        </span>
      </motion.div>


      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-2.3vw <md:text-24px font-bold mb-30px"
      >
        <span className="flex items-center gap-10px">
          Bringing Your Events
        </span>
        <span> to Life with Style</span>
      </motion.div>


      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-16px leading-tight pv-40px"
      >
        <TagLineComponent />
      </motion.span>
    </motion.div>
  );
}

export default HeroText;
