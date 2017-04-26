import React from 'react'
import { shallow } from 'enzyme'
import RefreshButton from '../RefreshButton'

const props = {
  handleRefresh: jest.fn(),
  isLoading: false,
}

describe('RefreshButton', () => {
  it('should render', () => {
    const wrapper = shallow(<RefreshButton {...props} />)
    expect(wrapper).toBeDefined()
  })
})
