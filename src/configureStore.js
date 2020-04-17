import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'
import root from './sagas'

export default function configureStore (initialState = {}) {
  let composeEnhancers = compose

  const sagaMiddleware = createSagaMiddleware({})

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware]

  const enhancers = [applyMiddleware(...middlewares)]

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run(root)

  return store
}
