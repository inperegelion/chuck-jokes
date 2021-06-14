import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import jokesReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  jokesReducer,
  { jokes: [] },
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)
