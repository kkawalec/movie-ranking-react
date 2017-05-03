import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import { Rating } from 'material-ui-rating'
import Subheader from 'material-ui/Subheader'
import { Card, CardTitle } from 'material-ui/Card'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import RankingCard from '../RankingCard'

injectTapEventPlugin()

const props = {
  ratings: {
    1: 3,
    2: 5,
    3: 6,
    4: 10,
    5: 5,
  },
  avgRating: 3.43,
  isLoading: false,
  handleRefresh: sinon.spy(),
  handlePost: sinon.spy(),
  userRating: {
    id: 207,
    movie_id: 1,
    rating: 2,
  },
}

const shallowComponent = mount(
  <MuiThemeProvider>
    <RankingCard {...props} />
  </MuiThemeProvider>,
)

describe('<RankingCard />', () => {
  it('Should render Card', () => {
    expect(shallowComponent.find(Card).length).toBe(1)
  })

  it('Card contain a card title', () => {
    expect(shallowComponent.find(CardTitle).props().title).toBe('Stars')
  })

  it('Card should contains img with poster src', () => {
    expect(shallowComponent.find(Subheader).length).toBe(2)
  })

  it('Card should contains ratings', () => {
    expect(shallowComponent.find(Rating).length).toBe(6)
  })

  it('First rating should contains user rating', () => {
    expect(shallowComponent.find(Rating).first().props().value).toBe(2)
  })

  it('First rating should be read only', () => {
    expect(shallowComponent.find(Rating).first().props().readOnly).toBe(true)
  })
})
