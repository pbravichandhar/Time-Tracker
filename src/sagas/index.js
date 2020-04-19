import { all } from 'redux-saga/effects'
import loginSaga from './authentication/authenticationSaga'

export default function* root() {
  yield all([loginSaga()])
}
