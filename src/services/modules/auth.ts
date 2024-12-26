import {
  EmailAuthProvider,
  // FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from 'firebase/auth'

import BaseService from './base'
import type {
  IAuthLoginParams,
  IAuthResponse,
  IAuthRegisterParams,
  IAuthResponseMessage,
} from '@/interfaces/modules/auth'
import type { IUser } from '@/interfaces/modules/user'
import { auth } from '@/lib/firebase'
import { useUserStore } from '@/stores/user'

class AuthService extends BaseService {
  static async login(params: IAuthLoginParams): Promise<IAuthResponse> {
    try {
      const { user } = await signInWithEmailAndPassword(auth, params.email, params.password)
      const accessToken = await user.getIdToken()

      return {
        ...user,
        accessToken,
      }
    } catch (error) {
      throw error
    }
  }

  static async loginWithGoogleAccount(): Promise<IAuthResponse> {
    const provider = new GoogleAuthProvider()
    provider.addScope('email')

    try {
      const { user } = await signInWithPopup(auth, provider)
      const accessToken = await user.getIdToken()

      return {
        ...user,
        accessToken,
      }
    } catch (error) {
      throw error
    }
  }

  static async registerEmail(params: IAuthRegisterParams): Promise<IAuthResponse> {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, params.email, params.password)
      const accessToken = await user.getIdToken()
      await sendEmailVerification(user)
      return {
        ...user,
        accessToken,
      }
    } catch (error) {
      throw error
    }
  }

  static async getProfile(): Promise<IUser> {
    try {
      const data: IUser = await this._get('/auth/profile')
      useUserStore.getState().setProfile(data)
      return data
    } catch (error) {
      throw error
    }
  }

  static async updateProfile(payload: { profileName: string }): Promise<IAuthResponseMessage> {
    try {
      const updateProfile = await this._patch<IAuthResponseMessage>('/auth/profile', { name: payload.profileName })
      const data: IUser = await this.getProfile()
      useUserStore.getState().setProfile(data)
      return updateProfile
    } catch (error) {
      throw error
    }
  }

  static async sendResetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email)
  }

  static async reauthenticateUser(password: string): Promise<{ success: boolean }> {
    const user: any = auth.currentUser
    const credential = EmailAuthProvider.credential(user.email, password)
    try {
      await reauthenticateWithCredential(user, credential)
      return { success: true }
    } catch (error) {
      return { success: false }
    }
  }

  static async updatePassword(password: string): Promise<void> {
    const user: any = auth.currentUser
    return updatePassword(user, password)
  }

  static async logout(): Promise<void> {
    return signOut(auth)
  }

  static async deleteAccount(): Promise<void> {
    return await this._delete(`/auth/`)
  }
}

export default AuthService
