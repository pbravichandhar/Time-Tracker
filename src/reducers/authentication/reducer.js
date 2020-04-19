import constant from './constant'

import produce from 'immer'

export const initialState = {
  userDetail: {}
}

/* eslint-disable default-case, no-param-reassign */
const authenticationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constant.LOGIN:
        draft.userDetail = action.userDetail
        break
    }
  })

export default authenticationReducer
