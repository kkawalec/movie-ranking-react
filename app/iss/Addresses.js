import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'

class Addresses extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props
    return (
      <Paper zDepth={2}>
        <List>
          { data.length > 0 ?
            data.map(location =>
              <ListItem primaryText={location.formatted_address} key={location.place_id} />)
            : <ListItem primaryText="We can't provide any address right now. Probably ISS is over the ocean now." />}
        </List>
      </Paper>
    )
  }
}

export default Addresses
