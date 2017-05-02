import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import { Row, Col } from 'react-grid-system'
import Subheader from 'material-ui/Subheader'

import Loader from '../utils/components/Loader'
import ErrorMessage from '../utils/components/ErrorMessage'
import RefreshButton from '../utils/components/RefreshButton'
import { getMovieRankingRequest } from './movieDetailsActions'
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


  render() {
    const { movieData, isLoading, errorMessage, avgRating, ratings } = this.props
console.log(movieData)
    return (
      <Row>
        <Col xs={12} lg={6} style={{ marginBottom: 15 }}>
          <Subheader>Movies details</Subheader>
          <RefreshButton handleRefresh={this.handleRefresh} isLoading={isLoading} />
          <ErrorMessage message={errorMessage} />

          { isLoading && <Loader /> }
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
})

export default connect(mapStateToProps, { getMovieRankingRequest, getMoviesListRequest })(MoviesDetailsPage)
