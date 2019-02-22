import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

import Col from 'react-bootstrap/Col';

export class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render () {
    const { movies } = this.props

    return (
          movies.map(movie => {
            return (
              <Col key={movie._id} sm={6} md={4} xl={3}>
                <Movie
                  id={movie._id}
                  title={movie.title}
                  year={movie.year}
                  image={movie.image}
                  rating={movie.rating}
                />
              </Col>
            )
          })
    )
  }
}
