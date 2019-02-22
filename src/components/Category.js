import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export class Category extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
  }

  render () {
    const { id, title } = this.props

    return (
        
        <Link to={`/categories/${id}`}>{title}</Link>

    )
  }
}
