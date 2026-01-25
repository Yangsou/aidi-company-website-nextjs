import { headers } from 'next/headers'

export type RequiredEnvKey = 'STRAPI_API_URL' | 'STRAPI_API_KEY'

export const requireEnv = (key: RequiredEnvKey): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`${key} is not defined`)
  }
  return value
}

export const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, '')
export const resolveUrl = (baseUrl: string, value: string | null): string | null => {
  if (!value) {
    return null
  }

  return /^https?:\/\//.test(value) ? value : `${baseUrl}${value}`
}

export const getCurrentDomain = (): string => {
  const headerList = headers()
  const host = headerList.get('host') ?? ''
  const protocol = process.env.NODE_ENV === 'production' ? 'https://' : 'http://'
  const currentUrl = `${protocol}${host}`

  return currentUrl
}
