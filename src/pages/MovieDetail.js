import React, { Component } from 'react'

import { CategoryList } from '../components/CategoryList'
import { MovieInfo } from '../components/MovieInfo'

const Config = require('../config/config.js');
  
export class MovieDetail extends Component {

  state = { 
    movie: {},
    categories: []
  }

  _fetchMovie ({ id }) {
    fetch(Config.API_URL + `/movies/${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie })
      })

    fetch(Config.API_URL + `/categories`)
      .then(res => res.json())
      .then(categories => {
        this.setState({ categories })
      })
  }

  componentDidMount () {
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
  }

  render () {
    return (
      <div>
        <CategoryList categories={this.state.categories} /> 
        <MovieInfo movie={this.state.movie} />
      </div>
    )
  }
}
