import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { RootAction, RootState, RootEpic, RootService } from 'root-types'

import rootReducer from './root-reducer'
// import rootEpic from './root-epic'
import services from '../services';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  RootService
>({
  dependencies: services,
})

const middlewares = [epicMiddleware]
const enhancer = applyMiddleware(...middlewares)

const initialState = {}

const store = createStore(rootReducer, initialState, enhancer)

// epicMiddleware.run(rootEpic)

export default store
