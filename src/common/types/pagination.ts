import { z } from 'zod'

export const PaginationRequestSchema = z.object({
  pageIndex: z.coerce.number().default(0),
  perPage: z.coerce.number().default(15),
})
export type PaginationRequest = z.infer<typeof PaginationRequestSchema>
export type WithPaginationRequest<D> = z.infer<typeof PaginationRequestSchema> &
  D

export type PaginationMetadata = {
  pageIndex: number
  perPage: number
  nextPageIndex: number | null
  total: number
}

export type PaginationResponse<Data> = {
  meta: PaginationMetadata
  data: Data[]
}
