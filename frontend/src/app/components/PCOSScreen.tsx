import { motion } from "motion/react";
import { ArrowLeft, Activity, TrendingUp, Apple, Dumbbell, Moon } from "lucide-react";

interface PCOSScreenProps {
  onBack: () => void;
}

export function PCOSScreen({ onBack }: PCOSScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-400 to-rose-500 rounded-b-[40px] px-6 pt-12 pb-8 text-white">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-3xl font-bold mb-2">PCOS Management</h1>
        <p className="opacity-90">Track and manage your health</p>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Health Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Your PCOS Health Score</p>
              <h2 className="text-4xl font-bold text-rose-500">78</h2>
              <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4" />
                +5 from last week
              </p>
            </div>
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#ffe4e6"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#fb7185"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={251}
                  strokeDashoffset={63}
                  strokeLinecap="round"
                />
              </svg>
              <Activity className="absolute inset-0 m-auto w-8 h-8 text-rose-400" />
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Great progress! Keep maintaining a balanced lifestyle.
          </p>
        </motion.div>

        {/* Symptom Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Track Today's Symptoms</h3>
          <div className="space-y-3">
            {[
              { label: "Irregular Periods", severity: 2 },
              { label: "Weight Changes", severity: 1 },
              { label: "Acne", severity: 3 },
              { label: "Mood Swings", severity: 1 },
            ].map((symptom, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50">
                <span className="text-gray-700">{symptom.label}</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((level) => (
                    <button
                      key={level}
                      className={`w-3 h-3 rounded-full ${
                        level <= symptom.severity ? "bg-rose-400" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lifestyle Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Lifestyle Recommendations</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-green-100">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <Apple className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Balanced Diet</h4>
                <p className="text-sm text-gray-600">
                  Focus on whole grains, lean proteins, and plenty of vegetables
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <Dumbbell className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Regular Exercise</h4>
                <p className="text-sm text-gray-600">
                  30 minutes of moderate activity, 5 times a week
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-purple-100">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <Moon className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Quality Sleep</h4>
                <p className="text-sm text-gray-600">
                  Aim for 7-9 hours of restful sleep each night
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Weekly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">This Week's Progress</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-rose-500">5</p>
              <p className="text-xs text-gray-600 mt-1">Workouts</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rose-500">85%</p>
              <p className="text-xs text-gray-600 mt-1">Diet Goals</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-rose-500">7.5h</p>
              <p className="text-xs text-gray-600 mt-1">Avg Sleep</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
