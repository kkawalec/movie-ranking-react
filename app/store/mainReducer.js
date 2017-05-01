import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import movies from '../movies/moviesReducer'

/**
 * Main reducer of the application
 */
const appReducer = combineReducers({
  routing: routerReducer,
  movies,
})

export default appReducer
