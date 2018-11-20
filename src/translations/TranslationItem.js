import React from 'react'
import {Link, Redirect} from 'react-router-dom'

import FemaleTranslation from './FemaleTranslation'

const TranslationItem = (props) => {
  const translation = props.data;
  return (
    <div>
      <span className="language-name">
        {translation.language.name.charAt(0).toUpperCase() + translation.language.name.slice(1)}
      </span>
        <span className="translation-item">
          <strong>Word: </strong>{translation.word}</span>
        <span className="translation-item">
          <strong><Link to={{
              pathname: "plain",
              state: {allergen: translation.allergen.name,
              language: translation.language.name,
              content: translation.content_default}
          }} >Translation (default):</Link></strong> {translation.content_default}</span>
        <span className="translation-item">
          <FemaleTranslation data={translation}/>
        </span>
    </div>
  )
}

export default TranslationItem
