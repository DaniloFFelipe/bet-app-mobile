import { useState } from 'react'

export type UseAsyncFetchProps<
  Data = void,
  D = never,
  Err extends Error = Error,
> = {
  requestFn(d: D): Promise<Data>
  onSuccess?: (data: Data) => void
  onError?: (err: Err) => void
}

export function useAsyncFetch<
  Data = void,
  D = never,
  Err extends Error = Error,
>(props: UseAsyncFetchProps<Data, D, Err>) {
  const [isLoading, setIsLoading] = useState(false)

  function request(data: D) {
    setIsLoading(true)

    props
      .requestFn(data)
      .then((d) => props.onSuccess?.(d))
      .catch((err) => props.onError?.(err))
      .finally(() => setIsLoading(false))
  }

  return {
    request,
    isLoading,
  }
}
