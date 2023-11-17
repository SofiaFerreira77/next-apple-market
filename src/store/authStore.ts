import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

type UserData = {
  username: string,
  password: string
}

type AuthStore = {
  isAuthenticated: Boolean,
  user: UserData,
  token: string,
  login: (userData: UserData, token: string ) => void,
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        user: null,
        token: null,
        login: (userData, token) => set({ isAuthenticated: true, user: userData, token }),
        logout: () => set({ isAuthenticated: false, user: null, token: null }),
      }),
      { name: 'authStore' }
    )
  )
);

export default useAuthStore;