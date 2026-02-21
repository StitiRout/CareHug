/**
 * API client for CareHug backend. Uses fetch with JWT in Authorization header.
 * Base URL is read from Vite env (VITE_API_URL) or defaults to http://localhost:8080.
 */

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

const STORAGE_KEY_TOKEN = "carehug_token";
const STORAGE_KEY_USER = "carehug_user";

export function getStoredToken(): string | null {
  return localStorage.getItem(STORAGE_KEY_TOKEN);
}

export function setStoredAuth(token: string, user: AuthUser): void {
  localStorage.setItem(STORAGE_KEY_TOKEN, token);
  localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
}

export function clearStoredAuth(): void {
  localStorage.removeItem(STORAGE_KEY_TOKEN);
  localStorage.removeItem(STORAGE_KEY_USER);
}

export function getStoredUser(): AuthUser | null {
  const raw = localStorage.getItem(STORAGE_KEY_USER);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export interface AuthUser {
  userId: number;
  name: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  userId: number;
  name: string;
  email: string;
}

export interface PeriodResponse {
  id: number;
  userId: number;
  startDate: string;
  endDate: string;
  flowType: string | null;
  symptoms: string | null;
}

export interface MoodResponse {
  id: number;
  userId: number;
  date: string;
  moodType: string;
  notes: string | null;
}

async function request<T>(
  path: string,
  options: RequestInit & { skipAuth?: boolean } = {}
): Promise<T> {
  const { skipAuth, ...fetchOptions } = options;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...((fetchOptions.headers as Record<string, string>) ?? {}),
  };
  if (!skipAuth) {
    const token = getStoredToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...fetchOptions,
    headers,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const message = (body as { message?: string }).message ?? body.error ?? res.statusText;
    throw new Error(message);
  }

  if (res.status === 204 || res.headers.get("content-length") === "0") {
    return undefined as T;
  }
  return res.json() as Promise<T>;
}

export const api = {
  auth: {
    login(email: string, password: string) {
      return request<AuthResponse>("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        skipAuth: true,
      });
    },
    register(name: string, email: string, password: string) {
      return request<AuthResponse>("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        skipAuth: true,
      });
    },
  },

  periods: {
    list() {
      return request<PeriodResponse[]>("/api/periods");
    },
    create(data: { startDate: string; endDate: string; flowType?: string; symptoms?: string }) {
      return request<PeriodResponse>("/api/periods", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },

  moods: {
    list() {
      return request<MoodResponse[]>("/api/moods");
    },
    create(data: { date: string; moodType: string; notes?: string }) {
      return request<MoodResponse>("/api/moods", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
  },
};
