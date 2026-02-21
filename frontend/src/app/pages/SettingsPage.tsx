import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { User, Bell, Lock, Globe, Palette, HelpCircle } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                defaultValue="Sarah Johnson"
                className="mt-1 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="sarah@example.com"
                className="mt-1 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="mt-1 rounded-xl"
              />
            </div>
            <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl py-5">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Bell className="w-5 h-5 text-purple-600" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">Period Reminders</p>
                <p className="text-sm text-gray-600">Get notified before your period</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">Appointment Alerts</p>
                <p className="text-sm text-gray-600">Reminders for doctor visits</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">Daily Check-in</p>
                <p className="text-sm text-gray-600">Mood and wellness prompts</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">Health Tips</p>
                <p className="text-sm text-gray-600">Weekly wellness advice</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                placeholder="••••••••"
                className="mt-1 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="••••••••"
                className="mt-1 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="mt-1 rounded-xl"
              />
            </div>
            <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl py-5">
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="border-none shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Palette className="w-5 h-5 text-pink-600" />
              Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">Dark Mode</p>
                <p className="text-sm text-gray-600">Toggle dark theme</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">Data Sync</p>
                <p className="text-sm text-gray-600">Sync across devices</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div>
              <Label htmlFor="language" className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-600" />
                Language
              </Label>
              <select
                id="language"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-purple-400"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="hi">Hindi (हिंदी)</option>
                <option value="od">Odia (ଓଡ଼ିଆ)</option>
                <option value="ta">Tamil (தமிழ்)</option>
                <option value="te">Telugu (తెలుగు)</option>
                <option value="bn">Bengali (বাংলা)</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Help Center</p>
              <p className="text-sm text-gray-600">Get support</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Privacy Policy</p>
              <p className="text-sm text-gray-600">View terms</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">About CareHug</p>
              <p className="text-sm text-gray-600">Version 1.0.0</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="mt-6 border-2 border-red-200 bg-red-50 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl text-red-900">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-red-900">Delete Account</p>
              <p className="text-sm text-red-700">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive" className="rounded-xl">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}