import Cookies from 'js-cookie'

import type { IAuthState } from './types'
import { STORE_KEY } from '@/constants/stores'
import { createCookieStorage } from '@/utils/cookieStorage'

const KEY = STORE_KEY.auth.key

export const storage = createCookieStorage({
  secureKey: STORE_KEY.auth.secureKey,
  storage: Cookies,
})

export const getTokens = storage.get<IAuthState>(KEY)

export const setTokens = (tokens: IAuthState) => {
  storage.set<IAuthState>(KEY, tokens)
}

export const removeTokens = () => {
  storage.remove(KEY)
}
