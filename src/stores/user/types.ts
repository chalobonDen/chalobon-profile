import type { UserInfo } from 'firebase/auth'

import type { IUser } from '@/interfaces/modules/user'

export interface IUserState {
  profile: IUser | null
  firebase: {
    providerData: UserInfo[]
  }
}

export interface IUserActions {
  setProfile: (profile: IUser) => void
  clear: VoidFunction
  setFirebaseProviderData: (payload: UserInfo[]) => void
}
