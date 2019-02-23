import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { Rating } from '../components/Rating'

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    image: PropTypes.string,
    rating: PropTypes.number
  }

  render () {
    const { id, image, title, year, rating} = this.props

    return (
      <div className="card movie-item">
        <div className="card-image">
          <figure className="image">
            <Link to={`/movies/${id}`}>
              <img
                alt={title}
                src={image}
              />
            </Link>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p><Rating rating={rating} /></p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
