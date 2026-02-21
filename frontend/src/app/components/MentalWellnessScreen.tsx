import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Heart, Smile } from "lucide-react";
import { Slider } from "./ui/slider";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface MentalWellnessScreenProps {
  onBack: () => void;
}

export function MentalWellnessScreen({ onBack }: MentalWellnessScreenProps) {
  const [stressLevel, setStressLevel] = useState([50]);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { id: "amazing", emoji: "🤩", label: "Amazing" },
    { id: "good", emoji: "😊", label: "Good" },
    { id: "okay", emoji: "😐", label: "Okay" },
    { id: "low", emoji: "😔", label: "Low" },
    { id: "stressed", emoji: "😰", label: "Stressed" },
  ];

  const affirmations = [
    "You are strong and capable",
    "Every day is a fresh start",
    "You deserve love and care",
    "Your feelings are valid",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-b-[40px] px-6 pt-12 pb-8 text-white">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-3xl font-bold mb-2">Mental Wellness</h1>
        <p className="opacity-90">Check in with yourself today</p>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Daily Affirmation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-3xl p-8 shadow-lg text-white"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="text-center text-lg font-medium mb-2">Today's Affirmation</p>
          <p className="text-center text-xl italic">
            "{affirmations[new Date().getDate() % affirmations.length]}"
          </p>
        </motion.div>

        {/* Mood Check-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <Smile className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="font-semibold text-gray-700">How are you feeling?</h3>
          </div>
          <div className="flex justify-between gap-2">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`flex flex-col items-center p-3 rounded-2xl transition-all ${
                  selectedMood === mood.id
                    ? "bg-indigo-100 scale-110"
                    : "bg-gray-50 hover:bg-indigo-50"
                }`}
              >
                <span className="text-3xl mb-1">{mood.emoji}</span>
                <span className="text-xs text-gray-600">{mood.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stress Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-semibold text-gray-700">Stress Level</h3>
          </div>
          <div className="space-y-4">
            <Slider
              value={stressLevel}
              onValueChange={setStressLevel}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Low</span>
              <span className="font-semibold text-indigo-500">{stressLevel[0]}%</span>
              <span>High</span>
            </div>
          </div>
        </motion.div>

        {/* Journal Entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Quick Journal</h3>
          <Textarea
            placeholder="How's your day going? Write down your thoughts..."
            className="min-h-[120px] rounded-2xl border-gray-200 focus:border-indigo-400 resize-none"
          />
        </motion.div>

        {/* Wellness Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Suggested Activities</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Meditation", emoji: "🧘‍♀️", duration: "5 min" },
              { label: "Deep Breathing", emoji: "🌬️", duration: "3 min" },
              { label: "Gratitude", emoji: "🙏", duration: "2 min" },
              { label: "Music", emoji: "🎵", duration: "10 min" },
            ].map((activity, index) => (
              <button
                key={index}
                className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-pink-50 hover:from-indigo-100 hover:to-pink-100 transition-colors"
              >
                <span className="text-3xl mb-2">{activity.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{activity.label}</span>
                <span className="text-xs text-gray-500 mt-1">{activity.duration}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Save Button */}
        <Button className="w-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white py-6">
          Save Check-in
        </Button>
      </div>
    </div>
  );
}
