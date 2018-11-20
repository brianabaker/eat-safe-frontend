import React from 'react'
import {Link} from 'react-router-dom'

const FemaleTranslation = (props) => {
  const translation = props.data;
  if (translation.content_female) {
    return(
      <span>
        <strong><Link to={{
            pathname: "plain",
            state: {allergen: translation.allergen.name,
            language: translation.language.name,
            content: translation.content_default}
        }} >Translation (female)</Link></strong>: {translation.content_female}
      </span>
    )
  } else {
    return(
      <span>
        <strong>Translation (female)</strong>: None
      </span>
    )
  }
}

export default FemaleTranslation
