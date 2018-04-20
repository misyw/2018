import { combineReducers } from 'redux'
import loginState from './loginState'
import authReducer from './authReducer'
import toggleConfirm from './toggleConfirm'

const reducer = combineReducers({
    authReducer , toggleConfirm , loginState
})

export default reducer;

