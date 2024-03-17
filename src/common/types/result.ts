export type ResultType<S, E extends Error> =
  | { ok: true; data: S }
  | { ok: false; error: E }

export type AsyncResultType<S, E extends Error> = Promise<ResultType<S, E>>

export function Ok<S, E extends Error>(data: S): ResultType<S, E> {
  return {
    ok: true,
    data,
  }
}

export function Err<S, E extends Error>(error: E): ResultType<S, E> {
  return {
    ok: false,
    error,
  }
}

export function Check<S, E extends Error, T = void>(
  result: ResultType<S, E>,
  onSuccess: (data: S) => T,
  onError: (err: E) => T,
): T {
  if (!result.ok) {
    return onError(result.error)
  }

  return onSuccess(result.data)
}

export const Result = {
  Ok,
  Err,
  Check,
}
