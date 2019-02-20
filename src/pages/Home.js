import React, { Component } from 'react'

import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {
  state = { movies: [] }

  componentDidMount () {
    fetch(`http://localhost:3030/movies`)
      .then(res => res.json())
      .then(movies => {
        console.log({ movies })
        this.setState({ movies })
      })
  }

  render () {
    return (
      <div>
        <MoviesList movies={this.state.movies} />
      </div>
    )
  }
}
