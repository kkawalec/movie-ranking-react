import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Rating } from 'material-ui-rating'
import RefreshButton from '../utils/components/RefreshButton'
import Subheader from 'material-ui/Subheader'
import PropTypes from 'prop-types'

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
