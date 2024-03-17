import { useReducer } from 'react'

import { CountViewModel, ViewModel } from './viewmodel'

export function useViewStore<State, Reducer>(
  viewModel: ViewModel<State, Reducer>,
) {
  const [state, reduceFn] = useReducer(
    viewModel.createReduce,
    viewModel.initialState,
  )

  return {
    state,
    send: reduceFn,
  }
}

export const useCounter = () => {
  const viewStore = useViewStore(CountViewModel)
  return viewStore
}
