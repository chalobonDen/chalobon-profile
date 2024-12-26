import type { User } from 'firebase/auth'

export interface IAuthLoginParams {
  email: string
  password: string
}

export interface IAuthRegisterParams extends IAuthLoginParams {
  confirmPassword?: string
}

export interface IAuthResponse extends User {
  accessToken: string
}

export interface IBaseResponseError {
  message: string
  statusCode: number
  status: number
  error?: string
  data?: unknown
}

export interface IAuthResponseMessage {
  message: string
}
