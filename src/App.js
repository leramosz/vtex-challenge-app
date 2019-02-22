import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { MovieDetail } from './pages/MovieDetail'
import { CategoryDetail } from './pages/CategoryDetail'
import { NotFound } from './pages/NotFound'

import './css/App.css';
import 'bulma/css/bulma.css'
import './css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movies/:movieId' component={MovieDetail} />
          <Route path='/categories/:categoryId' component={CategoryDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
