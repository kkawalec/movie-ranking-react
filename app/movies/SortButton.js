import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SortIcon from 'material-ui/svg-icons/content/sort'
import RaisedButton from 'material-ui/RaisedButton'

/**
 * Class rendering sort button
 */
class SortButton extends Component {
  static propTypes = {
    handleSort: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  render() {
    const { handleSort, isLoading, sort } = this.props

    const style = sort === -1 ? { transform: 'rotate(180deg)' } : {}

    return (
      <RaisedButton
        label="Sort movies"
        labelPosition="before"
        primary
        onClick={handleSort}
        disabled={isLoading}
        style={{ marginBottom: 10, marginRight: 10 }}
        icon={<SortIcon style={style} />}
      />
    )
  }
}

export default SortButton
