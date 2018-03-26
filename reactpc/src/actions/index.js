
export const SUCCESS_AUTH = 'AUTH_SUCCESS'
export const FAIL_AUTH = 'AUTH_FAIL'


export const authSuccess = () => ({
    type: SUCCESS_AUTH,
})

export const authFail = () => ({
    type: FAIL_AUTH
})

