import { motion } from "motion/react";
import { User, Bell, FileText, Shield, LogOut, ChevronRight, Calendar, Activity } from "lucide-react";

interface ProfileScreenProps {
  onBack?: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const settingsOptions = [
    { id: "notifications", label: "Notifications", icon: Bell, color: "text-pink-500" },
    { id: "health-report", label: "Health Report", icon: FileText, color: "text-purple-500" },
    { id: "terms", label: "Terms & Conditions", icon: Shield, color: "text-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-b-[40px] px-6 pt-12 pb-20 text-white">
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
        <p className="opacity-90">Manage your account and settings</p>
      </div>

      <div className="px-6 -mt-12 space-y-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
              S
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">Sarah Johnson</h2>
              <p className="text-gray-600">sarah.j@email.com</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors">
              <User className="w-5 h-5 text-pink-500" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-500">28</p>
              <p className="text-xs text-gray-600 mt-1">Age</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-500">165cm</p>
              <p className="text-xs text-gray-600 mt-1">Height</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-500">58kg</p>
              <p className="text-xs text-gray-600 mt-1">Weight</p>
            </div>
          </div>
        </motion.div>

        {/* Health Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Health Statistics</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-pink-50">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Calendar className="w-6 h-6 text-pink-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Average Cycle Length</p>
                <p className="text-lg font-semibold text-gray-800">28 days</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Period Duration</p>
                <p className="text-lg font-semibold text-gray-800">5 days</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Settings</h3>
          <div className="space-y-2">
            {settingsOptions.map((option) => (
              <button
                key={option.id}
                className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <option.icon className={`w-5 h-5 ${option.color}`} />
                <span className="flex-1 text-left text-gray-700">{option.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-lg"
        >
          <h3 className="font-semibold text-gray-700 mb-4">Account Actions</h3>
          <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-50 hover:bg-red-100 transition-colors">
            <LogOut className="w-5 h-5 text-red-500" />
            <span className="flex-1 text-left text-red-600 font-medium">Log Out</span>
          </button>

          <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors mt-2">
            <Shield className="w-5 h-5 text-gray-500" />
            <span className="flex-1 text-left text-gray-600">Delete Account</span>
          </button>
        </motion.div>

        {/* Version Info */}
        <p className="text-center text-sm text-gray-400 py-4">
          CareHug v1.0.0
        </p>
      </div>
    </div>
  );
}
