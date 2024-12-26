import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { IUserActions, IUserState } from './types'
import type { IUser } from '@/interfaces/modules/user'

export const useUserStore = create<IUserState & IUserActions>()(
  persist(
    (set) => ({
      profile: null,
      firebase: {
        providerData: [],
      },
      setSetupNewUser: (payload: IUser) => {
        set((state) => ({
          ...state,
          profile: {
            ...state.profile,
            ...payload,
          },
        }))
      },
      setProfile: (profile) => {
        set((state) => ({
          ...state,
          profile: {
            ...state.profile,
            ...profile,
          },
        }))
      },
      clear: () => {
        set((state) => ({
          ...state,
          profile: null,
          firebase: {
            providerData: [],
          },
        }))
      },
      setFirebaseProviderData: (payload) => {
        set((state) => ({
          ...state,
          firebase: {
            providerData: payload,
          },
        }))
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
