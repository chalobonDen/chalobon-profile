import { create } from 'zustand'

import { getTokens, removeTokens, setTokens } from './storage'
import type { IAuthActions, IAuthState } from './types'

export const useAuthStore = create<IAuthState & IAuthActions>((set, get) => ({
  accessToken: getTokens?.accessToken || null,
  refreshToken: getTokens?.refreshToken || null,
  isAuth: () => !!get()?.accessToken,
  login: (tokens: IAuthState) => {
    setTokens(tokens)
    set((state) => ({
      ...state,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    }))
  },
  logout: () => {
    removeTokens()
    set((state) => ({
      ...state,
      accessToken: null,
      refreshToken: null,
    }))
  },
  checkTokenExpiration: () => {
    const tokens = getTokens
    if (tokens) {
      const { accessToken } = tokens
      if (accessToken) {
        const payload = JSON.parse(atob(accessToken.split('.')[1]))
        const exp = payload.exp * 1000
        if (Date.now() >= exp) {
          get().logout()
        }
      }
    }
  },
}))
