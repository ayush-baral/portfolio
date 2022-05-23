import { motion } from "framer-motion";

export const FadeInWhenVisible = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className=" w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 2,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
