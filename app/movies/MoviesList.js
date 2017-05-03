import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'

/**
 * Class handling rendering list of addresses
 */
class MoviesList extends Component {
  /**
   * MoviesList prop types check
   */
  static propTypes = {
    data: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired,
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
            data.map(movie =>
              <ListItem onTouchTap={() => this.props.handleSelect(movie.id)} primaryText={movie.title} key={movie.id} leftAvatar={<Avatar style={{ borderRadius: 0 }} src={movie.poster} />} />
            )
            : <ListItem primaryText="We can't find any movies right now..." />}
        </List>
      </Paper>
    )
  }
}

export default MoviesList
