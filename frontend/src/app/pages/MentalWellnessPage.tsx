import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Smile, Frown, Meh, Laugh, HeartCrack, BookOpen, Sun, Wind, Sparkles } from "lucide-react";
import { api, type MoodResponse } from "../lib/api";
import { format } from "date-fns";

export function MentalWellnessPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journal, setJournal] = useState("");
  const [moodHistory, setMoodHistory] = useState<MoodResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    api.moods.list().then(setMoodHistory).catch(() => setMoodHistory([]));
  }, []);

  const moods = [
    { id: "amazing", icon: Laugh, label: "Amazing", color: "text-green-600 bg-green-100" },
    { id: "happy", icon: Smile, label: "Happy", color: "text-purple-600 bg-purple-100" },
    { id: "okay", icon: Meh, label: "Okay", color: "text-yellow-600 bg-yellow-100" },
    { id: "sad", icon: Frown, label: "Sad", color: "text-orange-600 bg-orange-100" },
    { id: "stressed", icon: HeartCrack, label: "Stressed", color: "text-red-600 bg-red-100" },
  ];

  const selfCareTips = [
    {
      title: "Mindful Meditation",
      description: "Take 10 minutes to practice deep breathing",
      icon: Wind,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Get Sunlight",
      description: "Spend 15 minutes outdoors for vitamin D",
      icon: Sun,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: "Gratitude Practice",
      description: "Write down 3 things you're grateful for",
      icon: Sparkles,
      color: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      title: "Reading Time",
      description: "Relax with a good book for 20 minutes",
      icon: BookOpen,
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  const handleSaveEntry = async () => {
    if (!selectedMood) {
      setError("Please select a mood");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await api.moods.create({
        date: format(new Date(), "yyyy-MM-dd"),
        moodType: selectedMood,
        notes: journal.trim() || undefined,
      });
      const list = await api.moods.list();
      setMoodHistory(list);
      setJournal("");
      setSelectedMood(null);
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mental Wellness</h1>
        <p className="text-gray-600">Track your mood and nurture your mental health</p>
      </div>

      {/* Mood Streak Card */}
      <Card className="mb-6 border-none shadow-lg rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Current Streak</p>
              <p className="text-5xl font-bold text-gray-900">14 days</p>
              <p className="text-sm text-purple-600 font-medium mt-2">🔥 Keep it up!</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-2">Entries This Month</p>
              <p className="text-3xl font-bold text-gray-900">28</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Mood Selection */}
        <Card className="lg:col-span-2 border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">How are you feeling today?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all ${
                    selectedMood === mood.id
                      ? `${mood.color} ring-2 ring-offset-2`
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <mood.icon
                    className={`w-12 h-12 ${
                      selectedMood === mood.id ? mood.color.split(" ")[0] : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      selectedMood === mood.id ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {mood.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Journal Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Write your thoughts...
              </label>
              <Textarea
                value={journal}
                onChange={(e) => setJournal(e.target.value)}
                placeholder="What's on your mind? How was your day?"
                className="min-h-[200px] rounded-xl border-gray-300 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 mt-2">{error}</p>
            )}
            <Button
              onClick={handleSaveEntry}
              disabled={loading}
              className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white py-6 rounded-xl text-lg"
            >
              {loading ? "Saving..." : "Save Entry"}
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl">Mood Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Most Common</span>
                <Smile className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-lg font-bold text-gray-900">Happy</p>
              <p className="text-xs text-gray-600">60% of entries</p>
            </div>

            <div className="p-4 bg-pink-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Best Day</span>
                <Laugh className="w-5 h-5 text-pink-600" />
              </div>
              <p className="text-lg font-bold text-gray-900">Saturdays</p>
              <p className="text-xs text-gray-600">Most amazing days</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Weekly Average</span>
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-lg font-bold text-gray-900">Good</p>
              <p className="text-xs text-gray-600">Improving trend</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Self-Care Suggestions */}
      <Card className="border-none shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Self-Care Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selfCareTips.map((tip, index) => (
              <div key={index} className={`${tip.color} p-6 rounded-2xl`}>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                  <tip.icon className={`w-6 h-6 ${tip.iconColor}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Entries */}
      <Card className="mt-6 border-none shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Recent Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {moodHistory.length === 0 ? (
              <p className="text-gray-500 text-sm">No entries yet. Save your first mood above.</p>
            ) : (
              moodHistory.slice(0, 10).map((entry) => (
                <div key={entry.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">
                      {format(new Date(entry.date), "MMM d, yyyy")}
                    </span>
                    <span className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full capitalize">
                      {entry.moodType}
                    </span>
                  </div>
                  {entry.notes && (
                    <p className="text-sm text-gray-600">
                      {entry.notes.length > 80 ? entry.notes.slice(0, 80) + "..." : entry.notes}
                    </p>
                  )}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}