export type AuthResponse = {
  token: string
  user: {
    id: string
    fullName: string
    email: string
    avatarUrl: string | null
  }
}
