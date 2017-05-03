import PropTypes from 'prop-types'
import { Link } from 'react-router'
import React, { Component } from 'react'
import { Rating } from 'material-ui-rating'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card'

import Rank from './Rank'
import RefreshButton from '../utils/components/RefreshButton'

/**
 * Class rendering rating card of movie
 */
class RankingCard extends Component {
  /**
   * prop types od RankingCard component
   */
  static propTypes = {
    ratings: PropTypes.object.isRequired,
    avgRating: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
    handleRefresh: PropTypes.func.isRequired,
    userRating: PropTypes.object.isRequired,
    handlePost: PropTypes.func.isRequired,
  }

  /**
   * rendering ratings
   */
  render() {
    const { ratings, avgRating, isLoading, handleRefresh, userRating } = this.props
    return (
      <Card style={{ marginBotton: 10 }}>
        <CardTitle title="Stars" subtitle="Rate the movie" />
        <CardText>
          <Subheader>Your rank</Subheader>
          <Rating
            value={userRating.rating === undefined ? 4 : userRating.rating}
            max={5}
            onChange={value => this.props.handlePost(value)}
            readOnly={userRating.rating !== undefined}
          />

          <Subheader>Average rating is: {avgRating.toPrecision(3)}</Subheader>
          {Object.keys(ratings).map(key =>
            <Rank rank={parseInt(key, 10)} count={parseInt(ratings[key], 10)} key={key} />)
          }

        </CardText>
        <CardActions style={{ paddingLeft: 16 }} >
          <RefreshButton handleRefresh={handleRefresh} isLoading={isLoading} />
          <Link to="/"><RaisedButton primary label="Back" /></Link>
        </CardActions>
      </Card>
    )
  }
}

export default RankingCard
