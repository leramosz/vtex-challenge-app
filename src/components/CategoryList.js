import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CategoryListItem } from '../components/CategoryListItem'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export class CategoryList extends Component {
  static propTypes = {
    categories: PropTypes.array
  }

  render () {
    const { categories } = this.props
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Movies@com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav className="category-list">
            <CategoryListItem categories={categories} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
