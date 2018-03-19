const initialState = {
  isAuthenticated: false
}
const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        actions:action.user //3将该内容存储在actions中
      }
    case 'AUTH_FAIL':
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}
export default authReducer