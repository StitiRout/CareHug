import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Home, Calendar, Baby, Activity, Brain, Settings, LogOut, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "../components/Logo";
import { useAuth } from "../context/AuthContext";

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, user, isReady, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isReady) return;
    if (!token) {
      navigate("/login");
    }
  }, [isReady, token, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!isReady || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  const navigation = [
    { name: "Dashboard", path: "/app", icon: Home },
    { name: "Period Tracker", path: "/app/period-tracker", icon: Calendar },
    { name: "Pregnancy", path: "/app/pregnancy", icon: Baby },
    { name: "PCOS", path: "/app/pcos", icon: Activity },
    { name: "Mental Wellness", path: "/app/mental-wellness", icon: Brain },
    { name: "Settings", path: "/app/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="flex h-screen">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="text-2xl font-semibold text-gray-800">CareHug</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{user?.name ?? "User"}</p>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors mt-2"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
          <div className="flex items-center justify-between p-4">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="w-6 h-6" />
              <span className="text-xl font-semibold text-gray-800">CareHug</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 pt-16">
            <nav className="p-4 space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-gray-200 absolute bottom-0 left-0 right-0">
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{user?.name ?? "User"}</p>
                  <p className="text-sm text-gray-500">Premium Member</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors mt-2"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto pt-16 md:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}