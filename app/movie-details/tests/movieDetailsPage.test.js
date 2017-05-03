import React from 'react'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import MovieDetailsPage from '../MovieDetailsPage'

injectTapEventPlugin()

const initialState = {
  isLoading: false,
  data: {},
  avgRating: 0,
  ratings: {},
  error: '',
  userRating: {},
  movieId: undefined,
}


const mockStore = configureMockStore([thunk])
const store = mockStore({
  movieDetails: initialState,
  movies: {},
})

const shallowComponent = shallow(
  <MuiThemeProvider>
    <MovieDetailsPage store={store} />
  </MuiThemeProvider>,
)

describe('<MovieDetailsPage />', () => {
  it('Should render', () => {
    expect(shallowComponent.find(MovieDetailsPage).length).toBe(1)
  })
})
