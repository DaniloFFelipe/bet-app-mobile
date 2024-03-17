import { create } from 'zustand'

import { Session } from '../../core/user/models/session'
import { HttpService } from '../lib/http'

export type AuthStore = {
  session: Session | null
  signUp: (session: Session) => void
  signOut: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  session: null,
  signUp: (session: Session) => {
    HttpService.addBearerToken(session.token)
    set({ session })
  },
  signOut: () => {
    HttpService.removeBearerToken()
    set({ session: null })
  },
}))

export const useSession = () => useAuthStore((state) => state.session)
export const useSessionUser = () => useAuthStore((state) => state.session?.user)
export const useSessionToken = () =>
  useAuthStore((state) => state.session?.token)

export const useAuth = () =>
  useAuthStore((state) => [state.signUp, state.signOut])

export const useIsAuthenticated = () => {
  const session = useSession()
  return !!session
}
