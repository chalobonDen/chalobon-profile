import type { AdminRole } from '@/enums/admin'
export interface IUser {
  role?: AdminRole | null
  id: number
  name: String
  url: string
}
