import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Droplets, Heart, Thermometer, Wind } from "lucide-react";
import { Button } from "./ui/button";

interface PeriodTrackingScreenProps {
  onBack: () => void;
}

export function PeriodTrackingScreen({ onBack }: PeriodTrackingScreenProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);

  const moods = [
    { id: "happy", emoji: "😊", label: "Happy" },
    { id: "sad", emoji: "😢", label: "Sad" },
    { id: "anxious", emoji: "😰", label: "Anxious" },
    { id: "calm", emoji: "😌", label: "Calm" },
    { id: "irritated", emoji: "😤", label: "Irritated" },
  ];

  const symptoms = [
    { id: "cramps", icon: Wind, label: "Cramps" },
    { id: "headache", icon: Thermometer, label: "Headache" },
    { id: "acne", icon: Heart, label: "Acne" },
    { id: "fatigue", icon: Droplets, label: "Fatigue" },
  ];

  const flows = [
    { id: "light", label: "Light", color: "bg-pink-200" },
    { id: "medium", label: "Medium", color: "bg-pink-400" },
    { id: "heavy", label: "Heavy", color: "bg-pink-600" },
  ];

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId) ? prev.filter((id) => id !== symptomId) : [...prev, symptomId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-b-[40px] px-6 pt-12 pb-8 text-white">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-3xl font-bold mb-2">Period Tracking</h1>
        <p className="opacity-90">Track your cycle and symptoms</p>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Countdown Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#fce7f3"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#f472b6"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={553}
                  strokeDashoffset={138}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-pink-500">7</span>
                <span className="text-sm text-gray-600">days</span>
              </div>
            </div>
            <p className="text-gray-700 text-center">Your period starts in</p>
            <p className="text-sm text-pink-400 mt-2">Day 21 of your cycle</p>
          </div>
        </motion.div>

        {/* Mood Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">How are you feeling?</h3>
          <div className="flex justify-between gap-2">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`flex flex-col items-center p-3 rounded-2xl transition-all ${
                  selectedMood === mood.id
                    ? "bg-pink-100 scale-110"
                    : "bg-gray-50 hover:bg-pink-50"
                }`}
              >
                <span className="text-3xl mb-1">{mood.emoji}</span>
                <span className="text-xs text-gray-600">{mood.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Symptoms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Any symptoms?</h3>
          <div className="grid grid-cols-2 gap-3">
            {symptoms.map((symptom) => (
              <button
                key={symptom.id}
                onClick={() => toggleSymptom(symptom.id)}
                className={`flex items-center gap-3 p-4 rounded-2xl transition-all ${
                  selectedSymptoms.includes(symptom.id)
                    ? "bg-pink-100 border-2 border-pink-400"
                    : "bg-gray-50 border-2 border-transparent hover:bg-pink-50"
                }`}
              >
                <symptom.icon className="w-5 h-5 text-pink-400" />
                <span className="text-sm text-gray-700">{symptom.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Flow Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Flow level</h3>
          <div className="flex gap-3">
            {flows.map((flow) => (
              <button
                key={flow.id}
                onClick={() => setSelectedFlow(flow.id)}
                className={`flex-1 p-4 rounded-2xl transition-all ${
                  selectedFlow === flow.id
                    ? `${flow.color} text-white scale-105`
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="text-center">
                  <Droplets className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{flow.label}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Save Button */}
        <Button className="w-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-6">
          Save Today's Log
        </Button>
      </div>
    </div>
  );
}
