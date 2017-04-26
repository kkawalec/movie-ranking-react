import reducer from '../issReducer'
import * as types from '../../store/constants'

const initialState = {
  loading: false,
  data: {},
  error: '',
  addressData: [],
}

describe('iss reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(initialState)
  })

  it('should handle ISS_REQUEST_PENDING', () => {
    expect(
      reducer(initialState, {
        type: types.ISS_REQUEST_PENDING,
      }),
    ).toEqual({ ...initialState, loading: true })
  })

  const fakeSuccessPayload = {
    name: 'iss',
    id: 25544,
    latitude: 4.7566271344661,
    longitude: 161.43961809103,
  }

  it('should handle ISS_REQUEST_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.ISS_REQUEST_SUCCESS,
        payload: fakeSuccessPayload,
      }),
    ).toEqual({ ...initialState, data: fakeSuccessPayload })
  })

  const errorMessage = 'Some error message'

  it('should handle ISS_REQUEST_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.ISS_REQUEST_ERROR,
        payload: errorMessage,
      }),
    ).toEqual({ ...initialState, error: errorMessage })
  })

  it('should handle ISS_ADDRESS_REQUEST_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.ISS_ADDRESS_REQUEST_ERROR,
        payload: errorMessage,
      }),
    ).toEqual({ ...initialState, error: errorMessage })
  })

  const fakeAddressData = [
    {
      formatted_address: 'Mikronezja',
      geometry: { },
      place_id: 'ChIJE8hYrMW12WURJWWk-s2NelQ',
    },
  ]

  it('should handle ISS_ADDRESS_REQUEST_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.ISS_ADDRESS_REQUEST_SUCCESS,
        payload: fakeAddressData,
      }),
    ).toEqual({ ...initialState, addressData: fakeAddressData })
  })
})
