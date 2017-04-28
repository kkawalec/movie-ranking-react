import React from 'react'
import { shallow } from 'enzyme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Map from '../Map'

injectTapEventPlugin()

const shallowComponent = shallow(
  <MuiThemeProvider>
    <Map />
  </MuiThemeProvider>,
)

describe('<Map />', () => {
  it('Should contains google-map div', () => {
    expect(shallowComponent.find(Map).length).toBe(1)
  })
})
