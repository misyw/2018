import * as ActionType from '../actions/index'

const initialState = {
  isAuthenticated: false
}
const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case ActionType.SUCCESS_AUTH:
      return {
        ...state,
        actions:action.user //3将该内容存储在actions中
      }
    case ActionType.FAIL_AUTH:
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}
export default authReducer