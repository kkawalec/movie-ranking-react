import {
  MOVIES_REQUEST_PENDING,
  MOVIES_REQUEST_SUCCESS,
  MOVIES_REQUEST_ERROR,
} from '../store/constants'

const initialState = {
  loading: false,
  data: [],
  error: '',
  //addressData: [],
}

/**
 * ISS Reducer
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MOVIES_REQUEST_PENDING:
      return { ...state, loading: true }
    case MOVIES_REQUEST_SUCCESS:
      return { ...state, data: action.payload, error: '', loading: false }
    case MOVIES_REQUEST_ERROR:
      return { ...state, loading: false, error: action.payload }
    default: return state
  }
}
