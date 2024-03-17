/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { NativeModules } from 'react-native'

import { AsyncResultType, Result } from '../../types/result'
import { handleAxiosError, HttpError } from './errors'

const scriptURL = NativeModules.SourceCode.scriptURL
const baseURL: string = 'http://'
  .concat(scriptURL.split('://')[1].split(':')[0] as string)
  .concat(':3333')

export const api = axios.create({
  baseURL,
})

export const RequestType = {
  mutation: 'post',
  query: 'get',
} as const

export async function makeRequest<Body, Resp>(
  type: keyof typeof RequestType,
  endpoint: string,
  data: Body,
  headers: Record<string, any> | undefined = undefined,
  params: Record<string, any> | undefined = undefined,
): AsyncResultType<Resp, HttpError> {
  try {
    const response = await api[RequestType[type]]<Resp>(endpoint, data, {
      params,
      headers,
    })
    return Result.Ok(response.data)
  } catch (err) {
    return handleAxiosError(err)
  }
}
