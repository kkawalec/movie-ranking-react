import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import { Row, Col } from 'react-grid-system'
import Subheader from 'material-ui/Subheader'

import Loader from './Loader'
import MoviesList from './MoviesList'
import ErrorMessage from './ErrorMessage'
import RefreshButton from './RefreshButton'
import SortButton from './SortButton'
import { getMoviesListRequest, sortMovies } from './moviesActions'

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

  render() {
    const { movies, isLoading, errorMessage, sort } = this.props

    return (
      <Row>
        <Col xs={12} lg={6} style={{ marginBottom: 15 }}>
          <Subheader>Movies</Subheader>
          <RefreshButton handleRefresh={this.handleRefresh} isLoading={isLoading} />
          <SortButton handleSort={this.handleSort} isLoading={isLoading} sort={sort} />
          <ErrorMessage message={errorMessage} />
          <MoviesList data={movies} />
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

export default connect(mapStateToProps, { getMoviesListRequest, sortMovies })(MoviesListPage)
