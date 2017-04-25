import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as notifications } from 'react-notification-system-redux'

import iss from '../iss/issReducer'

const appReducer = combineReducers({
  routing: routerReducer,
  notifications,
  iss,
})

export default appReducer
