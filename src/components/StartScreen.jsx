"use client"

import { motion } from "framer-motion"

export default function StartScreen({ onStart }) {
  return (
    <motion.div
      className="text-center bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl max-w-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="relative">
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg"
            style={{ top: "-10px", left: "-20px" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <div className="absolute w-5 h-5 rounded-full bg-white/50 top-3 left-3" />
          </motion.div>
          <motion.div
            className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 shadow-lg"
            style={{ top: "20px", right: "-30px" }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <div className="absolute w-4 h-4 rounded-full bg-white/50 top-2 left-2" />
          </motion.div>
        </div>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-purple-700 mb-6 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bubble Pop
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-purple-600 mb-6 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Pop colorful bubbles to relieve stress and relax your mind
      </motion.p>

      <motion.div
        className="text-md text-gray-600 mb-8 p-4 bg-purple-100 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="mb-2">
          <span className="font-semibold">How to play:</span>
        </p>
        <ul className="text-left list-disc pl-5 space-y-1">
          <li>Tap bubbles to pop them</li>
          <li>Try to get the highest score!</li>
          <li>There’s no limit – just chill and enjoy popping!</li>
        </ul>
      </motion.div>

      <motion.button
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transition-all"
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Start Popping!
      </motion.button>
    </motion.div>
  )
}
