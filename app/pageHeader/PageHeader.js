import React from 'react'
import AppBar from 'material-ui/AppBar'
import { Row } from 'react-grid-system'
import issIcon from '../../img/iss.png'

class PageHeader extends React.Component {
  render() {
    return (
      <Row>
        <AppBar
          title="Where is ISS?"
          iconElementLeft={<img className="title-img" src={issIcon} />}
        />
      </Row>
    )
  }
}

export default PageHeader
