/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { TextInput, View } from 'react-native'

import { cn } from '../lib/utils'

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  Left?: React.ReactElement
  leftClasses?: string
  inputClasses?: string
  error?: boolean
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    { className, Left, leftClasses, inputClasses, error = false, ...props },
    ref,
  ) => (
    <View
      className={cn(
        'h-12 w-full flex-row gap-1.5 items-center border border-input px-4 rounded-lg',
        error ? 'border-destructive' : 'border-input',
        className,
      )}
    >
      {Left && <View className={cn('mr-3', leftClasses)}>{Left}</View>}
      <TextInput
        ref={ref}
        className={cn(inputClasses, ' flex-1 text-sans text-muted-foreground')}
        {...props}
      />
    </View>
  ),
)

export { Input }
