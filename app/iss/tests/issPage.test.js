import React from 'react'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ISSPage from '../ISSPage'

injectTapEventPlugin()

const mockStore = configureMockStore([thunk])
const store = mockStore({
  iss: {},
})

const shallowComponent = shallow(
  <MuiThemeProvider>
    <ISSPage store={store} />
  </MuiThemeProvider>,
)

describe('<ISSPage />', () => {
  it('Should render', () => {
    expect(shallowComponent.find(ISSPage).length).toBe(1)
  })
})
