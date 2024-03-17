/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker'

import { AsyncResultType, Result } from '../../../common/types/result'
import { AuthWithCodeDto } from '../dtos/auth-with-code-dto'
import { AuthWithPasswordDto } from '../dtos/auth-with-password-dto'
import { InvalidCredentialsError, SessionError } from '../errors/session-errors'
import { AuthCode } from '../models/auth-code'
import { Session } from '../models/session'
import { SessionDataSource } from './session-datasource'

export const TestSuccessSessionDataSource: SessionDataSource = {
  requestAuthCode: async function (
    _email: string,
  ): AsyncResultType<AuthCode, SessionError> {
    return Result.Ok({ token: faker.string.uuid() })
  },
  authWithPassword: async function (
    data: AuthWithPasswordDto,
  ): AsyncResultType<Session, SessionError> {
    return Result.Ok({
      token: faker.string.uuid(),
      user: {
        avatarUrl: null,
        email: faker.internet.email(),
        fullName: faker.person.fullName(),
        id: faker.string.uuid(),
      },
    })
  },
  authWithCode: async function (
    data: AuthWithCodeDto,
  ): AsyncResultType<Session, SessionError> {
    return Result.Ok({
      token: faker.string.uuid(),
      user: {
        avatarUrl: null,
        email: faker.internet.email(),
        fullName: faker.person.fullName(),
        id: faker.string.uuid(),
      },
    })
  },
}

export const TestErrorSessionDataSource: SessionDataSource = {
  requestAuthCode: async function (
    _email: string,
  ): AsyncResultType<AuthCode, SessionError> {
    return Result.Err(new InvalidCredentialsError())
  },
  authWithPassword: async function (
    _data: AuthWithPasswordDto,
  ): AsyncResultType<Session, SessionError> {
    return Result.Err(new InvalidCredentialsError())
  },
  authWithCode: async function (
    _data: AuthWithCodeDto,
  ): AsyncResultType<Session, SessionError> {
    return Result.Err(new InvalidCredentialsError())
  },
}
