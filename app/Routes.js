import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './main/App'
import ISSPage from './iss/ISSPage'
import NotFoundPage from './404/NotFoundPage'

export default class Routes extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
