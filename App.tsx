import './global.css'

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, View } from 'react-native'

import { MyGroupsScreen } from './src/app/modules/application/features/my-groups.screen'
import { AuthenticationNavigation } from './src/app/modules/authentication/route/router'
import { PortalHost } from './src/common/components/primitives/portal'
import { ToastProvider } from './src/common/components/ui/toast'
import { useAppFonts } from './src/common/lib/fonts/app-fonts'
import { useIsAuthenticated } from './src/common/state/auth-state'
import { Colors } from './src/common/theme/colors'

export default function App() {
  const [isFontsDone] = useAppFonts()
  const isAuth = useIsAuthenticated()

  if (!isFontsDone) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <ActivityIndicator size={'large'} color={Colors.primary} />
      </View>
    )
  }

  return (
    <ToastProvider position="top">
      <StatusBar style="light" />

      <NavigationContainer>
        {!isAuth ? <AuthenticationNavigation /> : <MyGroupsScreen />}
      </NavigationContainer>

      <PortalHost />
    </ToastProvider>
  )
}
