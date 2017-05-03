import {
  MOVIE_RANKING_REQUEST_PENDING,
  MOVIE_RANKING_REQUEST_SUCCESS,
  MOVIE_RANKING_REQUEST_ERROR,
  MOVIE_RANKING_POST_SUCCESS,
  MOVIE_RANKING_POST_ERROR,
} from '../store/constants'

import arraySumCallback from '../utils/array-callbacks/arraySum'
import ratingsCount from '../utils/array-callbacks/ratingsCount'

const initialState = {
  isLoading: false,
  data: {},
  avgRating: 0,
  ratings: {},
  error: '',
  userRating: {},
  movieId: undefined,
}

/**
 * Movie details reducer
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MOVIE_RANKING_REQUEST_PENDING:
      return { ...state, isLoading: true }
    case MOVIE_RANKING_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        avgRating: action.payload.length !== 0 ?
          action.payload.reduce(arraySumCallback, 0) / action.payload.length : 0,
        ratings: action.payload.reduce(ratingsCount, {}),
        error: '',
        movieId: action.movieId,
        userRating: action.movieId === state.movieId ? state.userRating : {},
      }
    case MOVIE_RANKING_REQUEST_ERROR:
    case MOVIE_RANKING_POST_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case MOVIE_RANKING_POST_SUCCESS:
      return {
        ...state,
        userRating: action.payload,
      }
    default: return state
  }
}
