import { IdentityType } from './identitytype'

export type Identity = {
  id: number
  type: IdentityType
  value: string
  verified: boolean
  primary: boolean
  userId: number
  undeliverableCount: number
  deliverableState: string
}
