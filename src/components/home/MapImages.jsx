import { motion } from "framer-motion";
import { animationStart } from "../../utils/animation";
import borderR from "../../assets/borderR.png"
import borderL from "../../assets/borderL.png"

function MapImages() {
  return (
    <div className="absolute w-full flex justify-between transform -translate-y-[220px] -z-0 overflow-hidden pb-[40px]">
      <motion.img
        src={borderL}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        style={{
          transform: "ScaleY(-1)"
        }}
        transition={{
          delay: animationStart + 1.2,
          type: "tween",
          duration: 0.5,
        }}
        className="object-cover w-[15%] sm:w-[18%] md:w-[20%] h-auto max-h-screen"
      />
      <motion.img
        src={borderR}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: animationStart + 1.2,
          type: "tween",
          duration: 0.5,
        }}
        className="object-cover w-[15%] sm:w-[18%] md:w-[20%] h-auto max-h-screen"
      />
    </div>
  );
}

export default MapImages;