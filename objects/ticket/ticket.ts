import { Group } from '../group'
import { User } from '../user'
import { Brand } from './brand'
import { Comment } from './comment'
import { CommentEvent } from './commentevent'
import { Conversation } from './conversation'
import { TicketEditor } from './ticketeditor'
import { Form } from './form'
import { Organization } from '../user/organization'
import { PostSaveAction } from './postsaveaction'
import { Priority } from './priority'
import { SharingAgreement } from './sharingagreement'
import { Status } from './status'
import { TicketType } from './tickettype'
import { Via } from './via'
import { CollisionUser } from '../user/collisionuser'

export type ticket = {
  assignee: {
    group: Group
    user: User
  }
  brand: Brand
  collaborators: User[]
  comment: Comment
  comments: CommentEvent[]
  conversation: Conversation[]
  createdAt: Date
  // customField:  TODO
  description: string
  editor: TicketEditor
  externalId: string
  emailCcs: User[]
  form: Form
  id: number
  isNew: boolean
  organization: Organization
  postSaveAction: PostSaveAction
  priority: Priority
  recipient: string
  requester: User
  sharedWith: SharingAgreement[]
  status: Status
  subject: string
  tags: string[]
  type: TicketType
  updatedAt: Date
  via: Via
  viewers: CollisionUser[]
}
