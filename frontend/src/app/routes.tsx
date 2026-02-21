import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardLayout } from "./pages/DashboardLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { PeriodTrackerPage } from "./pages/PeriodTrackerPage";
import { PregnancyPage } from "./pages/PregnancyPage";
import { PCOSPage } from "./pages/PCOSPage";
import { MentalWellnessPage } from "./pages/MentalWellnessPage";
import { SettingsPage } from "./pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: "period-tracker",
        Component: PeriodTrackerPage,
      },
      {
        path: "pregnancy",
        Component: PregnancyPage,
      },
      {
        path: "pcos",
        Component: PCOSPage,
      },
      {
        path: "mental-wellness",
        Component: MentalWellnessPage,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
    ],
  },
]);
