import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container } from 'react-grid-system'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import PageHeader from '../pageHeader/PageHeader'

require('./injectTap')

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

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
