import React from "react"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const HoverGrow = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    whileHover={{ scale: 1.1 }}
  >
    {children}
  </motion.div>
)
