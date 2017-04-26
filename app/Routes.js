import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './main/App'
import ISSPage from './iss/ISSPage'
import NotFoundPage from './404/NotFoundPage'

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
          <IndexRoute component={ISSPage} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}
