import React, { Component } from 'react'

import { MainContent } from '../components/MainContent'

const Config = require('../config/config.js');

export class Home extends Component {
 
 state = { 
    movies: [],
    categories: []
  }

  componentDidMount () {

    fetch(Config.API_URL + `/movies`)
      .then(res => res.json())
      .then(movies => {
        this.setState({ movies })
      })

    fetch(Config.API_URL + `/categories`)
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
