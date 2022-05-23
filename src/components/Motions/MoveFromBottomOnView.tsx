import React from "react";
import { motion } from "framer-motion";

const bottomVariant = {
  hidden: {
    y: "15rem",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const MoveFromBottomOnView = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="h-auto w-full"
      variants={bottomVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(MoveFromBottomOnView);
