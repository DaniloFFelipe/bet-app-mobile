import { AsyncResultType } from '../../../../types/result'
import { HttpError } from '../../errors'

export type ServiceResponse<Data> = AsyncResultType<Data, HttpError>
