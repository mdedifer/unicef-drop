import { User } from "./data";

const USER_KEY = "drop-user";

export function login(name: string, email: string): User {
  // Check if user with this email already exists
  const existing = getUser();
  if (existing && existing.email === email) {
    return existing;
  }

  const user: User = {
    id: `user-${Date.now()}`,
    name,
    email,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
}

export function logout(): void {
  localStorage.removeItem(USER_KEY);
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function isLoggedIn(): boolean {
  return getUser() !== null;
}
