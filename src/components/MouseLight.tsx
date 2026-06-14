import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const MouseLight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <></>
    /*<motion.div
  style={{
    x: mouseX,
    y: mouseY,
  }}
  className="
    fixed
    top-0
    left-0
    h-50
    w-50
    rounded-full
    bg-blue-500/30
    blur-[100px]
    pointer-events-none
    z-9999
  "
/>*/
  );
};

export default MouseLight;