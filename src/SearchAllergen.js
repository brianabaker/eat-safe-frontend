import React, {Component} from 'react'

import AllergenServices from './services/allergenApi'

class SearchAllergen extends Component {
  state = {
    allergen: "",
    redirect: false
  }

  handleChange = (event) => {
    this.setState({
      allergen: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('hitting the handle submit')
    AllergenServices.findAllergen(this.state.allergen)
    .then(json => {
      if (json.status === "SUCCESS"){
        this.props.redirect(json.data)
      } else {
        console.log('error', json.status)
        // redirect as a 404 with the original serach keyword typed so they can see if they searched it incorrectly.
        this.props.redirect(this.state.allergen)
      }
    })
  }

  render(){
    return(
      <form className="search-allergen" onSubmit={this.handleSubmit}>
        <div id="input-container">
          <input id="search-allergen-input" type="text" placeholder='Allergen' value={this.state.allergen} onChange={this.handleChange}/>
          <button id="search-button" type="submit" class="fa fa-search"></button>
        </div>
      </form>
    )
  }
}

export default SearchAllergen

//
// button,
// input,
// optgroup,
// select,
// textarea {
//   font-family: inherit; /* 1 */
//   font-size: 100%; /* 1 */
//   line-height: 1.15; /* 1 */
//   margin: 0; /* 2 */
// }
