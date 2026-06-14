import { motion } from "framer-motion";

const AmbientLight = () => {
  return (
    <>
      {/* Ball 1 */}
      <motion.div
        animate={{
          x: [-200, 200, -200],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-20
          h-96
          w-96
          rounded-full
          bg-blue-500/20
        "
      />

      {/* Ball 2 */}
      <motion.div
        animate={{
          x: [150, -150, 150],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-20
          h-80
          w-80
          rounded-full
          bg-sky-400/15
        "
      />

      {/* Ball 3 */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [150, -150, 150],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          rounded-full
          bg-blue-300/10
        "
      />
    </>
  );
};

export default AmbientLight;