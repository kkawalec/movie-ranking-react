import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as notifications } from 'react-notification-system-redux'

const appReducer = combineReducers({
  routing: routerReducer,
  notifications,
})

export default appReducer