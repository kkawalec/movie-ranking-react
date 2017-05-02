import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import movies from '../movies/moviesReducer'
import movieDetails from '../movie-details/movieDetailsReducer'

/**
 * Main reducer of the application
 */
const appReducer = combineReducers({
  routing: routerReducer,
  movies,
  movieDetails,
})

export default appReducer
