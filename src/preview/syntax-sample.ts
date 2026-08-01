/**
 * Equinox syntax preview — open when screenshotting or F5-testing.
 * Exercises: imports, types, classes, decorators, functions, properties,
 * strings, templates, numbers, operators, comments.
 */

import { readFileSync } from "node:fs";

/** Soft olive strings + cyan properties should read as separate families. */
type UserId = string & { readonly __brand: "UserId" };

enum Role {
  Admin = "admin",
  Member = "member",
  Guest = "guest",
}

interface User {
  id: UserId;
  name: string;
  role: Role;
  active?: boolean;
}

const MAX_RETRIES = 3;
const API_URL = "https://api.equinox.dev/v1";

/**
 * Gold keywords, ember storage, sky functions, periwinkle types.
 * Comments stay muted — never compete with body text.
 */
/** @deprecated Prefer UserRepository — kept to show decorator/comment styling. */
class UserService {
  private readonly cache = new Map<UserId, User>();

  constructor(private readonly baseUrl: string = API_URL) {}

  async fetchUser(id: UserId): Promise<User | null> {
    if (this.cache.has(id)) {
      return this.cache.get(id)!;
    }

    try {
      const response = await fetch(`${this.baseUrl}/users/${id}`);
      if (!response.ok) {
        return null;
      }

      const user: User = await response.json();
      this.cache.set(id, user);
      return user;
    } catch (error) {
      console.error("fetch failed:", error);
      return null;
    }
  }

  filterActive(users: User[]): User[] {
    return users
      .filter((u) => u.active === true && u.role !== Role.Guest)
      .map((u) => ({ ...u, name: u.name.trim() }));
  }
}

function greet(user: User): string {
  const label = user.role === Role.Admin ? "operator" : "traveler";
  return `Welcome, ${user.name} — ${label}`;
}

// Operators should stay readable: === && || ?? => +=
const retries = MAX_RETRIES;
const ok = retries > 0 && retries <= 10;
const path = readFileSync("./package.json", "utf8");

export { UserService, greet, ok, path };
export type { User, UserId };
