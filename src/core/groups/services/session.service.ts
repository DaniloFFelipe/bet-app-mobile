import { AuthWithCodeDto } from '../dtos/auth-with-code-dto'
import { AuthWithPasswordDto } from '../dtos/auth-with-password-dto'
import { SessionFactory } from '../factory/session.factory'

export const SessionService = {
  requestAuthCode: (email: string) => {
    const datasource = SessionFactory.getDataSource()
    return datasource.requestAuthCode(email)
  },
  authWithCode: (data: AuthWithCodeDto) => {
    const datasource = SessionFactory.getDataSource()
    return datasource.authWithCode(data)
  },
  authWithPassword: (data: AuthWithPasswordDto) => {
    const datasource = SessionFactory.getDataSource()
    return datasource.authWithPassword(data)
  },
}
