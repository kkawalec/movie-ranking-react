import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Row } from 'react-grid-system'

import issIcon from '../../img/iss.png'

/**
 * Class rendering page header
 */
class PageHeader extends Component {
  /**
   * Rendering PageHeader Component
   */
  render() {
    return (
      <Row>
        <AppBar
          title="Where is ISS?"
          iconElementLeft={<img className="title-img" src={issIcon} alt="ISS" />}
        />
      </Row>
    )
  }
}

export default PageHeader
