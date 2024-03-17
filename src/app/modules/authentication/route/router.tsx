import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CodeScreen } from '../features/code/code.screen'
import { LoginCodeScreen } from '../features/login-code/login-code.screen'
import { LoginPasswordScreen } from '../features/login-password/login-password.screen'
import { AuthenticationParamList } from './types'

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationParamList>()

export const AuthenticationNavigation = () => (
  <AuthenticationStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthenticationStack.Screen
      name="LoginPassword"
      component={LoginPasswordScreen}
    />
    <AuthenticationStack.Screen name="LoginCode" component={LoginCodeScreen} />
    <AuthenticationStack.Screen
      name="Code"
      component={CodeScreen}
      options={{
        presentation: 'modal',
      }}
    />
  </AuthenticationStack.Navigator>
)
