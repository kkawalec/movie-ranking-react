import axios from 'axios'
import thunk from 'redux-thunk'
import * as spyExpect from 'expect'
import configureMockStore from 'redux-mock-store'

import * as actions from '../movieDetailsActions'
import * as types from '../../store/constants'

describe('action creators', () => {
  it('should create a movies ranking request pending action', () => {
    const expectedAction = {
      type: types.MOVIE_RANKING_REQUEST_PENDING,
    }
    expect(actions.getMovieRankingRequestPending()).toEqual(expectedAction)
  })

  it('should create a movies ranking request success action', () => {
    const data = []
    const expectedAction = {
      type: types.MOVIE_RANKING_REQUEST_SUCCESS,
      payload: data,
      movieId: 1,
    }
    expect(actions.getMovieRankingRequestSuccess(data, 1)).toEqual(expectedAction)
  })

  it('should create a movies ranking request error action', () => {
    const err = 'Network error'
    const expectedAction = {
      type: types.MOVIE_RANKING_REQUEST_ERROR,
      payload: err,
    }
    expect(actions.getMovieRankingRequestError(err)).toEqual(expectedAction)
  })

  it('should create a movies ranking post success action', () => {
    const data = {}
    const expectedAction = {
      type: types.MOVIE_RANKING_POST_SUCCESS,
      payload: data,
    }
    expect(actions.addMovieRatingSuccess(data)).toEqual(expectedAction)
  })

  it('should create a movies ranking post error action', () => {
    const error = 'Some error'
    const expectedAction = {
      type: types.MOVIE_RANKING_POST_ERROR,
      payload: error,
    }
    expect(actions.addMovieRatingError(error)).toEqual(expectedAction)
  })
})

/**
 * Async actions
 */
const mockStore = configureMockStore([thunk])

// set up to mock axios methods
const fakeGet = axios.get

/**
 * Tests for getMovieRankingRequest() action
 */
const emptyArr = []
const fakeMoviesRankingsRequestPayload = { status: 200, data: emptyArr }

describe('async movies api ranking request action resolved', () => {
  beforeEach(() => {
    // replace the .get method temporarily with a spy
    axios.get = spyExpect.createSpy().andReturn(Promise.resolve(fakeMoviesRankingsRequestPayload))
  })

  afterEach(() => {
    // restore the get method with our saved const
    axios.get = fakeGet
  })

  it('Shold dispatch actions when ranking request is successful', () => {
    const store = mockStore({
      movieDetails: {},
    })
    const expected = [
      { type: types.MOVIE_RANKING_REQUEST_PENDING },
      {
        type: types.MOVIE_RANKING_REQUEST_SUCCESS,
        payload: fakeMoviesRankingsRequestPayload.data,
        movieId: 1,
      },
    ]

    return store.dispatch(actions.getMovieRankingRequest(1))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expected[0])
        expect(store.getActions()[1].type).toEqual(types.MOVIE_RANKING_REQUEST_SUCCESS)
        expect(store.getActions()[1]).toHaveProperty('payload')
        expect(store.getActions()[1].payload).toBe(emptyArr)
        expect(store.getActions()[1].movieId).toBe(1)
      })
  })
})

const fakeErrorMoviesRequestPayload = { status: 404, message: 'some error' }
describe('async movies api ranking request action rejected', () => {
  beforeEach(() => {
    // replace the .get method temporarily with a spy
    axios.get = spyExpect.createSpy().andReturn(Promise.reject(fakeErrorMoviesRequestPayload))
  })

  afterEach(() => {
    // restore the get method with our saved const
    axios.get = fakeGet
  })

  it('Shold dispatch actions when movies ranking request return error', () => {
    const store = mockStore({
      movieDetails: {},
    })
    const expected = [
      { type: types.MOVIE_RANKING_REQUEST_PENDING },
      { type: types.MOVIE_RANKING_REQUEST_ERROR, payload: fakeErrorMoviesRequestPayload.message },
    ]

    return store.dispatch(actions.getMovieRankingRequest(1))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expected[0])
        expect(store.getActions()[1].type).toEqual(types.MOVIE_RANKING_REQUEST_ERROR)
        expect(store.getActions()[1]).toHaveProperty('payload')
        expect(store.getActions()[1].payload).toBe('some error')
      })
  })
})

/**
 * Tests for addMovieRatingRequest()
 */
// set up to mock axios methods
const fakePost = axios.post

/**
 * Tests for getMovieRankingRequest() action
 */
const postResponse = {
  id: 207,
  movie_id: 1,
  rating: 2,
}
const fakeMoviesRankingPostPayload = { status: 200, data: postResponse }

describe('async movies api post ranking request action resolved', () => {
  beforeEach(() => {
    // replace the .get method temporarily with a spy
    axios.post = spyExpect.createSpy().andReturn(Promise.resolve(fakeMoviesRankingPostPayload))
  })

  afterEach(() => {
    // restore the get method with our saved const
    axios.post = fakePost
  })

  it('Shold dispatch actions when add ranking post request is successful', () => {
    const store = mockStore({
      movieDetails: {},
    })
    const expected = [
      { type: types.MOVIE_RANKING_POST_SUCCESS, payload: fakeMoviesRankingPostPayload.data },
    ]

    return store.dispatch(actions.addMovieRatingRequest(1, 2))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expected[0])
        expect(store.getActions()[0].type).toEqual(types.MOVIE_RANKING_POST_SUCCESS)
        expect(store.getActions()[0]).toHaveProperty('payload')
        expect(store.getActions()[0].payload).toBe(postResponse)
      })
  })
})

const fakePostErrorResponse = {
  errors: [
    'Rating is not a number',
    'Rating is not included in the list',
  ],
}
const fakeErrorPostRatingRequestPayload = { response: { data: fakePostErrorResponse } }
describe('async movies api ranking post request action rejected', () => {
  beforeEach(() => {
    axios.post = spyExpect.createSpy().andReturn(Promise.reject(fakeErrorPostRatingRequestPayload))
  })

  afterEach(() => {
    axios.post = fakePost
  })

  it('Shold dispatch actions when post ranking request return error', () => {
    const store = mockStore({
      movieDetails: {},
    })
    const expected = [
      {
        type: types.MOVIE_RANKING_POST_ERROR,
        payload: fakeErrorPostRatingRequestPayload.response.data.errors[0],
      },
    ]

    return store.dispatch(actions.addMovieRatingRequest(1, 2))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expected[0])
        expect(store.getActions()[0].type).toEqual(types.MOVIE_RANKING_POST_ERROR)
        expect(store.getActions()[0]).toHaveProperty('payload')
        expect(store.getActions()[0].payload).toBe('Rating is not a number')
      })
  })
})
