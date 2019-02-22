import React, { Component } from 'react'

import { MainContent } from '../components/MainContent'

export class Home extends Component {
 
 state = { 
    movies: [],
    categories: []
  }

  componentDidMount () {

    fetch(`http://localhost:3030/movies`)
      .then(res => res.json())
      .then(movies => {
        this.setState({ movies })
      })

    fetch(`http://localhost:3030/categories`)
      .then(res => res.json())
      .then(categories => {
        this.setState({ categories })
      })
  }

  render () {
    return (
      <MainContent categories={this.state.categories} movies={this.state.movies} title="All Movies" />
    )
  }
  
}
