import AES from 'crypto-js/aes'
import type Cookies from 'js-cookie'

import { decryptAESDeserialize } from './deserialize'
import { serialize as serialize_ } from './serialize'

// Define the BaseStorage type using typeof Cookies
type BaseStorage = typeof Cookies & {
  noConflict?(): typeof Cookies
}

export type ClientCookieStorage = {
  get<T>(key: string, defaultState?: T | null): T | null
  set<T>(key: string, value: T | null): void
  remove(key: string): void
}

export const createCookieStorage = ({
  key: prefix = 'persist',
  serialize = serialize_,
  storage,
  secureKey = null,
}: {
  deserialize?: <T>(value: string) => T
  key?: string
  serialize?: <T>(value: T) => string
  storage: BaseStorage
  secureKey?: string | null
}): ClientCookieStorage => {
  return {
    ...storage,
    get: (key, defaultState = null) => {
      const value = storage.get(`${prefix}.${key}`) || '' // Provide a default empty string if value is undefined
      try {
        return decryptAESDeserialize({
          value,
          defaultState,
          secureKey,
        })
      } catch (error) {
        console.warn(error)
        return defaultState
      }
    },
    set: (key, value) => {
      if (value === null) {
        storage.remove(`${prefix}.${key}`)
      } else {
        try {
          if (secureKey)
            return storage.set(`${prefix}.${key}`, AES.encrypt(serialize(value), secureKey ?? 'key').toString())
          storage.set(`${prefix}.${key}`, serialize(value))
        } catch (err) {
          console.error(err)
        }
      }
    },
    remove: (key) => storage.remove(`${prefix}.${key}`),
  }
}
