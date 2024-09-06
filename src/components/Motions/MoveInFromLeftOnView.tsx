import React from "react";
import { motion } from "framer-motion";

const moveInFromLeftOnView = {
  hidden: {
    x: -300,
  },
  visible: {
    x: 0,

    transition: {
      //   delay: 0.5,
      //   duration: 2,
      ease: "easeOut",
    },
  },
};

const MoveInFromLeftOnView = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className='h-auto w-full'
      variants={moveInFromLeftOnView}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MoveInFromLeftOnView;
