import { combineReducers } from 'redux'
import authReducer from './authReducer';
import toggleConfirm from './toggleConfirm'


const reducer = combineReducers({
    authReducer , toggleConfirm
})

export default reducer;

