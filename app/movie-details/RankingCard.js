import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Rating } from 'material-ui-rating'
import RefreshButton from '../utils/components/RefreshButton'
import Subheader from 'material-ui/Subheader'
import Rank from './Rank'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'

class MovieCard extends Component {
  render() {
    const { ratings, avgRating, isLoading, handleRefresh } = this.props
    console.log(ratings)
    return (
      <Card style={{ marginBotton: 10 }}>
        <CardTitle title="Stars" subtitle="Rate the movie" />
        <CardText>
          <Subheader>Your rank</Subheader>
          <Rating
            value={5}
            max={5}
            onChange={(value) => console.log(`Rated with value ${value}`)}
           />

          <Subheader>Average rating is: {avgRating.toPrecision(3)}</Subheader>
          {Object.keys(ratings).map(key => <Rank rank={parseInt(key)} count={parseInt(ratings[key])} key={key} />)}

        </CardText>
        <CardActions style={{ paddingLeft: 16 }} >
          <RefreshButton handleRefresh={handleRefresh} isLoading={isLoading} />
          <Link to="/"><RaisedButton primary label="Back" /></Link>
        </CardActions>
      </Card>
    )
  }
}

export default MovieCard
