import React, { Component } from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'
import { CategoryList } from '../components/CategoryList'

export class NotFound extends Component {

  state = { 
    categories: []
  }

  componentDidMount () {

    fetch(`http://localhost:3030/categories`)
      .then(res => res.json())
      .then(categories => {
        this.setState({ categories })
      })
  }

  render () {
	return ( 
	  <div>
	  	<CategoryList categories={this.state.categories} />
		  <div className='not-found'>
		    <h1 className='title'>404!</h1>
		    <h2 className='subtitle'>Page not found</h2>
		    <ButtonBackToHome />
		  </div>
	  </div>
	)
  }
}
