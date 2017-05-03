import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'

/**
 * Class rendering movie poster
 */
class PosterCard extends Component {
  /**
   * prop types of Poster Card
   */
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    }).isRequired,
  }

  /**
   * Rendering card with poster image
   */
  render() {
    const { movie } = this.props
    return (
      <Card>
        <CardTitle title={movie.title} subtitle="Movie details" />
        <CardMedia>
          <img src={movie.poster} alt={movie.title} />
        </CardMedia>
      </Card>
    )
  }
}

export default PosterCard
