import { faker } from '@faker-js/faker'

import { HttpService } from '../../../common/lib/http'
import { AsyncResultType, Result } from '../../../common/types/result'
import { AuthWithCodeDto } from '../dtos/auth-with-code-dto'
import { AuthWithPasswordDto } from '../dtos/auth-with-password-dto'
import {
  InvalidCredentialsError,
  SessionError,
  UnexpectedSessionError,
} from '../errors/session-errors'
import { AuthCode } from '../models/auth-code'
import { Session } from '../models/session'
import { SessionDataSource } from './session-datasource'

export const HttpSessionDataSource: SessionDataSource = {
  requestAuthCode: async function (
    email: string,
  ): AsyncResultType<AuthCode, SessionError> {
    const response = await HttpService.requestAuthCode(email)
    return Result.Check(
      response,
      (data) => Result.Ok(data),
      (error) => {
        let err: SessionError = new UnexpectedSessionError()
        if (error.code === 400) {
          err = new InvalidCredentialsError()
        }
        return Result.Err(err)
      },
    )
  },
  authWithPassword: async function (
    data: AuthWithPasswordDto,
  ): AsyncResultType<Session, SessionError> {
    const response = await HttpService.authWithPassword(data)
    return Result.Check(
      response,
      (data) => Result.Ok(data),
      (error) => {
        let err: SessionError = new UnexpectedSessionError()
        if (error.code === 400) {
          err = new InvalidCredentialsError()
        }
        return Result.Err(err)
      },
    )
  },
  authWithCode: async function (
    data: AuthWithCodeDto,
  ): AsyncResultType<Session, SessionError> {
    const response = await HttpService.authWithCode(data)
    return Result.Check(
      response,
      (data) => Result.Ok(data),
      (error) => {
        let err: SessionError = new UnexpectedSessionError()
        if (error.code === 400) {
          err = new InvalidCredentialsError()
        }
        return Result.Err(err)
      },
    )
  },
}
