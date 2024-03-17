import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
export type AuthenticationParamList = {
  LoginPassword: undefined
  LoginCode: undefined
  Code: {
    token: string
  }
}
export type AuthenticationRoutes = keyof AuthenticationParamList
export type AuthenticationScreenProps<Name extends AuthenticationRoutes> =
  NativeStackScreenProps<AuthenticationParamList, Name>
export type AuthenticationNavigationProp<Name extends AuthenticationRoutes> =
  NativeStackNavigationProp<AuthenticationParamList, Name>
