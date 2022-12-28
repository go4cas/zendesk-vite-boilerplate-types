import { UserFieldType } from './userfieldtype'
import { UserFieldOptions } from './userfieldoption'
import { RelationshipTargetType } from './relationshiptargettype'

export type UserField = {
  active: boolean
  created_at: string
  custom_field_options: UserFieldOptions[]
  description: string
  id: number
  key: string
  position: number
  raw_description: string
  raw_title: string
  regexp_for_validation: string
  relationship_filter: object
  relationship_target_type: RelationshipTargetType
  system: boolean
  tag: string
  title: string
  type: UserFieldType
  updated_at: string
  url: string
}
