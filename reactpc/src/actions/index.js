
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const SUCCESS_AUTH = 'AUTH_SUCCESS'
export const FAIL_AUTH = 'AUTH_FAIL'
export const TOGGLE_CONFIRM = 'TOGGLE_CONFIRM'
export const TOGGLE_CONFIRM_FAIL = 'TOGGLE_CONFIRM_FAIL'


export const setLoginSuccess = (bool) => ({
    type: LOGIN_SUCCESS,
    bool
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

export const toggleConfirm = (bool,option) => ({
    type: TOGGLE_CONFIRM,
    bool,
    option
})

export const toggleConfirmFail = (json) => ({
    type: TOGGLE_CONFIRM_FAIL,
    json
})