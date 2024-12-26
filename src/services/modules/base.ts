import type { AxiosRequestConfig } from 'axios'

import Axios from '@/lib/axios'

class BaseService {
  static async _get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const params = config?.params

    try {
      const res = await Axios.get(url, {
        ...config,
        params,
      })
      return Promise.resolve(res.data)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  static async _post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await Axios.post(url, data, config)
      return Promise.resolve(res.data)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  static async _patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await Axios.patch(url, data, config)
      return Promise.resolve(res.data)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  static async _put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await Axios.put(url, data, config)
      return Promise.resolve(res.data)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  static async _delete<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await Axios.delete(url, {
        ...config,
        data,
      })
      return Promise.resolve(res.data)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

export default BaseService
