import React, {Component} from 'react'
import AllergenApi from '../services/allergenApi'
import TranslationItem from './TranslationItem'

import '../styles/translation-list.css';

class TranslationList extends Component {
  state = {
    data: '',
    loading: true
  }

  componentDidMount(){
    console.log('props here')
    const allergenName = this.props.match.params.allergenName
    AllergenApi.findTranslations(allergenName)
    .then(json =>
      this.setState({
        data: json,
        loading: false
      })
  )}

  render(){
    const {data, loading} = this.state

    if (loading) {
      return ("Loading...")
    }

    return(
      <div className="wrapper">
        <div className="parent-container">
          <div className="child-container">
            <center style={{marginBottom: "10px"}}><span style={{fontSize: "x-large"}}>Translations for</span> <em style={{fontSize: "xx-large"}}>{data[0].allergen.name}</em></center>
            <div>Here will be the drop down</div>
              {data.map((translation, i) => {
                  return <TranslationItem key={i} data={translation}/>
                }
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default TranslationList
