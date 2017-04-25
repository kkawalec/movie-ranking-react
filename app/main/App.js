import React, { Component } from 'react'
import { Container } from 'react-grid-system'
//import MainPageHeader from '../pageHeader/MainPageHeader'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

require('./injectTap')

class App extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Container fluid >
            { this.props.children }
          </Container>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
