export interface IPaginationQuery {
  page?: number
  perPage?: number
}

export interface IPaginatedResponse<T> {
  data: T[]
  lastPage: number
  page: number
  perPage: number
  total: number
}
