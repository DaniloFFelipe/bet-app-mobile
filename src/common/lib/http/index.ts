import { api, makeRequest } from './axios'
import { endpoints } from './endpoints'
import { AuthWithCodeRequest } from './types/request/auth-with-code-request'
import { AuthWithPasswordRequest } from './types/request/auth-with-password-request'
import { SignUpRequest } from './types/request/sign-up-request'
import { AuthResponse } from './types/response/auth-response'
import { RequestAuthCodeResponse } from './types/response/request-auth-code-response'
import { ServiceResponse } from './types/response/service-response'

export const HttpService = {
  async requestAuthCode(
    email: string,
  ): ServiceResponse<RequestAuthCodeResponse> {
    return makeRequest('mutation', endpoints.requestAuthCode(), { email })
  },
  async authWithCode(data: AuthWithCodeRequest): ServiceResponse<AuthResponse> {
    return makeRequest('mutation', endpoints.authWithCode(), data)
  },
  async authWithPassword(
    data: AuthWithPasswordRequest,
  ): ServiceResponse<AuthResponse> {
    return makeRequest('mutation', endpoints.authWithPassword(), data)
  },
  async signUp(data: SignUpRequest): ServiceResponse<void> {
    return makeRequest('mutation', endpoints.signUp(), data)
  },
  async addBearerToken(token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  async removeBearerToken() {
    api.defaults.headers.common.Authorization = null
  },
}
