export interface IAuthState {
  accessToken: string | null
  refreshToken: string | null
}

export interface IAuthActions {
  isAuth: () => boolean
  login: (tokens: Pick<IAuthState, 'accessToken' | 'refreshToken'>) => void
  logout: () => void
  checkTokenExpiration: () => void
}
