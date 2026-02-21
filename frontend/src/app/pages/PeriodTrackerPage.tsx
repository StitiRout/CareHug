import { useState, useEffect } from "react";
import { Calendar } from "../components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Droplet, TrendingUp } from "lucide-react";
import { api, type PeriodResponse } from "../lib/api";
import { format } from "date-fns";

function toDateString(d: Date): string {
  return format(d, "yyyy-MM-dd");
}

export function PeriodTrackerPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [flow, setFlow] = useState<"light" | "medium" | "heavy" | null>(null);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [history, setHistory] = useState<PeriodResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const symptomsList = [
    "Cramps",
    "Headache",
    "Mood Swings",
    "Fatigue",
    "Bloating",
    "Back Pain",
    "Breast Tenderness",
    "Acne",
  ];

  useEffect(() => {
    api.periods
      .list()
      .then(setHistory)
      .catch(() => setHistory([]));
  }, []);

  const cycleData = history.length
    ? history.slice(0, 6).reverse().map((p, i) => ({
        month: format(new Date(p.startDate), "MMM"),
        length: Math.round(
          (new Date(p.endDate).getTime() - new Date(p.startDate).getTime()) / (24 * 60 * 60 * 1000)
        ) + 1,
      }))
    : [
        { month: "Aug", length: 28 },
        { month: "Sep", length: 29 },
        { month: "Oct", length: 27 },
        { month: "Nov", length: 28 },
        { month: "Dec", length: 28 },
        { month: "Jan", length: 29 },
      ];

  const toggleSymptom = (symptom: string) => {
    setSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const handleSubmit = async () => {
    if (!date) return;
    setError("");
    setLoading(true);
    try {
      const start = toDateString(date);
      await api.periods.create({
        startDate: start,
        endDate: start,
        flowType: flow ?? undefined,
        symptoms: symptoms.length ? symptoms.join(", ") : undefined,
      });
      const list = await api.periods.list();
      setHistory(list);
      setFlow(null);
      setSymptoms([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Period Tracker</h1>
        <p className="text-gray-600">Track your menstrual cycle and symptoms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <Card className="lg:col-span-2 border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Select Date</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="scale-125 transform origin-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-xl"
              />
            </div>
          </CardContent>
        </Card>

        {/* Flow & Symptoms Section */}
        <div className="space-y-6">
          {/* Flow Selection */}
          <Card className="border-none shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Droplet className="w-5 h-5 text-purple-600" />
                Flow Level
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button
                onClick={() => setFlow("light")}
                className={`w-full p-4 rounded-xl border-2 transition-colors ${
                  flow === "light"
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-purple-200"
                }`}
              >
                <p className="font-semibold text-gray-900">Light</p>
                <p className="text-sm text-gray-600">Spotting or minimal flow</p>
              </button>
              <button
                onClick={() => setFlow("medium")}
                className={`w-full p-4 rounded-xl border-2 transition-colors ${
                  flow === "medium"
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-purple-200"
                }`}
              >
                <p className="font-semibold text-gray-900">Medium</p>
                <p className="text-sm text-gray-600">Regular flow</p>
              </button>
              <button
                onClick={() => setFlow("heavy")}
                className={`w-full p-4 rounded-xl border-2 transition-colors ${
                  flow === "heavy"
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-purple-200"
                }`}
              >
                <p className="font-semibold text-gray-900">Heavy</p>
                <p className="text-sm text-gray-600">Very heavy flow</p>
              </button>
            </CardContent>
          </Card>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6 rounded-xl text-lg"
          >
            {loading ? "Saving..." : "Log Period Data"}
          </Button>
        </div>
      </div>

      {/* Symptoms Section */}
      <Card className="mt-6 border-none shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Symptoms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </CardContent>
      </Card>

      {/* Analytics Section */}
      <Card className="mt-6 border-none shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            Cycle Length Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cycleData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="length"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ fill: "#8b5cf6", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-xl">
            <p className="text-sm text-purple-900 font-medium">Average Cycle Length: 28 days</p>
            <p className="text-xs text-purple-700 mt-1">Your cycle is regular and healthy</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}