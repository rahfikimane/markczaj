import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PinScreen({ onAccess }: { onAccess: () => void }) {
  const [pin, setPin] = useState('');
  
  useEffect(() => {
    const code = '2580';
    let currentIndex = 0;
    
    const typePin = setInterval(() => {
      if (currentIndex < code.length) {
        setPin(prev => prev + code[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typePin);
        setTimeout(() => {
          handleSubmit(new Event('submit') as any);
        }, 500);
      }
    }, 200);

    return () => clearInterval(typePin);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setPin('');
      onAccess();
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center z-50 px-4"
    >
      <div className="w-full max-w-md p-4 sm:p-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-lg bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">
              Welcome to markczaj.com
            </h2>
            <div className="text-sm text-gray-400 font-light">
              Please authenticate to continue
            </div>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Security Code
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg 
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-transparent transition-all"
                maxLength={4}
                placeholder="Enter 4-digit code"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black/30 border border-white/20 
                       text-blue-400 px-6 py-3 rounded-lg hover:bg-black/50 
                       transition-all duration-200 backdrop-blur-lg shadow-lg"
            >
              Verify Identity
            </button>
          </form>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm text-gray-400">Secure Connection</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 