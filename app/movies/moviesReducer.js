import {
  MOVIES_REQUEST_PENDING,
  MOVIES_REQUEST_SUCCESS,
  MOVIES_REQUEST_ERROR,
  MOVIES_SORT,
} from '../store/constants'
import moviesComparator from './utils/moviesComparator'

const initialState = {
  loading: false,
  data: [],
  error: '',
  sort: 1, // 1 - asc, -1 - desc
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
      return {
        ...state,
        data: action.payload.sort(moviesComparator(state.sort, 'title')),
        error: '',
        loading: false,
      }
    case MOVIES_REQUEST_ERROR:
      return { ...state, loading: false, error: action.payload }
    case MOVIES_SORT:
      const newSort = state.sort === 1 ? -1 : 1
      return {
        ...state,
        sort: newSort,
        data: state.data.sort(moviesComparator(newSort, 'title')),
      }
    default: return state
  }
}
