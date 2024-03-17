import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useToast } from '../../../../../common/components/ui/toast'
import { useAuth } from '../../../../../common/state/auth-state'
import { Result } from '../../../../../common/types/result'
import { SessionService } from '../../../../../core/user/services/session.service'

const formSchema = z.object({
  code: z.string().length(6),
})

export const useCode = (token: string) => {
  const { control, handleSubmit, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
  })
  const [signUp] = useAuth()
  const { toast } = useToast()

  const didTapToLogin = handleSubmit(async ({ code }) => {
    const result = await SessionService.authWithCode({ code, token })
    Result.Check(
      result,
      (session) => {
        signUp(session)
      },
      (err) => {
        toast('Invalid credentials', 'destructive')
        console.log(err)
      },
    )
  })

  return {
    control,
    didTapToLogin,
    isSubmittingLogin: formState.isSubmitting,
  }
}
