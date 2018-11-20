import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Navbar from './Navbar'

// allergen pages
import TranslationList from './translations/TranslationList'
import AllergenIndex from './AllergenIndex'
import PlainBackgroundItem from './PlainBackgroundItem'

// trials

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/allergen/plain' component={PlainBackgroundItem}/>
          <Route path='/allergen/:allergenName' component={TranslationList}/>
          <Route path='/allergen' component={AllergenIndex}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
