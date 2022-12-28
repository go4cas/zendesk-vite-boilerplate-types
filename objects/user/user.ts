import { TimeZone } from './timezone'
import { Group } from '../group'
import { Organization } from './organization'
import { Identity } from './identity'

type UserRole = 'end-user' | 'agent' | 'admin' // custom roles?

export type User = {
  alias: string
  avatarUrl: string
  details: string
  email: string
  externalId: string
  groups: Group[]
  id: number
  identities: Identity[]
  isSystemUser: boolean
  locale: string
  name: string
  notes: string
  organizations: Organization[]
  role: UserRole | string | number
  signature: string
  tags: string[]
  timeZone: TimeZone
}
