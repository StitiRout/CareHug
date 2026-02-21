import { motion } from "motion/react";
import { Sun, Calendar as CalendarIcon, Droplets, Baby, Heart, Smile } from "lucide-react";

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = today.getDay();

  // Generate week view (3 days before, today, 3 days after)
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - 3 + i);
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      isToday: i === 3,
    };
  });

  const quickActions = [
    {
      id: "period",
      title: "Period Tracking",
      subtitle: "Next in 7 days",
      icon: Droplets,
      color: "from-pink-400 to-pink-500",
    },
    {
      id: "pregnancy",
      title: "Pregnancy",
      subtitle: "Week 12",
      icon: Baby,
      color: "from-purple-400 to-purple-500",
    },
    {
      id: "pcos",
      title: "PCOS Health",
      subtitle: "Track symptoms",
      icon: Heart,
      color: "from-rose-400 to-rose-500",
    },
    {
      id: "mental",
      title: "Mental Wellness",
      subtitle: "Daily check-in",
      icon: Smile,
      color: "from-indigo-400 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-b-[40px] px-6 pt-12 pb-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sun className="w-5 h-5" />
              <span className="text-sm opacity-90">Good Morning</span>
            </div>
            <h1 className="text-2xl font-bold">Sarah</h1>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-2xl">👋</span>
          </div>
        </motion.div>

        {/* Mini Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-4"
        >
          <div className="flex justify-between items-center">
            {weekDays.map((day, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  day.isToday ? "bg-white/30 rounded-xl px-2 py-1" : ""
                }`}
              >
                <span className="text-xs opacity-90 mb-1">{day.day}</span>
                <span className={`text-lg ${day.isToday ? "font-bold" : ""}`}>
                  {day.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(action.id)}
              className={`bg-gradient-to-br ${action.color} rounded-3xl p-6 text-white text-left shadow-lg hover:shadow-xl transition-shadow`}
            >
              <action.icon className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-1">{action.title}</h3>
              <p className="text-sm opacity-90">{action.subtitle}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Today's Tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mx-6 mt-6 bg-white rounded-3xl p-6 shadow-lg"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
            <span className="text-xl">💡</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Today's Wellness Tip</h3>
            <p className="text-sm text-gray-600">
              Stay hydrated! Drinking enough water can help reduce bloating and improve your mood.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
