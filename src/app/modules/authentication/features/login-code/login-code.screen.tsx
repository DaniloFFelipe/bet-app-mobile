import { AtSign } from 'lucide-react-native'
import { Controller } from 'react-hook-form'
import { TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Text } from '../../../../../common/components/primitives/text'
import { Button } from '../../../../../common/components/ui/button'
import { ChevronLeft } from '../../../../../common/components/ui/icons'
import { Input } from '../../../../../common/components/ui/input'
import { Colors } from '../../../../../common/theme/colors'
import { AuthenticationScreenProps } from '../../route/types'
import { useLoginCode } from './use-login-code'
// import { AuthenticationScreenProps } from '../../route/types'

export const LoginCodeScreen = ({
  navigation,
}: AuthenticationScreenProps<'LoginCode'>) => {
  const { top, bottom } = useSafeAreaInsets()
  const { control, didTapToRequestCode, isSubmittingLogin } = useLoginCode()

  return (
    <View className={`flex-1 bg-background px-4`} style={{ paddingTop: top }}>
      <TouchableOpacity onPress={navigation.goBack}>
        <ChevronLeft className="text-white" />
      </TouchableOpacity>

      <View className="flex-1 items-center mt-16">
        <Text className="text-3xl font-head">Enter with you account</Text>
        <Text className="text-lg font-sans text-muted-foreground text-center">
          Enter your email below to login
        </Text>
        <View className="w-full gap-8 mt-8">
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
                />
              )
            }}
          />
        </View>
      </View>
      <Button
        label="Continuar"
        onPress={didTapToRequestCode}
        loading={isSubmittingLogin}
      />
      <View style={{ paddingBottom: bottom + 32 }} />
    </View>
  )
}
