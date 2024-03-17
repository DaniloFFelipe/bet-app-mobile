import { cva, type VariantProps } from 'class-variance-authority'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

import { Colors } from '../../theme/colors'
import { cn } from '../lib/utils'

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-secondary',
        destructive: 'bg-destructive',
        ghost: 'bg-slate-700',
        link: 'text-primary underline-offset-4',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-8 px-2',
        lg: 'h-12 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const buttonTextVariants = cva('text-center font-medium', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      ghost: 'text-primary-foreground',
      link: 'text-primary-foreground underline',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const loadingColor = {
  default: 'primary-foreground',
  secondary: 'secondary-foreground',
  destructive: 'destructive-foreground',
  ghost: 'primary-foreground',
  link: 'primary-foreground',
} as const

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label: string
  labelClasses?: string
  loading?: boolean
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={Colors[loadingColor[variant ?? 'default']]} />
      ) : (
        <Text
          className={cn(
            buttonTextVariants({ variant, size, className: labelClasses }),
          )}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export { Button, buttonTextVariants, buttonVariants }
