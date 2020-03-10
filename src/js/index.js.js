import Countries from './model/countries'
import Search from './model/Search'
import Popup from './model/popup'

import * as countriesView from './view/countriesView'
import * as SearchView from './view/searchView'
import * as popupView from './view/popupView'

import { elements } from './view/base';


const state = {}

const controlcountries = async () => {

    state.countries = new Countries() 
    console.log(state.contains);
    await state.countries.getCountries()
    countriesView.renderResults(state.countries.data)

}
controlcountries()

const controlPopup = async () => {
    const id = window.location.hash.replace('#', '');
    elements.popup.classList.toggle('popup-target')
    console.log(id);
    if(id) {
        popupView.clearPopup()
        state.popup = new Popup(id)
        console.log(state.popup);
        await state.popup.getPopup()
        popupView.renderPopup(state.popup)
    }
}

window.addEventListener('hashchange', controlPopup);
//window.addEventListener('load', controlPopup)


//['hashchange', 'load'].forEach(event => window.addEventListener(event, controlPopup));


elements.darkMode.addEventListener('click', e => {
    elements.body.classList.toggle('dark-mode')
    if (elements.moonFont.classList.contains('far')) {
        elements.moonFont.classList.remove('far')  
        elements.moonFont.classList.add('fa')  
    } else {
        elements.moonFont.classList.remove('fa')  
        elements.moonFont.classList.add('far')  
    }   
})




