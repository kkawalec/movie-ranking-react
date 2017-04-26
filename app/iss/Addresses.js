import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'

/**
 * Class handling rendering list of addresses
 */
class Addresses extends Component {
  /**
   * Addresses prop types check
   */
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  /**
   * Rendering list of addresses
   */
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
