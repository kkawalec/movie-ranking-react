import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-grid-system'
import Notifications from 'react-notification-system-redux'

//import MainPageHeader from '../pageHeader/MainPageHeader'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

require('./injectTap')

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired,
   // theme: React.PropTypes.string.isRequired,
    notifications: React.PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  render() {
    const { notifications, theme } = this.props
    return (
      <MuiThemeProvider>
        <div>
          <Notifications notifications={notifications} />
          <Container fluid >
            { this.props.children }
          </Container>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications,
})

export default connect(mapStateToProps)(App)