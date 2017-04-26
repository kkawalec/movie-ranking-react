import axios from 'axios'
import config from '../config'

import {
  ISS_REQUEST_PENDING,
  ISS_REQUEST_SUCCESS,
  ISS_REQUEST_ERROR,
  ISS_ADDRESS_REQUEST_SUCCESS,
  ISS_ADDRESS_REQUEST_ERROR,
} from '../store/constants'

/**
 *
 * @param {array} data
 */
export function getLocationRequestSuccess(data) {
  return {
    type: ISS_ADDRESS_REQUEST_SUCCESS,
    payload: data,
  }
}

/**
 *
 * @param {string} err
 */
export function getLocationRequestError(err) {
  return {
    type: ISS_ADDRESS_REQUEST_ERROR,
    payload: err,
  }
}

/**
 *
 * @param {number} lat
 * @param {number} lng
 */
export function getLocationRequest(lat, lng) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          latlng: `${lat},${lng}`,
          key: config.googleMapsKey,
        },
      })
      dispatch(getLocationRequestSuccess(data.results))
    } catch (err) {
      dispatch(getLocationRequestError('Can not get addresses from Google API.'))
    }
  }
}

/**
 * Sending request to http://wheretheiss.at/
 * https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles
 */
export function getIssPositionRequestPending() {
  return {
    type: ISS_REQUEST_PENDING,
  }
}

/**
 *
 * @param {Object} data
 */
export function getIssPositionRequestSuccess(data) {
  return {
    type: ISS_REQUEST_SUCCESS,
    payload: data,
  }
}

/**
 *
 * @param {string} err
 */
export function getIssPositionRequestError(err) {
  return {
    type: ISS_REQUEST_ERROR,
    payload: err,
  }
}

/**
 * Http request to api
 */
export function getIssPositionRequest() {
  return async (dispatch) => {
    dispatch(getIssPositionRequestPending())
    try {
      const { data } = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      dispatch(getIssPositionRequestSuccess(data))
      dispatch(getLocationRequest(data.latitude, data.longitude))
    } catch (err) {
      const { error } = err.response.data
      dispatch(getIssPositionRequestError(error))
      setTimeout(() => {
        dispatch(getIssPositionRequest())
      }, 5000)
    }
  }
}
