import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useToast } from '../../../../../common/components/ui/toast'
import { useAuth } from '../../../../../common/state/auth-state'
import { Result } from '../../../../../common/types/result'
import { SessionService } from '../../../../../core/user/services/session.service'
import { AuthenticationNavigationProp } from '../../route/types'

const formSchema = z.object({
  email: z.string().email(),
})

export const useLoginCode = () => {
  const { control, handleSubmit, formState } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
  })
  const { navigate } =
    useNavigation<AuthenticationNavigationProp<'LoginCode'>>()
  const { toast } = useToast()

  const didTapToRequestCode = handleSubmit(async (data) => {
    const result = await SessionService.requestAuthCode(data.email)
    Result.Check(
      result,
      ({ token }) => {
        navigate('Code', {
          token,
        })
      },
      (err) => {
        toast('Invalid credentials', 'destructive')
        console.log(err)
      },
    )
  })

  return {
    control,
    didTapToRequestCode,
    isSubmittingLogin: formState.isSubmitting,
  }
}
