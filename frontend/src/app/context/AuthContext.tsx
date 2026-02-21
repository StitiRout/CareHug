import * as React from "react";
import {
  getStoredToken,
  getStoredUser,
  setStoredAuth,
  clearStoredAuth,
  type AuthUser,
} from "../lib/api";

interface AuthContextValue {
  token: string | null;
  user: AuthUser | null;
  isReady: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = React.useState<string | null>(null);
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setToken(getStoredToken());
    setUser(getStoredUser());
    setIsReady(true);
  }, []);

  const login = React.useCallback(async (email: string, password: string) => {
    const { api } = await import("../lib/api");
    const res = await api.auth.login(email, password);
    const authUser: AuthUser = { userId: res.userId, name: res.name, email: res.email };
    setStoredAuth(res.token, authUser);
    setToken(res.token);
    setUser(authUser);
  }, []);

  const register = React.useCallback(async (name: string, email: string, password: string) => {
    const { api } = await import("../lib/api");
    const res = await api.auth.register(name, email, password);
    const authUser: AuthUser = { userId: res.userId, name: res.name, email: res.email };
    setStoredAuth(res.token, authUser);
    setToken(res.token);
    setUser(authUser);
  }, []);

  const logout = React.useCallback(() => {
    clearStoredAuth();
    setToken(null);
    setUser(null);
  }, []);

  const value: AuthContextValue = {
    token,
    user,
    isReady,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
