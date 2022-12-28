import { Group } from '../group'

export type Organization = {
  // customField:
  details: string
  domains: string
  externalId: string
  group: Group
  id: number
  name: string
  notes: string
  sharedComments: boolean
  sharedTickets: boolean
  tags: string[]
}
