import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { CategoryList } from '../components/CategoryList'
import { Rating } from '../components/Rating'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import YouTube from 'react-youtube';
  
export class MovieDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { 
    movie: {},
    categories: []
  }

  _fetchMovie ({ id }) {
    fetch(`http://localhost:3030/movies/${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie })
      })

    fetch(`http://localhost:3030/categories`)
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
    const { title, year, description, duration, rating, trailer } = this.state.movie

    const ytOpts = {
      height: '350',
      width: '100%',
    };

    return (
      <div>
        <CategoryList categories={this.state.categories} /> 
        <div className="movie-detail">
          <Container>
            <Row>
              <Col md={6} xl={6}>
                <YouTube
                  className="youtube-video"
                  videoId={trailer}
                  opts={ytOpts}
                  onReady={this._onReady}
                />
              </Col>
              <Col md={6} xl={6}>
                <div className="movie-subinfo">
                  <h2>{title}</h2>
                  <span>{year} | </span> 
                  <span>{duration} min </span>
                  <div>
                    <Rating rating={rating} />
                  </div>  
                </div>
                <div className="movie-description">
                  {description}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
