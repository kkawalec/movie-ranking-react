import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import iss from '../iss/issReducer'

const appReducer = combineReducers({
  routing: routerReducer,
  iss,
})

export default appReducer
