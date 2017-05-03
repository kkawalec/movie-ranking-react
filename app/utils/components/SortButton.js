import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SortIcon from 'material-ui/svg-icons/content/sort'
import RaisedButton from 'material-ui/RaisedButton'

/**
 * Class rendering sort button
 */
class SortButton extends Component {
  /**
   * prop types of SortButton component
   */
  static propTypes = {
    handleSort: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    sort: PropTypes.number.isRequired,
  }

  /**
   * rendering button
   */
  render() {
    const { handleSort, isLoading, sort } = this.props

    const iconClassName = sort === -1 ? 'desc' : 'asc'

    return (
      <RaisedButton
        label="Sort movies"
        labelPosition="before"
        primary
        onClick={handleSort}
        disabled={isLoading}
        style={{ marginBottom: 10, marginRight: 10 }}
        icon={<SortIcon className={`u-sort-icon-${iconClassName}`} />}
      />
    )
  }
}

export default SortButton
