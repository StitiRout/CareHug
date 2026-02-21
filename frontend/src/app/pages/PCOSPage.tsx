import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Activity, Apple, Dumbbell, TrendingUp, AlertCircle } from "lucide-react";

export function PCOSPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [symptoms, setSymptoms] = useState<string[]>([]);

  const symptomsList = [
    "Irregular Periods",
    "Excessive Hair Growth",
    "Acne",
    "Weight Gain",
    "Hair Loss",
    "Mood Changes",
    "Fatigue",
    "Sleep Issues",
  ];

  const toggleSymptom = (symptom: string) => {
    setSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const calculateBMI = () => {
    if (weight && height) {
      const w = parseFloat(weight);
      const h = parseFloat(height) / 100; // convert cm to m
      return (w / (h * h)).toFixed(1);
    }
    return "0.0";
  };

  const dietTips = [
    {
      title: "Low Glycemic Foods",
      description: "Choose whole grains, vegetables, and legumes",
      icon: Apple,
    },
    {
      title: "Lean Proteins",
      description: "Include fish, chicken, tofu, and beans",
      icon: Apple,
    },
    {
      title: "Healthy Fats",
      description: "Add avocados, nuts, and olive oil",
      icon: Apple,
    },
  ];

  const exerciseTips = [
    {
      title: "Cardio Exercise",
      description: "30 minutes of walking or cycling daily",
      icon: Dumbbell,
    },
    {
      title: "Strength Training",
      description: "2-3 sessions per week to build muscle",
      icon: Dumbbell,
    },
    {
      title: "Yoga & Stretching",
      description: "Reduce stress and improve flexibility",
      icon: Dumbbell,
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PCOS Management</h1>
        <p className="text-gray-600">Track symptoms and manage your health holistically</p>
      </div>

      {/* Health Score */}
      <Card className="mb-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Overall Health Score</p>
              <p className="text-5xl font-bold text-gray-900">82/100</p>
              <p className="text-sm text-green-600 font-medium mt-2">↑ Improving</p>
            </div>
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Activity className="w-16 h-16 text-purple-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Symptoms Tracker */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-purple-600" />
              Symptoms Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {symptomsList.map((symptom) => (
                <div
                  key={symptom}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50"
                >
                  <Checkbox
                    id={symptom}
                    checked={symptoms.includes(symptom)}
                    onCheckedChange={() => toggleSymptom(symptom)}
                  />
                  <Label htmlFor={symptom} className="cursor-pointer font-medium text-gray-700">
                    {symptom}
                  </Label>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-5">
              Save Symptoms
            </Button>
          </CardContent>
        </Card>

        {/* Weight & BMI */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              Weight & BMI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                  className="mt-1 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter height"
                  className="mt-1 rounded-xl"
                />
              </div>

              {/* BMI Display */}
              <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                <p className="text-sm text-purple-700 mb-2">Your BMI</p>
                <p className="text-4xl font-bold text-purple-900">{calculateBMI()}</p>
                <p className="text-sm text-purple-600 mt-2">
                  {parseFloat(calculateBMI()) < 18.5
                    ? "Underweight"
                    : parseFloat(calculateBMI()) < 25
                    ? "Normal weight"
                    : parseFloat(calculateBMI()) < 30
                    ? "Overweight"
                    : "Obese"}
                </p>
              </div>

              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-5">
                Update Metrics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Diet Recommendations */}
      <Card className="mb-6 border-none shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Apple className="w-5 h-5 text-green-600" />
            Diet Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dietTips.map((tip, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center mb-3">
                  <tip.icon className="w-6 h-6 text-green-700" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">{tip.title}</p>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Exercise Recommendations */}
      <Card className="border-none shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-indigo-600" />
            Exercise Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {exerciseTips.map((tip, index) => (
              <div key={index} className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                <div className="w-12 h-12 bg-indigo-200 rounded-xl flex items-center justify-center mb-3">
                  <tip.icon className="w-6 h-6 text-indigo-700" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">{tip.title}</p>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Information Section */}
      <Card className="mt-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="text-xl">Understanding PCOS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-gray-700">
              Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting women of
              reproductive age. Management focuses on:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                Maintaining a healthy weight through balanced diet and exercise
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                Managing insulin resistance with low-glycemic foods
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                Regular monitoring of symptoms and health metrics
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                Working closely with healthcare providers for personalized treatment
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}