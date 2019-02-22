import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MainContent } from '../components/MainContent'

export class CategoryDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { 
    category: {},
    categories: [],
    movies: []
  }

  _fetchMovie ({ id }) {
    
    fetch(`http://localhost:3030/categories/${id}`)
      .then(res => res.json())
      .then(category => {
        this.setState({ category, movies: category.movies })
      })

     fetch(`http://localhost:3030/categories`)
      .then(res => res.json())
      .then(categories => {
        this.setState({ categories })
      })
  }

  componentDidMount () {
    const { categoryId } = this.props.match.params
    this._fetchMovie({ id: categoryId })
  }

  render () {
  
    return (
      <MainContent categories={this.state.categories} movies={this.state.movies} title={this.state.category.title} />
    )
  }
}
