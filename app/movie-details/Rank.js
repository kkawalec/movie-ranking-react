import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Rating } from 'material-ui-rating'

/**
 * Class rendering one rating
 */
class Rank extends Component {
  static propTypes = {
    rank: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }

  render() {
    const { rank, count } = this.props
    return (
      <div className="rating">
        <Rating
          value={rank}
          max={5}
          readOnly
          onChange={f => f}
        />
        <span>{count}</span>
      </div>
    )
  }
}

export default Rank
