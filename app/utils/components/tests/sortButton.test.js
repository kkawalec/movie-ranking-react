import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SortButton from '../SortButton'

const props = {
  handleSort: sinon.spy(),
  isLoading: true,
  sort: 1,
}

injectTapEventPlugin()

const shallowComponent = mount(
  <MuiThemeProvider>
    <SortButton {...props} />
  </MuiThemeProvider>,
)

describe('<SortButton />', () => {
  it('Should contains sort text', () => {
    expect(shallowComponent.find('span').text()).toBe('Sort movies')
  })

  it('Should be disabled when loading', () => {
    const button = shallowComponent.find(SortButton)
    expect(button.props().isLoading).toBe(true)
    expect(button.find('button').html()).toContain('disabled=""')
  })

  it('Should have handleSort function prop', () => {
    const button = shallowComponent.find(SortButton)
    expect(button.props().handleSort).toBe(props.handleSort)
  })

  it('should not invoke onClick callback when on click when disabled', () => {
    shallowComponent.find(SortButton).simulate('click')
    expect(props.handleSort.notCalled).toBe(true)
  })
})
