import axios from 'axios'
import config from '../config'

import {
  MOVIES_REQUEST_PENDING,
  MOVIES_REQUEST_SUCCESS,
  MOVIES_REQUEST_ERROR,
  MOVIES_SORT,
} from '../store/constants'

/**
 * Action creator
 * Sending request to api for getting list of movies
 * @return {Object}
 */
export function getMoviesListRequestPending() {
  return {
    type: MOVIES_REQUEST_PENDING,
  }
}

/**
 * Action creator
 * Getting succesfully movies data from api
 * @param {array} data
 */
export function getMoviesListRequestSuccess(data) {
  return {
    type: MOVIES_REQUEST_SUCCESS,
    payload: data,
  }
}

/**
 * Action creator
 * Handling error from api
 * @param {string} err
 */
export function getMoviesListRequestError(err) {
  return {
    type: MOVIES_REQUEST_ERROR,
    payload: err,
  }
}

/**
 * Http request to api
 */
export function getMoviesListRequest() {
  return async (dispatch) => {
    dispatch(getMoviesListRequestPending())
    try {
      const { data } = await axios.get(`${config.apiEndpoint}/movies`)
      dispatch(getMoviesListRequestSuccess(data))
    } catch (err) {
      const error = err.message
      dispatch(getMoviesListRequestError(error))
      setTimeout(() => {
        dispatch(getMoviesListRequest())
      }, 5000)
    }
  }
}

/**
 * Sorting movies list
 */
export function sortMovies() {
  return {
    type: MOVIES_SORT,
  }
}
