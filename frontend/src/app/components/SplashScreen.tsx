import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50"
      onAnimationComplete={() => setTimeout(onComplete, 2000)}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-center mb-6"
        >
          <Heart className="w-16 h-16 text-pink-400 fill-pink-300" />
        </motion.div>
        <h1 className="text-5xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          CareHug
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-pink-400 text-lg"
        >
          Care, Comfort & Confidence
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
