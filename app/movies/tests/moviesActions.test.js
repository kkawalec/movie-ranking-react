import axios from 'axios'
import thunk from 'redux-thunk'
import * as spyExpect from 'expect'
import configureMockStore from 'redux-mock-store'

import * as actions from '../moviesActions'
import * as types from '../../store/constants'

describe('action creators', () => {
  it('should create a movies request success action', () => {
    const data = []
    const expectedAction = {
      type: types.MOVIES_REQUEST_SUCCESS,
      payload: data,
    }
    expect(actions.getMoviesListRequestSuccess(data)).toEqual(expectedAction)
  })

  it('should create a movies request error action', () => {
    const errorMsg = 'Network error'
    const expectedAction = {
      type: types.MOVIES_REQUEST_ERROR,
      payload: errorMsg,
    }
    expect(actions.getMoviesListRequestError(errorMsg)).toEqual(expectedAction)
  })

  it('should create a movies request pending action', () => {
    const expectedAction = {
      type: types.MOVIES_REQUEST_PENDING,
    }
    expect(actions.getMoviesListRequestPending()).toEqual(expectedAction)
  })

  it('should create a movies sort action', () => {
    const expectedAction = {
      type: types.MOVIES_SORT,
    }
    expect(actions.sortMovies()).toEqual(expectedAction)
  })
})

/**
 * Async actions
 */
const mockStore = configureMockStore([thunk])

// set up to mock axios methods
const fakeGet = axios.get

/**
 * Tests for getMoviesListRequest() action
 */
const emptyArr = []
const fakeMoviesRequestPayload = { status: 200, data: emptyArr }

describe('async movies api request action resolved', () => {
  beforeEach(() => {
    // replace the .get method temporarily with a spy
    axios.get = spyExpect.createSpy().andReturn(Promise.resolve(fakeMoviesRequestPayload))
  })

  afterEach(() => {
    // restore the get method with our saved const
    axios.get = fakeGet
  })

  it('Shold dispatch actions when movie request is successful', () => {
    const store = mockStore({
      movies: {},
    })
    const expected = [
      { type: types.MOVIES_REQUEST_PENDING },
      { type: types.MOVIES_REQUEST_SUCCESS, payload: fakeMoviesRequestPayload.data },
    ]

    return store.dispatch(actions.getMoviesListRequest())
      .then(() => {
        expect(store.getActions()[0]).toEqual(expected[0])
        expect(store.getActions()[1].type).toEqual(types.MOVIES_REQUEST_SUCCESS)
        expect(store.getActions()[1]).toHaveProperty('payload')
        expect(store.getActions()[1].payload).toBe(emptyArr)
      })
  })
})

const fakeErrorMoviesRequestPayload = { status: 404, message: 'some error' }
describe('async action rejected', () => {
  beforeEach(() => {
    // replace the .get method temporarily with a spy
    axios.get = spyExpect.createSpy().andReturn(Promise.reject(fakeErrorMoviesRequestPayload))
  })

  afterEach(() => {
    // restore the get method with our saved const
    axios.get = fakeGet
  })

  it('Shold dispatch actions when movies request return error', () => {
    const store = mockStore({
      movies: {},
    })
    const expected = [
      { type: types.MOVIES_REQUEST_PENDING },
      { type: types.MOVIES_REQUEST_ERROR, payload: fakeErrorMoviesRequestPayload.message },
    ]

    return store.dispatch(actions.getMoviesListRequest())
      .then(() => {
        expect(store.getActions()[0]).toEqual(expected[0])
        expect(store.getActions()[1].type).toEqual(types.MOVIES_REQUEST_ERROR)
        expect(store.getActions()[1]).toHaveProperty('payload')
        expect(store.getActions()[1].payload).toBe('some error')
      })
  })
})

