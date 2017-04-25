import {
  ISS_REQUEST_PENDING,
  ISS_REQUEST_SUCCESS,
  ISS_REQUEST_ERROR,
} from '../store/constants'

const initialState = {
  loading: false,
  data: {},
  error: '',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ISS_REQUEST_PENDING:
      return { ...state, loading: true }
    case ISS_REQUEST_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: '' }
    case ISS_REQUEST_ERROR:
      return { ...state, loading: false, error: action.payload }
    default: return state
  }
}
