import React, {Component} from 'react'

import './styles/plain-item.css';

class PlainBackgroundItem extends Component {

  state = {
    deadly: false
  }

  handleInputChange = () => {
    this.setState(prevState => ({
      deadly: !prevState.deadly
    }))
  }

  handleSeverity = () => {
    const plainInfo = this.props.history.location.state;
    if (this.state.deadly) {
      return(
        <span id="plain-title">How to say "I am very allergic to {plainInfo.allergen}. If I eat even a little I will die" in {plainInfo.language}:</span>
      )
    } else {
      return(
        <span id="plain-title">How to say "I am allergic to {plainInfo.allergen}" in {plainInfo.language}:</span>
      )
    }
  }

  render(){
    const plainInfo = this.props.history.location.state;
    return(
      <div className="wrapper">
        <span id="plain-instructions">Take a screen shot of this for your records!</span><br/>

        {this.handleSeverity()}
        <span id="plain-content">{plainInfo.content}</span>
      </div>
    )
  }
}

// <div className="checkbox">
// <label>Is this allergy deadly?<input name="deadly" type="checkbox" checked={this.state.deadly} onChange={this.handleInputChange}/></label>

export default PlainBackgroundItem;
