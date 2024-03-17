import { Controller } from 'react-hook-form'
import { TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Text } from '../../../../../common/components/primitives/text'
import { Button } from '../../../../../common/components/ui/button'
import { Input } from '../../../../../common/components/ui/input'
import { Colors } from '../../../../../common/theme/colors'
import { AuthenticationScreenProps } from '../../route/types'
import { useCode } from './use-code'

export const CodeScreen = ({
  navigation,
  route,
}: AuthenticationScreenProps<'Code'>) => {
  const { token } = route.params
  const { bottom } = useSafeAreaInsets()
  const { control, didTapToLogin, isSubmittingLogin } = useCode(token)

  return (
    <View className={`flex-1 bg-background px-4 pt-5`}>
      <View className="w-full items-end">
        <TouchableOpacity onPress={navigation.goBack}>
          <Text className="text-md font-sans text-primary text-center">
            Cancel
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center mt-16">
        <Text className="text-3xl font-head">Enter with your code</Text>
        <Text className="text-lg font-sans text-muted-foreground text-center">
          Enter the code below that we send to your email
        </Text>
        <View className="w-full gap-8 mt-8">
          <Controller
            control={control}
            name="code"
            render={({ field: { onChange, value }, fieldState }) => {
              return (
                <Input
                  error={!!fieldState.error}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Code"
                  placeholderTextColor={Colors.input}
                  maxLength={6}
                />
              )
            }}
          />
        </View>
      </View>
      <Button
        label="Enter"
        onPress={didTapToLogin}
        loading={isSubmittingLogin}
      />
      <View style={{ paddingBottom: bottom + 32 }} />
    </View>
  )
}
