import { put, takeLatest, call } from 'redux-saga/effects'

import constant from '../../reducers/authentication/constant'
import { login } from '../../reducers/authentication/action'
import { ApiService } from '../../services/apiServices'

// Individual exports for testing
export function* loginPageSaga(data) {
  try {
    const responseData = yield call(ApiService.postApi, '/login', {email:data.email, password: data.password})
    yield put(
      login({
        status: responseData.status,
        data: responseData.data
      })
    )
  } catch (error) {
    // yield put(loginFailure(error))
    console.log(error)
  }
}

export default function* loginSaga() {
  yield takeLatest(constant.ASYNC_LOGIN, loginPageSaga)
}
