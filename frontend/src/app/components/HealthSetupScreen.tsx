import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

interface HealthSetupScreenProps {
  onComplete: () => void;
}

export function HealthSetupScreen({ onComplete }: HealthSetupScreenProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const healthGoals = [
    { id: "period", label: "Period Tracking", icon: "🌸" },
    { id: "pregnancy", label: "Pregnancy Tracking", icon: "🤰" },
    { id: "pcos", label: "PCOS Management", icon: "💪" },
    { id: "mental", label: "Mental Wellness", icon: "🧘‍♀️" },
  ];

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((id) => id !== goalId) : [...prev, goalId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex flex-col"
    >
      <div className="flex-1 flex flex-col px-6 py-12 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-pink-400 fill-pink-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-pink-500 mb-2">Let's Get Started</h1>
          <p className="text-pink-400">Tell us a bit about yourself</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-lg p-8 flex-1 flex flex-col"
        >
          <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
            <div className="space-y-2">
              <Label htmlFor="dob" className="text-gray-700">Date of Birth</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                <Input
                  id="dob"
                  type="date"
                  className="pl-11 rounded-full border-pink-200 focus:border-pink-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <Label className="text-gray-700">What are your health goals?</Label>
              <div className="space-y-3">
                {healthGoals.map((goal) => (
                  <motion.div
                    key={goal.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleGoal(goal.id)}
                    className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedGoals.includes(goal.id)
                        ? "bg-pink-50 border-pink-400"
                        : "bg-white border-pink-200 hover:border-pink-300"
                    }`}
                  >
                    <span className="text-2xl mr-3">{goal.icon}</span>
                    <span className="flex-1 text-gray-700">{goal.label}</span>
                    {selectedGoals.includes(goal.id) && (
                      <CheckCircle2 className="w-6 h-6 text-pink-500" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={selectedGoals.length === 0}
              className="w-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-6 disabled:opacity-50"
            >
              Continue
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
