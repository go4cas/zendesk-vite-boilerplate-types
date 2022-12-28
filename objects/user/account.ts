import { TimeZone } from './timezone'

export type Account = {
  planName: string
  subdomain: string
  daysLeftInTrial: number
  timeZone: TimeZone
}
