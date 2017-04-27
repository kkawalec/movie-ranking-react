import React from 'react'
import { mount } from 'enzyme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import RefreshButton from '../RefreshButton'

const props = {
  handleRefresh: jest.fn(),
  isLoading: true,
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const shallowComponent = mount(
  <MuiThemeProvider>
    <RefreshButton {...props} />
  </MuiThemeProvider>,
)

describe('<RefreshButton />', () => {
  it('Should contains refresh text', () => {
    expect(shallowComponent.find('span').text()).toBe('Refresh')
  })

  it('Should be disabled when loading', () => {
    const button = shallowComponent.find(RefreshButton)
    expect(button.props().isLoading).toBe(true)
    expect(button.find('button').html()).toContain('disabled=""')
  })

  it('Should have handleRefresh function prop', () => {
    const button = shallowComponent.find(RefreshButton)
    expect(button.props().handleRefresh).toBe(props.handleRefresh)
  })
})
