import { User } from '../user'
import { Attachment } from './attachment'
import { Via } from './via'

export type CommentEvent = {
  id: number
  value: string
  author: User
  via: Via
  imageAttachments: Attachment[]
  nonImageAttachments: Attachment[]
}
