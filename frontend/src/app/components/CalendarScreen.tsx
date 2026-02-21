import * as React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarScreenProps {
  onBack?: () => void;
}

export function CalendarScreen({ onBack }: CalendarScreenProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Mock data for demonstration
  const periodDays = [5, 6, 7, 8, 9];
  const ovulationDay = 19;
  const fertileDays = [17, 18, 19, 20, 21];

  const getDayStyle = (day: number) => {
    if (periodDays.includes(day)) {
      return "bg-pink-400 text-white";
    }
    if (day === ovulationDay) {
      return "bg-purple-400 text-white";
    }
    if (fertileDays.includes(day)) {
      return "bg-pink-100 text-pink-600";
    }
    return "bg-white text-gray-700 hover:bg-gray-50";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-b-[40px] px-6 pt-12 pb-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Calendar</h1>
        <p className="opacity-90">Track your health journey</p>
      </div>

      <div className="px-6 mt-6 space-y-6">
        {/* Month Navigator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={previousMonth}
              className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-pink-500" />
            </button>
            <h2 className="text-xl font-semibold text-gray-700">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-pink-500" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 mb-2">
                {day}
              </div>
            ))}
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} />
            ))}
            {days.map((day) => (
              <motion.button
                key={day}
                whileTap={{ scale: 0.95 }}
                className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-colors ${getDayStyle(day)}`}
              >
                {day}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Legend</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-pink-400" />
              <span className="text-sm text-gray-700">Period Days</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-purple-400" />
              <span className="text-sm text-gray-700">Ovulation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-pink-100 border-2 border-pink-300" />
              <span className="text-sm text-gray-700">Fertile Window</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-white border-2 border-gray-300" />
              <span className="text-sm text-gray-700">Regular Day</span>
            </div>
          </div>
        </motion.div>

        {/* Cycle Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">This Month's Summary</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-pink-500">28</p>
              <p className="text-xs text-gray-600 mt-1">Cycle Length</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-pink-500">5</p>
              <p className="text-xs text-gray-600 mt-1">Period Days</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-pink-500">12</p>
              <p className="text-xs text-gray-600 mt-1">Logs Added</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
