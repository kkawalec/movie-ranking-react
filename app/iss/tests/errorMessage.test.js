import React from 'react'
import { mount } from 'enzyme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ErrorMessage from '../ErrorMessage'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const nullComponent = mount(
  <MuiThemeProvider>
    <ErrorMessage />
  </MuiThemeProvider>,
)

const props = {
  message: 'Some error',
}

const renderedComponent = mount(
  <MuiThemeProvider>
    <ErrorMessage {...props} />
  </MuiThemeProvider>,
)

describe('<ErrorMessage />', () => {
  it('Should not display when error message is empty', () => {
    expect(nullComponent.find(ErrorMessage).component).toBe(null)
  })

  it('Should be disabled when loading', () => {
    const button = renderedComponent.find(ErrorMessage)
    expect(button.props().message).toBe(props.message)
    expect(button.find('span').text()).toBe(props.message)
  })
})
