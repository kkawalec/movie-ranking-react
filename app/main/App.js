import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container } from 'react-grid-system'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PageHeader from '../pageHeader/PageHeader'

require('./injectTap')

/**
 * Main Component of the application
 */
class App extends Component {
  /**
   * App prop types check
   */
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  /**
   * Main rendering function handler in app
   */
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Container fluid >
            <PageHeader />
            <div className="content">
              { this.props.children }
            </div>
          </Container>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
