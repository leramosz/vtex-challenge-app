import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { MovieDetail } from './pages/MovieDetail'
import { NotFound } from './pages/NotFound'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/movies/:movieId' component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
