import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Rating extends Component {
  static propTypes = {
    rating: PropTypes.number
  }

  render () {
    const { rating } = this.props
    let rating_arr = [];
    
    for (let i = 1; i <= rating; i++)
    	rating_arr[i-1] = i
    
    return (
    	rating_arr.map(val => {
    		 return <FontAwesomeIcon key={val} icon="star" />
    	})
    )
  }
}
