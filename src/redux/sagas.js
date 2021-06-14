import { ADD_JOKE, ADD_JOKE_SUCCESS } from './actionTypes'
import { getRandomJoke } from '../api/chuck'

import { all, call, put, takeLatest } from 'redux-saga/effects'

function* addJoke() {
  const joke = yield call(getRandomJoke)
  yield put({ type: ADD_JOKE_SUCCESS, payload: joke })
}

function* watchAddJoke() {
  yield takeLatest(ADD_JOKE, addJoke)
}

export default function* rootSaga() {
  yield all([watchAddJoke()])
}
