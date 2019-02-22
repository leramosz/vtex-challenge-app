import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Nav from 'react-bootstrap/Nav';

export class CategoryListItem extends Component {
  static propTypes = {
    categories: PropTypes.array
  }

  render () {
    const { categories } = this.props
     return (
      categories.map(category => {
        return (<Nav.Link key={category._id} href={`/categories/${category._id}`}>{category.title}</Nav.Link>)
      })
     )
  }
}
