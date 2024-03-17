import { PaginationRequest } from '../../../common/types/pagination'
import { AsyncResultType } from '../../../common/types/result'
import { SessionError } from '../errors/session-errors'
import { AuthCode } from '../models/auth-code'

export interface GroupsDataSource {
  findUserGroups(
    data: PaginationRequest,
  ): AsyncResultType<AuthCode, SessionError>
}
