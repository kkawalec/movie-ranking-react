import React from 'react'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import MoviesListPage from '../MoviesListPage'

injectTapEventPlugin()

const mockStore = configureMockStore([thunk])
const store = mockStore({
  movies: {},
})

const shallowComponent = shallow(
  <MuiThemeProvider>
    <MoviesListPage store={store} />
  </MuiThemeProvider>,
)

describe('<MoviesListPage />', () => {
  it('Should render', () => {
    expect(shallowComponent.find(MoviesListPage).length).toBe(1)
  })
})
