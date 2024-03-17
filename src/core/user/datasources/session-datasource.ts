import { AsyncResultType } from '../../../common/types/result'
import { AuthWithCodeDto } from '../dtos/auth-with-code-dto'
import { AuthWithPasswordDto } from '../dtos/auth-with-password-dto'
import { SessionError } from '../errors/session-errors'
import { AuthCode } from '../models/auth-code'
import { Session } from '../models/session'

export interface SessionDataSource {
  requestAuthCode(email: string): AsyncResultType<AuthCode, SessionError>
  authWithPassword(
    data: AuthWithPasswordDto,
  ): AsyncResultType<Session, SessionError>
  authWithCode(data: AuthWithCodeDto): AsyncResultType<Session, SessionError>
}
