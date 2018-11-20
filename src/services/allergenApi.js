// API requests for Allergen

import AppConstants from './AppConstants'

class AllergenApi {

  static findAllergen(allergen){
    console.log('hit the find allergen');
    return fetch(AppConstants.Endpoints.ALLERGEN + "/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        allergen: allergen
      })
    })
    .then(res => res.json())
    .catch(err => console.info(err))
  }

  static allAllergens(){
    return fetch(AppConstants.Endpoints.ALLERGEN)
    .then(res => res.json())
    .catch(err => console.info(err))
  }

  static findTranslations(allergen){
    return fetch(AppConstants.Endpoints.ALLERGEN + `/${allergen}`)
    .then(res => res.json())
    .catch(err => console.info(err))
  }

}

export default AllergenApi
