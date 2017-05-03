import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import ReactDOM from 'react-dom'
import { ListItem } from 'material-ui/List'
import ReactTestUtils from 'react-dom/test-utils'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import MoviesList from '../MoviesList'

injectTapEventPlugin()

const props = {
  data: [
    {
      id: 1,
      title: 'Movie 1',
      poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-2.jpg',
    },
  ],
  handleSelect: sinon.spy(),
}

const nullComponent = mount(
  <MuiThemeProvider>
    <MoviesList data={[]} handleSelect={sinon.spy()} />
  </MuiThemeProvider>,
)

const fullComponent = mount(
  <MuiThemeProvider>
    <MoviesList {...props} />
  </MuiThemeProvider>,
)

describe('<MoviesList />', () => {
  it('Should display one message when list is empty', () => {
    expect(nullComponent.find(ListItem).length).toBe(1)
  })

  it('Should display two messages when list contains two movies', () => {
    expect(fullComponent.find(ListItem).length).toBe(2)
  })

  it('Movie should have proper key', () => {
    expect(fullComponent.find(ListItem).first().key()).toBe('1')
  })

  it('Movie should have primaryText prop', () => {
    expect(fullComponent.find(ListItem).first().props().primaryText).toBe('Movie 1')
  })

  it('should invoke handleSelect callback when element is clicked', () => {
    const listItem = fullComponent.find(ListItem).find('span').first()
    const node = ReactDOM.findDOMNode(listItem.node) // eslint-disable-line react/no-find-dom-node

    ReactTestUtils.Simulate.touchTap(node)
    expect(props.handleSelect.calledOnce).toBe(true)
  })
})
