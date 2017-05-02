import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class MovieCard extends Component {
  render() {
    const { movie } = this.props
    return (
      <Card>
        <CardTitle title={movie.title} subtitle="Movie details" />
        <CardMedia>
          <img src={movie.poster} />
        </CardMedia>
      </Card>
    )
  }
}

export default MovieCard
