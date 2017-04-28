import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import RefreshButton from '../RefreshButton'

const props = {
  handleRefresh: sinon.spy(),
  isLoading: true,
}

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

  it('should not invoke onClick callback when on click when disabled', () => {
    shallowComponent.find(RaisedButton).simulate('click')
    expect(props.handleRefresh.notCalled).toBe(true)
  })
})
