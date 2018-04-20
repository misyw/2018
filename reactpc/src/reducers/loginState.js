import * as ActionType from '../actions/index'

const initialState = {
    isLogin: false,
}
const loginState = (state = initialState , action) => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return {
        isLogin:action.bool,
      }
    case ActionType.LOGIN_FAIL:
			return {
				isLogin:action.bool,
			} 
    default:
      return state
  }
}
export default loginState;