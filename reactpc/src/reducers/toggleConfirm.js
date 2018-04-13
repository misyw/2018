import * as ActionType from '../actions/index'

const initialState = {
    toggle: false,
    confirmOption:{
        title:'',
        content:''
    }
}
const toggleConfirm = (state = initialState , action) => {
 
  switch (action.type) {
    case ActionType.TOGGLE_CONFIRM:
      return {
        toggle:action.bool, //3将该内容存储在actions中
        confirmOption:action.option|| initialState.confirmOption,
        callback:action.option.fn
      }
    case ActionType.TOGGLE_CONFIRM_FAIL:
        return {
            toggle:false, //3将该内容存储在actions中
            confirmOption:action.option|| initialState.confirmOption,
        }
    default:
      return state
  }
}
export default toggleConfirm