
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const SUCCESS_AUTH = 'AUTH_SUCCESS'
export const FAIL_AUTH = 'AUTH_FAIL'
export const TOGGLE_CONFIRM = 'TOGGLE_CONFIRM'
export const TOGGLE_CONFIRM_FAIL = 'TOGGLE_CONFIRM_FAIL'


export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
})

export const signOut = ()=>({
    type: LOGIN_FAIL,
})

export const authSuccess = () => ({
    type: SUCCESS_AUTH,
})

export const authFail = () => ({
    type: FAIL_AUTH
})

export const toggleConfirm = () => ({
    type: TOGGLE_CONFIRM
})

export const toggleConfirmFail = () => ({
    type: TOGGLE_CONFIRM_FAIL
})