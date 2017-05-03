import React from 'react'
import { mount } from 'enzyme'
import { Card, CardTitle } from 'material-ui/Card'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PosterCard from '../PosterCard'

injectTapEventPlugin()

const props = {
  movie: {
    id: 1,
    title: 'Movie 1',
    poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-1.jpg',
  },
}

const shallowComponent = mount(
  <MuiThemeProvider>
    <PosterCard {...props} />
  </MuiThemeProvider>,
)

describe('<PosterCard />', () => {
  it('Should render Card', () => {
    expect(shallowComponent.find(Card).length).toBe(1)
  })

  it('Card title should be a movie title', () => {
    expect(shallowComponent.find(CardTitle).props().title).toBe('Movie 1')
  })

  it('Card should contains img with poster src', () => {
    expect(shallowComponent.find('img').props().src).toBe(props.movie.poster)
  })
})
