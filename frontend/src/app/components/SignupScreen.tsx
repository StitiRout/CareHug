import { motion } from "motion/react";
import { Heart, User, Mail, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface SignupScreenProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export function SignupScreen({ onSignup, onSwitchToLogin }: SignupScreenProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex flex-col"
    >
      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-pink-400 fill-pink-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-pink-500 mb-2">Join CareHug</h1>
          <p className="text-pink-400">Create your account to get started</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="pl-11 rounded-full border-pink-200 focus:border-pink-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-11 rounded-full border-pink-200 focus:border-pink-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-11 rounded-full border-pink-200 focus:border-pink-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="pl-11 rounded-full border-pink-200 focus:border-pink-400"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-6"
            >
              Sign Up
            </Button>
          </form>
        </motion.div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-pink-500 font-semibold hover:text-pink-600"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
