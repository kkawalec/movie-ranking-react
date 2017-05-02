import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './main/App'
import NotFoundPage from './404/NotFoundPage'
import MoviesListPage from './movies/MoviesListPage'
import MovieDetailsPage from './movie-details/MovieDetailsPage'

/**
 * Class handling routing in application
 */
export default class Routes extends Component {
  /**
   * Routes component prop types checking
   */
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  /**
   * Router scheme
   */
  render() {
    const { history } = this.props

    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={MoviesListPage} />
          <Route path="/movie/:id" component={MovieDetailsPage} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}
