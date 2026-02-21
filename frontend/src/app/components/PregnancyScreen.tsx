import { motion } from "motion/react";
import { ArrowLeft, Baby, Calendar, Heart, Stethoscope } from "lucide-react";

interface PregnancyScreenProps {
  onBack: () => void;
}

export function PregnancyScreen({ onBack }: PregnancyScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-b-[40px] px-6 pt-12 pb-8 text-white">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-3xl font-bold mb-2">Pregnancy Journey</h1>
        <p className="opacity-90">Track your precious moments</p>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Week Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-8 shadow-lg text-white"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm opacity-90 mb-1">You're in</p>
              <h2 className="text-4xl font-bold">Week 12</h2>
            </div>
            <Baby className="w-20 h-20 opacity-30" />
          </div>
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div className="bg-white h-full rounded-full" style={{ width: "30%" }} />
          </div>
          <p className="text-sm opacity-90 mt-2">Second Trimester • 28 weeks to go</p>
        </motion.div>

        {/* Baby Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Baby className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-semibold text-gray-700">Baby's Development</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Your baby is now about the size of a plum! All vital organs are formed and functioning.
            Tiny fingers and toes are developing, and your baby can even make a fist!
          </p>
          <div className="bg-purple-50 rounded-2xl p-4">
            <p className="text-sm text-purple-700">
              <strong>Size:</strong> ~5.4 cm • <strong>Weight:</strong> ~14 grams
            </p>
          </div>
        </motion.div>

        {/* Symptoms Today */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">How are you feeling today?</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Nausea", emoji: "🤢" },
              { label: "Fatigue", emoji: "😴" },
              { label: "Back Pain", emoji: "🔙" },
              { label: "Feeling Great", emoji: "✨" },
            ].map((symptom) => (
              <button
                key={symptom.label}
                className="flex items-center gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-colors"
              >
                <span className="text-2xl">{symptom.emoji}</span>
                <span className="text-sm text-gray-700">{symptom.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Health Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-semibold text-gray-700">Health Tips</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-pink-400">•</span>
              <span>Take prenatal vitamins daily, especially folic acid</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400">•</span>
              <span>Stay hydrated - aim for 8-10 glasses of water</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-400">•</span>
              <span>Get plenty of rest and listen to your body</span>
            </li>
          </ul>
        </motion.div>

        {/* Doctor Visit Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-purple-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-700">Next Checkup</h3>
              <p className="text-sm text-gray-600">January 15, 2026 at 10:00 AM</p>
            </div>
            <Calendar className="w-5 h-5 text-purple-400" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
