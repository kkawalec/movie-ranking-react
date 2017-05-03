import React from 'react'
import { mount } from 'enzyme'
import { Rating } from 'material-ui-rating'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Rank from '../Rank'

injectTapEventPlugin()

const props = {
  rank: 3,
  count: 54,
}

const shallowComponent = mount(
  <MuiThemeProvider>
    <Rank {...props} />
  </MuiThemeProvider>,
)

describe('<Rank />', () => {
  it('Should render Rating component', () => {
    expect(shallowComponent.find(Rating).length).toBe(1)
  })

  it('Card contain a rating div', () => {
    expect(shallowComponent.find('.rating').length).toBe(1)
  })

  it('Card contain span with count', () => {
    expect(shallowComponent.find('span').text()).toBe('54')
  })

  it('Rating should have value of rank prop', () => {
    expect(shallowComponent.find(Rating).props().value).toBe(props.rank)
  })
})
