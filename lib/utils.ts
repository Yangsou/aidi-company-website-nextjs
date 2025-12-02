import { clsx, type ClassValue } from 'clsx'
import dayjs from 'dayjs'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FORMAT_DATE = {
  DATE: 'DD/MM/YYYY',
  DATE_TIME: 'DD/MM/YYYY HH:mm',
  ISO_TIME: 'YYYY-MM-DD',
}
export const formatDateString = (date: Date | string, format: string = FORMAT_DATE.DATE) => {
  return dayjs(date).format(format)
}
