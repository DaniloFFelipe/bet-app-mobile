import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useToast } from '../../../../../common/components/ui/toast'
import { useAuth } from '../../../../../common/state/auth-state'
import { Result } from '../../../../../common/types/result'
import { SessionService } from '../../../../../core/user/services/session.service'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const useLoginPassword = () => {
  const { control, handleSubmit, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
  })
  const [signUp] = useAuth()
  const { toast } = useToast()

  const didTapToLogin = handleSubmit(async (data) => {
    const result = await SessionService.authWithPassword(data)
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
