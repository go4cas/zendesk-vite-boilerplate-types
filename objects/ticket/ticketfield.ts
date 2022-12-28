import { Status } from './status'
import { TicketFieldType } from './ticketfieldtype'
import { TicketFieldOption } from './ticketfieldoption'

export type TicketField = {
  name: string
  label: string
  // optionValues: TicketFieldOption[]  TODO
  // optionGroups:  TODO
  isRequired: boolean
  requiredOnStatuses: Status[]
  isVisible: boolean
  isEnabled: boolean
  type: TicketFieldType
  // optionValues:  TODO
}
