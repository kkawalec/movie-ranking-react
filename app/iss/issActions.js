import axios from 'axios'

import { ISS_REQUEST_PENDING, ISS_REQUEST_SUCCESS, ISS_REQUEST_ERROR } from '../store/constants'

/**
 * Sending request to http://wheretheiss.at/
 * https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles
 */
export function getIssPositionRequestPending() {
  return {
    type: ISS_REQUEST_PENDING
  }
}

export function getIssPositionRequestSuccess(data) {
  return {
    type: ISS_REQUEST_SUCCESS,
    payload: data,
  }
}

export function getIssPositionRequestError(err) {
  return {
    type: ISS_REQUEST_ERROR,
    payload: err,
  }
}

export function getIssPositionRequest() {
  return async dispatch => {
    dispatch(getIssPositionRequestPending())
    try {
      const { data } = await axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      dispatch(getIssPositionRequestSuccess(data))
    } catch (err) {
      const { error } = err.response.data
      dispatch(getIssPositionRequestError(error))
      setTimeout(() => {
        dispatch(getIssPositionRequest())
      }, 5000)
    }
  }
}
