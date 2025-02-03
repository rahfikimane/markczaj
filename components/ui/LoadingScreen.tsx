import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center z-50"
    >
      <div className="text-center space-y-6">
        <div className="text-blue-400 font-light text-xl sm:text-2xl">
          Loading Mark Czajkowski Assets
        </div>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-blue-400/20 border-t-blue-400 rounded-full animate-spin"></div>
        </div>
      </div>
    </motion.div>
  );
} 