import { Attachment } from './attachment'
import { User } from '../user'
import { Channel } from './channel'
import { Message } from './message'

export type Conversation = {
  attachments: Attachment[]
  author: User
  channel: Channel
  message: Message
  timestamp: Date
}
