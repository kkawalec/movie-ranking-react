import axios from 'axios'
import config from '../config'

import {
  MOVIE_RANKING_REQUEST_PENDING,
  MOVIE_RANKING_REQUEST_SUCCESS,
  MOVIE_RANKING_REQUEST_ERROR,
} from '../store/constants'

/**
 * Action creator
 * Sending request to api for getting list of movies
 * @return {Object}
 */
export function getMovieRankingRequestPending() {
  return {
    type: MOVIE_RANKING_REQUEST_PENDING,
  }
}

/**
 * Action creator
 * Getting succesfully movies data from api
 * @param {array} data
 */
export function getMovieRankingRequestSuccess(data) {
  return {
    type: MOVIE_RANKING_REQUEST_SUCCESS,
    payload: data,
  }
}

/**
 * Action creator
 * Handling error from api
 * @param {string} err
 */
export function getMovieRankingRequestError(err) {
  return {
    type: MOVIE_RANKING_REQUEST_ERROR,
    payload: err,
  }
}

/**
 * Http request to api
 * @param {number} id
 */
export function getMovieRankingRequest(id) {
  return async (dispatch) => {
    dispatch(getMovieRankingRequestPending())
    try {
      const { data } = await axios.get(`${config.apiEndpoint}/movies/${id}/ratings`)
      dispatch(getMovieRankingRequestSuccess(data))
    } catch (err) {
      const error = err.message
      dispatch(getMovieRankingRequestError(error))
      setTimeout(() => {
        dispatch(getMovieRankingRequest(id))
      }, 5000)
    }
  }
}
