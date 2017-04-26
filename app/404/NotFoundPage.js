import React, { Component } from 'react'
import { Link } from 'react-router'
import { CardText } from 'material-ui/Card'
import { Row, Col } from 'react-grid-system'
import FlatButton from 'material-ui/FlatButton'

import issImg from '../../img/iss.png'

/**
 * Class rendering 404 - Not Found Page
 */
class NotFoundPage extends Component {
  /**
   * Rendering component
   */
  render() {
    return (
      <Row>
        <Col xs={12}>
          <div className="error-page__container">
            <img src={issImg} alt="Internation Space Station" />
            <CardText>Page Not Found</CardText>
            <Link to="/">
              <FlatButton label="Return to Dashboard" primary />
            </Link>
          </div>
        </Col>
      </Row>
    )
  }
}

export default NotFoundPage
