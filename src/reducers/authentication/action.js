import constant from './constant'
export const login = (userDetail) => {
    return {
        type: constant.LOGIN,
        userDetail
    }
}

export const asyncLogin = (email , password) => {
    return {
        type: constant.ASYNC_LOGIN,
        email,
        password
    }
}