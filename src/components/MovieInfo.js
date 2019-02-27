import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Rating } from '../components/Rating'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import YouTube from 'react-youtube';

export class MovieInfo extends Component {
  static propTypes = {
    movie: PropTypes.object
  }

  render () {
    const { movie } = this.props

    const ytOpts = {
      height: '350',
      width: '100%',
    };

    return (
        <div className="movie-detail">
          <Container>
            <Row>
              <Col md={6} xl={6}>
                <YouTube
                  className="youtube-video"
                  videoId={movie.trailer}
                  opts={ytOpts}
                  onReady={this._onReady}
                />
              </Col>
              <Col md={6} xl={6}>
                <div className="movie-subinfo">
                  <h2 className='movie-title'>{movie.title}</h2>
                  <span className='movie-year'>{movie.year} | </span> 
                  <span className='movie-duration'>{movie.duration} min</span>
                  <div className='movie-rating'>
                    <Rating rating={movie.rating} />
                  </div>  
                </div>
                <div className="movie-description">
                  {movie.description}
                </div>
              </Col>
            </Row>
          </Container>
        </div>        
    )
  }
}
