import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Title extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render () {
    return (
    	<h1 className="title title-page">{this.props.title}</h1>
    )
  }
}
