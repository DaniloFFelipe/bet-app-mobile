import { Member } from './member'

interface Count {
  members: number
}

export interface Group {
  id: string
  name: string
  description: string
  code: string
  _count: Count
  members: Member[]
}
