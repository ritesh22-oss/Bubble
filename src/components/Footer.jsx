import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-8 mb-4 text-center">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-3">
          
          
          
        </div>

        <p className="text-purple-700 font-medium bg-white/50 backdrop-blur-sm py-2 px-4 rounded-full inline-block">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <Link
            href="https://anujchaudhary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-purple-800 transition-colors"
          >
            @ritesh
          </Link>
        </p>
      </div>
    </motion.footer>
  )
}
