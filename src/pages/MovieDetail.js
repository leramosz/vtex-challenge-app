import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../components/ButtonBackToHome'

export class MovieDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie ({ id }) {
    fetch(`http://localhost:3030/movies/${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie })
      })
  }

  componentDidMount () {
    const { movieId } = this.props.match.params
    this._fetchMovie({ id: movieId })
  }

  render () {
    const { title, image, year, description, duration, rating } = this.state.movie

    return (
      <div>
        <ButtonBackToHome />
        <h1>{title}</h1>
        <img src={image} alt="title"/>
        <p>{year}</p>
        <p>{duration}</p>
        <p>{rating}</p>
        <p>{description}</p>
      </div>
    )
  }
}