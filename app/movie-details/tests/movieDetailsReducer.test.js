import reducer from '../movieDetailsReducer'
import * as types from '../../store/constants'
import arraySumCallback from '../../utils/array-callbacks/arraySum'
import ratingsCount from '../../utils/array-callbacks/ratingsCount'

const initialState = {
  isLoading: false,
  data: {},
  avgRating: 0,
  ratings: {},
  error: '',
  userRating: {},
  movieId: undefined,
}

describe('movie details reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(initialState)
  })

  it('should handle MOVIE_RANKING_REQUEST_PENDING', () => {
    expect(
      reducer(initialState, {
        type: types.MOVIE_RANKING_REQUEST_PENDING,
      }),
    ).toEqual({ ...initialState, isLoading: true })
  })

  const fakeSuccessPayload = [
    {
      id: 1,
      movie_id: 1,
      rating: 5,
    },
    {
      id: 25,
      movie_id: 1,
      rating: 1,
    },
    {
      id: 26,
      movie_id: 1,
      rating: 1,
    },
  ]

  it('should handle MOVIE_RANKING_REQUEST_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.MOVIE_RANKING_REQUEST_SUCCESS,
        payload: fakeSuccessPayload,
        movieId: 1,
      }),
    ).toEqual({
      ...initialState,
      isLoading: false,
      data: fakeSuccessPayload,
      avgRating: fakeSuccessPayload.reduce(arraySumCallback, 0) / 3,
      ratings: fakeSuccessPayload.reduce(ratingsCount, {}),
      error: '',
      movieId: 1,
      userRating: {},
    })
  })

  const errorMessage = 'Some error message'

  it('should handle MOVIE_RANKING_REQUEST_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.MOVIE_RANKING_REQUEST_ERROR,
        payload: errorMessage,
      }),
    ).toEqual({ ...initialState, isLoading: false, error: errorMessage })
  })

  it('should handle MOVIE_RANKING_POST_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.MOVIE_RANKING_POST_ERROR,
        payload: errorMessage,
      }),
    ).toEqual({ ...initialState, isLoading: false, error: errorMessage })
  })

  const successPostResponse = {
    id: 207,
    movie_id: 1,
    rating: 2,
  }

  it('should handle MOVIE_RANKING_POST_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.MOVIE_RANKING_POST_SUCCESS,
        payload: successPostResponse,
      }),
    ).toEqual({ ...initialState, userRating: successPostResponse })
  })
})
