import { AtSign, Lock } from 'lucide-react-native'
import { Controller } from 'react-hook-form'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Text } from '../../../../../common/components/primitives/text'
import { Button } from '../../../../../common/components/ui/button'
import { Input } from '../../../../../common/components/ui/input'
import { Colors } from '../../../../../common/theme/colors'
import { AuthenticationScreenProps } from '../../route/types'
import { useLoginPassword } from './use-login-password'

export const LoginPasswordScreen = ({
  navigation,
}: AuthenticationScreenProps<'LoginPassword'>) => {
  const navigateToLoginWithoutPassword = () => navigation.navigate('LoginCode')
  const { control, isSubmittingLogin, didTapToLogin } = useLoginPassword()

  return (
    <View className="flex-1 bg-background items-center justify-center px-4">
      <View className="flex-1" />
      <Text className="text-3xl font-head">Enter with you account</Text>
      <Text className="text-lg font-sans text-muted-foreground text-center">
        Enter your email and password below to login
      </Text>

      <View className="w-full mt-8 gap-4">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState }) => {
            return (
              <Input
                error={!!fieldState.error}
                onChangeText={onChange}
                value={value}
                Left={<AtSign size={18} color={Colors['muted-foreground']} />}
                placeholder="Email"
                placeholderTextColor={Colors.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
              />
            )
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, fieldState }) => {
            return (
              <Input
                onChangeText={onChange}
                value={value}
                error={!!fieldState.error}
                Left={<Lock size={18} color={Colors['muted-foreground']} />}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor={Colors.input}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="off"
              />
            )
          }}
        />

        <Button
          label="Enter"
          onPress={didTapToLogin}
          loading={isSubmittingLogin}
        />
      </View>
      <View className="h-8" />
      <Button
        label="Without password"
        variant={'secondary'}
        onPress={navigateToLoginWithoutPassword}
      />
      <View className="flex-1" />

      <Button label="Don not have an account? Sign up now" variant={'link'} />
      <SafeAreaView />
    </View>
  )
}
