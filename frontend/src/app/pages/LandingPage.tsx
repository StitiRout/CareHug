import { Link } from "react-router";
import { Calendar, Baby, Activity, Brain } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Logo } from "../components/Logo";

export function LandingPage() {
  const features = [
    {
      icon: Calendar,
      title: "Period Tracking",
      description: "Track your cycle, symptoms, and moods with ease",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Baby,
      title: "Pregnancy Tracking",
      description: "Monitor your pregnancy journey week by week",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Activity,
      title: "PCOS Management",
      description: "Manage symptoms and track your health metrics",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Journal your thoughts and track your mood",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-lavender-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="text-2xl font-semibold text-gray-800">CareHug</span>
          </div>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-700">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Colonna MT', 'Cinzel', Georgia, serif" }}>
            Your Health, <span className="text-purple-500">Your Way</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive women's health tracking platform designed with care. 
            Track your period, pregnancy, manage PCOS, and nurture your mental wellness - all in one place.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Everything You Need
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive tools to help you take control of your health and wellness journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of women taking control of their health
          </p>
          <Link to="/register">
            <Button className="bg-white text-purple-600 hover:bg-pink-100 text-lg px-8 py-6 rounded-full">
              Get Started Free
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-600 border-t border-gray-200">
        <p>© 2026 CareHug. Your health, handled with care.</p>
      </footer>
    </div>
  );
}