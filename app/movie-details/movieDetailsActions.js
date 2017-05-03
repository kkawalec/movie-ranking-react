import axios from 'axios'
import config from '../config'

import {
  MOVIE_RANKING_REQUEST_PENDING,
  MOVIE_RANKING_REQUEST_SUCCESS,
  MOVIE_RANKING_REQUEST_ERROR,
  MOVIE_RANKING_POST_SUCCESS,
  MOVIE_RANKING_POST_ERROR,
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
export function getMovieRankingRequestSuccess(data, id) {
  return {
    type: MOVIE_RANKING_REQUEST_SUCCESS,
    payload: data,
    movieId: id,
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
 * Http get request to api
 * @param {number} id
 */
export function getMovieRankingRequest(id) {
  return async (dispatch) => {
    dispatch(getMovieRankingRequestPending())
    try {
      const { data } = await axios.get(`${config.apiEndpoint}/movies/${id}/ratings`)
      dispatch(getMovieRankingRequestSuccess(data, id))
    } catch (err) {
      const error = err.message
      dispatch(getMovieRankingRequestError(error))
      setTimeout(() => {
        dispatch(getMovieRankingRequest(id))
      }, 5000)
    }
  }
}

export function addMovieRatingSuccess(data) {
  return {
    type: MOVIE_RANKING_POST_SUCCESS,
    payload: data,
  }
}

export function addMovieRatingError(err) {
  return {
    type: MOVIE_RANKING_POST_ERROR,
    payload: err,
  }
}

/**
 * Http post request to api
 * @param {number} rating
 */
export function addMovieRatingRequest(id, rating) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${config.apiEndpoint}/movies/${id}/ratings`, { rating })
      dispatch(addMovieRatingSuccess(data))
      dispatch(getMovieRankingRequest(id))
    } catch ({ response }) {
      const error = response.data.errors[0]
      dispatch(addMovieRatingError(error))
    }
  }
}

