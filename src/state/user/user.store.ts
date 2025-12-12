import { create } from "zustand";

type User = { username: string } | null;

type UserState = {
  user: User;
  setUser: (u: User) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
}));
