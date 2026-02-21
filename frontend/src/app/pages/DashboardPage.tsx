import { Calendar as CalendarIcon, Heart, TrendingUp, Smile } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar } from "../components/ui/calendar";
import { useState } from "react";

export function DashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const stats = [
    {
      title: "Next Period Date",
      value: "Feb 20, 2026",
      icon: CalendarIcon,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Cycle Length",
      value: "28 days",
      icon: TrendingUp,
      color: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      title: "Mood Today",
      value: "Happy",
      icon: Smile,
      color: "bg-lavender-100",
      iconColor: "text-indigo-600",
    },
    {
      title: "Health Score",
      value: "85/100",
      icon: Heart,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah! 👋</h1>
        <p className="text-gray-600">Here's your health summary for today</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-none shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-2 border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Your Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-xl"
            />
          </CardContent>
        </Card>

        {/* Health Summary */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Health Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-xl">
              <p className="text-sm text-purple-700 font-medium mb-1">Period Tracking</p>
              <p className="text-xs text-purple-600">Your next period starts in 7 days</p>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <p className="text-sm text-pink-700 font-medium mb-1">Cycle Insights</p>
              <p className="text-xs text-pink-600">You're in the follicular phase</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-xl">
              <p className="text-sm text-indigo-700 font-medium mb-1">Overall Health</p>
              <p className="text-xs text-indigo-600">Great progress this week</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Health Check</p>
                <p className="text-sm text-gray-600">Quick assessment</p>
              </div>
            </div>
          </button>
          <button className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                <Smile className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Log Mood</p>
                <p className="text-sm text-gray-600">How are you feeling?</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}