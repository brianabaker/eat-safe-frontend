import React, {Component} from 'react'

import AllergenApi from './services/allergenApi'

class AllergenIndex extends Component {
  // console.log(props.location.state)

  componentDidMount(){
    AllergenApi.allAllergens()
    .then(json => console.log(json))
  }

  render(){
    return(
      <div>
        {/* {state ? "not found" : null} */}
        Hey I'm the Allergen Index page<br/>
        {this.props.location.state ? `Sorry we didn't find the allergen ${this.props.location.state.keyword}`
        : null}

      </div>
    )
  }
}

export default AllergenIndex;
