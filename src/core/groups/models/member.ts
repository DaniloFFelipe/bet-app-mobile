export interface UserMember {
  id: string
  avatarUrl: string
}

export interface Member {
  id: string
  role: 'ADMIN' | 'MODERATOR' | 'MEMBER'
  user: UserMember
}
