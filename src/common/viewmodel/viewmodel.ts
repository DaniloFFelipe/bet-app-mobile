/* eslint-disable @typescript-eslint/ban-ts-comment */
export type ViewModelReducer<Act extends string = string, Payload = unknown> = {
  act: Act
  payload: Payload
}

export interface ViewModelReducerReturn<State> {
  state: Partial<State>
  run?: (s: State) => Promise<void>
}

export type ViewModelEffects<State> = (s: State) => void | Promise<void>
export type ViewModelEffect<Key extends string, State> = Record<
  Key,
  ViewModelEffects<State> | undefined
>
export interface ViewModel<State, Reducer> {
  createReduce(state: State, reducer: Reducer): State
  initialState: State
}

export function createViewModel<
  State,
  Act extends string,
  Payload,
  Reducer extends ViewModelReducer<Act, Payload>,
>(
  initialState: State,
  reducerFn: (s: State, r: Reducer) => ViewModelReducerReturn<State>,
  effects: ViewModelEffect<string, State>,
): ViewModel<State, Reducer> {
  return {
    createReduce(state, reducer) {
      const result = reducerFn(state, reducer)
      const newState: State = {
        ...state,
        ...result.state,
      }
      result.run?.(newState)
      // @ts-ignore
      effects?.[reducer.act]?.(newState)

      return newState
    },
    initialState,
  }
}

export function mutate<State>(
  state: State,
  mutation: Partial<State> = {},
): State {
  return {
    ...state,
    ...mutation,
  }
}

type CountState = {
  value: number
}

type CountReducer =
  | ViewModelReducer<'add', number>
  | ViewModelReducer<'sub', number>
  | ViewModelReducer<'test', () => void>

export const CountViewModel: ViewModel<CountState, CountReducer> =
  createViewModel(
    { value: 0 },
    (state, reducer) => {
      switch (reducer.act) {
        case 'test': {
          reducer.payload()

          return {
            state,
          }
        }
        case 'add': {
          return {
            state: mutate(state, { value: state.value + reducer.payload }),
          }
        }

        case 'sub': {
          if (state.value === 0) {
            return {
              state: mutate(state, {}),
            }
          }

          return {
            state: mutate(state, { value: state.value - reducer.payload }),
          }
        }
      }
    },
    {},
  )
