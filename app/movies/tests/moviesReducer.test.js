import reducer from '../moviesReducer'
import * as types from '../../store/constants'
import moviesComparator from '../../utils/array-callbacks/moviesComparator'

const initialState = {
  loading: false,
  data: [],
  error: '',
  sort: 1,
}

describe('movies reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(initialState)
  })

  it('should handle MOVIES_REQUEST_PENDING', () => {
    expect(
      reducer(initialState, {
        type: types.MOVIES_REQUEST_PENDING,
      }),
    ).toEqual({ ...initialState, loading: true })
  })

  const fakeSuccessPayload = [
    {
      id: 1,
      title: 'Movie 1',
      poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-2.jpg',
    },
    {
      id: 3,
      title: 'Movie 3',
      poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-3.jpg',
    },
  ]

  it('should handle MOVIES_REQUEST_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.MOVIES_REQUEST_SUCCESS,
        payload: fakeSuccessPayload,
      }),
    ).toEqual({
      ...initialState,
      data: fakeSuccessPayload.sort(moviesComparator(1, 'title')),
      error: '',
      loading: false,
    })
  })

  const errorMessage = 'Some error message'

  it('should handle MOVIES_REQUEST_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.MOVIES_REQUEST_ERROR,
        payload: errorMessage,
      }),
    ).toEqual({ ...initialState, loading: false, error: errorMessage })
  })

  const stateWithData = {
    loading: false,
    data: fakeSuccessPayload,
    error: '',
    sort: 1,
  }

  it('should handle MOVIES_SORT', () => {
    expect(
      reducer(stateWithData, {
        type: types.MOVIES_SORT,
      }),
    ).toEqual({
      ...stateWithData,
      sort: -1,
      data: stateWithData.data.sort(moviesComparator(-1, 'title')),
    })
  })
})
