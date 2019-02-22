import React, { Component } from 'react'

import { Title } from '../components/Title'
import { MovieList } from '../components/MovieList'
import { CategoryList } from '../components/CategoryList'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class MainContent extends Component {
 
  render () {

    const { categories, movies, title } =  this.props

    return (
      <div>
        <CategoryList categories={categories} />
        <Title>{title}</Title>
        <Container>
          <Row>  
            <MovieList movies={movies} />
          </Row>
        </Container>
      </div>
    )
    
  }
  
}
