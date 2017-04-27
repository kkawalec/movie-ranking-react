import React from 'react'
import { mount } from 'enzyme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { List, ListItem } from 'material-ui/List'
import Addresses from '../Addresses'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const props = {
  data: [
    {
      formatted_address: 'Some address',
      place_id: '555',
    },
    {
      formatted_address: 'Another address',
      place_id: '333',
    },
  ],
}

const nullComponent = mount(
  <MuiThemeProvider>
    <Addresses data={[]} />
  </MuiThemeProvider>,
)

const fullComponent = mount(
  <MuiThemeProvider>
    <Addresses {...props} />
  </MuiThemeProvider>,
)

describe('<Addresses />', () => {
  it('Should display one message when list is empty', () => {
    expect(nullComponent.find(ListItem).length).toBe(1)
  })

 it('Should display two messages when list contains two addresses', () => {
    expect(fullComponent.find(ListItem).length).toBe(2)
  })

 it('Address should have proper key', () => {
    expect(fullComponent.find(ListItem).first().key()).toBe('555')
  })

  it('Address should have primaryText prop', () => {
    expect(fullComponent.find(ListItem).first().props().primaryText).toBe('Some address')
  })
})
