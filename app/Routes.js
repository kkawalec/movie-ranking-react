import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route, IndexRoute } from 'react-router'

import App from './main/App'
import ISSPage from './iss/ISSPage'
import NotFoundPage from './404/NotFoundPage'

export default class Routes extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

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
