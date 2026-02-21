import * as React from "react";
import { motion } from "motion/react";
import { Home, Activity, Calendar, User } from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "dashboard", label: "Home", icon: Home },
    { id: "track", label: "Track", icon: Activity },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 safe-area-bottom">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around px-6 py-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="relative flex flex-col items-center gap-1 py-2 px-4 transition-all"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    color: isActive ? "#f472b6" : "#9ca3af",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <tab.icon className="w-6 h-6" />
                </motion.div>
                <span
                  className={`text-xs transition-colors ${
                    isActive ? "text-pink-500 font-medium" : "text-gray-400"
                  }`}
                >
                  {tab.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-500"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
