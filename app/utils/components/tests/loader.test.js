import React from 'react'
import { mount } from 'enzyme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Loader from '../Loader'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const component = mount(
  <MuiThemeProvider>
    <Loader />
  </MuiThemeProvider>,
)

describe('<Loader />', () => {
  it('Should render loading message', () => {
    expect(component.find('.loader').text()).toContain('Data is loading')
  })
})
