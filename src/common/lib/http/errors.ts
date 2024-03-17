import { AxiosError } from 'axios'

import { Result, ResultType } from '../../types/result'

export class HttpError extends Error {
  code: number

  constructor(code: number, message: string) {
    super(message)
    this.code = code
  }
}

export function handleAxiosError<D>(err: unknown): ResultType<D, HttpError> {
  if (err instanceof AxiosError) {
    return Result.Err(new HttpError(err.status || 500, err.message))
  }

  return Result.Err(new HttpError(500, 'Internal Error'))
}
