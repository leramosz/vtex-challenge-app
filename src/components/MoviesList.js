import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render () {
    const { movies } = this.props
    return (
      <div className='MoviesList'>
        {
          movies.map(movie => {
            return (
              <div key={movie._id} className='MoviesList-item'>
                <Movie
                  id={movie._id}
                  title={movie.title}
                  year={movie.year}
                  poster={movie.image}
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}
