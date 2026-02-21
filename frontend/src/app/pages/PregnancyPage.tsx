import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Baby, Calendar, TrendingUp, Heart, Scale } from "lucide-react";
import { Progress } from "../components/ui/progress";

export function PregnancyPage() {
  const [weight, setWeight] = useState("");
  const currentWeek = 24;
  const totalWeeks = 40;
  const progress = (currentWeek / totalWeeks) * 100;

  const appointments = [
    { date: "Feb 20, 2026", type: "Routine Checkup", doctor: "Dr. Smith" },
    { date: "Mar 6, 2026", type: "Ultrasound", doctor: "Dr. Johnson" },
    { date: "Mar 20, 2026", type: "Blood Work", doctor: "Dr. Smith" },
  ];

  const milestones = [
    "Baby can hear your voice",
    "Baby's lungs are developing",
    "Baby is about 1 pound",
    "Baby is around 12 inches long",
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Pregnancy Tracking</h1>
        <p className="text-gray-600">Monitor your pregnancy journey week by week</p>
      </div>

      {/* Week Progress */}
      <Card className="mb-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Current Week</p>
              <p className="text-4xl font-bold text-gray-900">{currentWeek}</p>
            </div>
            <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center">
              <Baby className="w-12 h-12 text-pink-600" />
            </div>
          </div>
          <Progress value={progress} className="h-3 mb-2" />
          <p className="text-sm text-gray-600 text-right">
            {totalWeeks - currentWeek} weeks remaining
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Baby Development */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-600" />
              Baby Development - Week {currentWeek}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Baby illustration placeholder */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl h-48 flex items-center justify-center mb-4">
              <Baby className="w-24 h-24 text-pink-400" />
            </div>
            <div className="space-y-3">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-pink-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
                  <p className="text-sm text-gray-700">{milestone}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weight Tracker */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              Weight Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="weight">Current Weight (lbs)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                  className="mt-1 rounded-xl"
                />
              </div>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-5">
                Log Weight
              </Button>

              {/* Weight Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-purple-50 rounded-xl">
                  <p className="text-sm text-purple-700 mb-1">Starting Weight</p>
                  <p className="text-2xl font-bold text-purple-900">145 lbs</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <p className="text-sm text-purple-700 mb-1">Weight Gained</p>
                  <p className="text-2xl font-bold text-purple-900">18 lbs</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-sm text-green-800 font-medium">
                  ✓ Your weight gain is on track
                </p>
                <p className="text-xs text-green-700 mt-1">
                  Recommended range: 15-25 lbs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Doctor Appointments */}
      <Card className="border-none shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            Upcoming Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
              >
                <div>
                  <p className="font-semibold text-gray-900">{appointment.type}</p>
                  <p className="text-sm text-gray-600">{appointment.doctor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-purple-700">{appointment.date}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 hover:text-purple-700 mt-1"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="w-full mt-4 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl py-5"
          >
            + Add Appointment
          </Button>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card className="mt-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            This Week's Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-xl">
              <p className="font-medium text-gray-900 mb-1">Stay Hydrated</p>
              <p className="text-sm text-gray-600">
                Aim for 8-10 glasses of water daily to support your baby's development
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <p className="font-medium text-gray-900 mb-1">Gentle Exercise</p>
              <p className="text-sm text-gray-600">
                Try prenatal yoga or swimming to stay active and reduce discomfort
              </p>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <p className="font-medium text-gray-900 mb-1">Rest Well</p>
              <p className="text-sm text-gray-600">
                Get plenty of rest and sleep on your left side for optimal blood flow
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}