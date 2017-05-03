import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import { Row, Col } from 'react-grid-system'
import Subheader from 'material-ui/Subheader'

import MoviesList from './MoviesList'
import Loader from '../utils/components/Loader'
import ErrorMessage from '../utils/components/ErrorMessage'
import RefreshButton from '../utils/components/RefreshButton'
import SortButton from '../utils/components/SortButton'
import { getMoviesListRequest, sortMovies, redirectToMovieDetails } from './moviesActions'

/**
 * Class rendering main page of the app
 */
class MoviesListPage extends Component {
  static propTypes = {
    getMoviesListRequest: PropTypes.func.isRequired,
    sortMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    sort: PropTypes.number.isRequired,
    redirectToMovieDetails: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getMoviesListRequest()
  }

  /**
   * Handling refresh request
   */
  handleRefresh = (e) => {
    e.preventDefault()
    this.props.getMoviesListRequest()
  }

  /**
   * Handling sorting list of movies
   */
  handleSort = (e) => {
    e.preventDefault()
    this.props.sortMovies()
  }

  handleSelectMovie = (id) => {
    this.props.redirectToMovieDetails(id)
  }

  render() {
    const { movies, isLoading, errorMessage, sort } = this.props

    return (
      <Row>
        <Col xs={12} lg={6} style={{ marginBottom: 15 }}>
          <Subheader>Movies</Subheader>
          <RefreshButton handleRefresh={this.handleRefresh} isLoading={isLoading} />
          <SortButton handleSort={this.handleSort} isLoading={isLoading} sort={sort} />
          <ErrorMessage message={errorMessage} />
          <MoviesList data={movies} handleSelect={this.handleSelectMovie} />
          { isLoading && <Loader /> }
        </Col>

      </Row>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.data,
  isLoading: state.movies.loading,
  errorMessage: state.movies.error,
  sort: state.movies.sort,
})

export default connect(mapStateToProps, {
  getMoviesListRequest,
  sortMovies,
  redirectToMovieDetails,
})(MoviesListPage)
