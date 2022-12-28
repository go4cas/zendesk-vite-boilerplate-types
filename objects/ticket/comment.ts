import { Attachment } from './attachment'

export type Comment = {
  attachements: Attachment[]
  text: string
  type: string
  useRichText: boolean
}
