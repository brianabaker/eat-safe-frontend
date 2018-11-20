import React, {Component} from 'react'

import {Redirect} from 'react-router'
import SearchAllergen from './SearchAllergen'

import './styles/home-page.css';

class Home extends Component {
  state = {
    searchResponse: ""
  }

  handleRedirect = (data) => {
    this.setState({
      searchResponse: data
    })
  }

  render(){
    if (this.state.searchResponse && this.state.searchResponse.name) {
      let location = "/allergen/" + this.state.searchResponse.name
      return <Redirect success="found" to={location}/>
    } else if (this.state.searchResponse) {
      let keyword = this.state.searchResponse
      return <Redirect to={{pathname:'/allergen', state: {success:"not-found", keyword: keyword}

      }}/>
    }

    return(
      <div className="wrapper">
        <div className="parent-container">
          <div className="child-container">
            <span id="title">Title</span>
            <div id="header">Find out how to say your allergy in any* language!</div>
            <div id="header sub-header"><em>*any is a work in progress</em></div>
            <div id="header">What are you allergic to?</div>
            <SearchAllergen redirect={this.handleRedirect}/>
          </div>
        </div>
      </div>
    )
  }
}

// <em>*any is a work in progress</em>
export default Home
