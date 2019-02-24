import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Title } from '../components/Title'
import { MovieList } from '../components/MovieList'
import { CategoryList } from '../components/CategoryList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class MainContent extends Component {
  static propTypes = {
    categories: PropTypes.array,
    movies: PropTypes.array,
    title: PropTypes.string
  }

  render () {

    const { categories, movies, title } =  this.props

    return (
      <div>
        <CategoryList categories={categories} />
        <Title title={title} />
        <Container>
          <Row>  
            <MovieList movies={movies} />
          </Row>
        </Container>
      </div>
    )
    
  }
  
}
