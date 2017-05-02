import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import { Row, Col } from 'react-grid-system'
import Subheader from 'material-ui/Subheader'

import PosterCard from './PosterCard'
import RankingCard from './RankingCard'
import Loader from '../utils/components/Loader'
import ErrorMessage from '../utils/components/ErrorMessage'
import RefreshButton from '../utils/components/RefreshButton'
import { getMovieRankingRequest, addMovieRatingRequest } from './movieDetailsActions'
import { getMoviesListRequest } from '../movies/moviesActions'

/**
 * Class rendering main page of the app
 */
class MoviesDetailsPage extends Component {
  static propTypes = {
    getMoviesListRequest: PropTypes.func.isRequired,
    getMovieRankingRequest: PropTypes.func.isRequired,
    movieData: PropTypes.object.isRequired,
    avgRating: PropTypes.number.isRequired,
    ratings: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.getMovieRankingRequest(this.props.params.id)
    if(!this.props.movieData.hasOwnProperty('title')) {
      this.props.getMoviesListRequest()
    }
  }

  /**
   * Handling refresh request
   */
  handleRefresh = (e) => {
    e.preventDefault()
    this.props.getMovieRankingRequest(this.props.params.id)
  }

  handleAddRating = (rating) => {
    this.props.addMovieRatingRequest(this.props.params.id, rating)
  }

  render() {
    const { movieData, isLoading, errorMessage, avgRating, ratings, userRating } = this.props

    return (
      <Row>
        <Col xs={12} lg={3} style={{ marginBottom: 15 }}>

          { isLoading && <Loader /> }
          { !isLoading && <PosterCard movie={movieData} />}
        </Col>
        <Col xs={12} lg={6} style={{ marginBottom: 15 }}>
           <ErrorMessage message={errorMessage} />
          { !isLoading && <RankingCard ratings={ratings} avgRating={avgRating} isLoading={isLoading} handleRefresh={this.handleRefresh} handlePost={this.handleAddRating} userRating={userRating} />}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  movieData: state.movies.data.filter(movie => movie.id == ownProps.params.id).reduce((prev, next) => next, {}),
  isLoading: state.movieDetails.isLoading,
  errorMessage: state.movieDetails.error,
  avgRating: state.movieDetails.avgRating,
  ratings: state.movieDetails.ratings,
  userRating: state.movieDetails.userRating,
})

export default connect(mapStateToProps, { getMovieRankingRequest, getMoviesListRequest, addMovieRatingRequest })(MoviesDetailsPage)
