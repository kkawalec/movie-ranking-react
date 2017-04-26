import {
  ISS_REQUEST_PENDING,
  ISS_REQUEST_SUCCESS,
  ISS_REQUEST_ERROR,
  ISS_ADDRESS_REQUEST_SUCCESS,
  ISS_ADDRESS_REQUEST_ERROR,
} from '../store/constants'

const initialState = {
  loading: false,
  data: {},
  error: '',
  addressData: [],
}

/**
 * ISS Reducer
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ISS_REQUEST_PENDING:
      return { ...state, loading: true }
    case ISS_REQUEST_SUCCESS:
      return { ...state, data: action.payload, error: '' }
    case ISS_ADDRESS_REQUEST_ERROR:
    case ISS_REQUEST_ERROR:
      return { ...state, loading: false, error: action.payload }
    case ISS_ADDRESS_REQUEST_SUCCESS:
      return { ...state, loading: false, addressData: action.payload }
    default: return state
  }
}
