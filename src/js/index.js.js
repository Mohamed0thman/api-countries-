import Countries from './model/countries'
import * as countriesView from './view/countriesView'
import * as popupView from './view/popupView'
import { elements } from './view/base';


const state = {}

const controlcountries = async () => {
    countriesView.clearResults();   
    state.countries = new Countries() 
    await state.countries.getCountries()
    countriesView.renderResults(state.countries.data)

} 
controlcountries() 




const controlPopup = async () => {
    const id = window.location.hash.replace('#', '');
    elements.popup.classList.remove('popup-target')
    popupView.clearPopup()
    if(id) {
        elements.popup.classList.add('popup-target')
        state.countries.getPopup()
    }
}

window.addEventListener("hashchange", controlPopup);

if (window.location.hash.length > 1) {
  window.addEventListener("load", controlPopup);
}



const controlFilter = async () => {
    countriesView.clearResults();   
    state.countries.filterResults()
}
        
elements.selected.addEventListener('click', () => {
    elements.optionsContainer.classList.toggle('active')
});

elements.optionList.forEach(e => {
    e.addEventListener('click', () => {
        elements.optionClose.classList.add('fa-times');
        elements.optionsContainer.classList.remove('active');
        elements.selected.innerHTML = e.querySelector('label').innerHTML;
        controlFilter()
    })
});     

elements.optionClose.addEventListener('click', () => {
    elements.optionClose.classList.remove('fa-times');
    elements.selected.innerHTML = 'Filte By Region'
    controlcountries() 
})


const controlSearch = async () => { 

    if (elements.searchForm.value === '') {
        controlcountries()
    } else {
        if (elements.resultsList.children.length === 0) {
            countriesView.clearNotFound();
            countriesView.clearResults();
            countriesView.clearBotton();
            countriesView.renderNotFound();
        } else {
            countriesView.clearNotFound();
            countriesView.clearResults();  
            state.countries.searchResults()
        }    
       
    } 
}


elements.searchForm.addEventListener('keyup', () => {
    controlSearch()
})



elements.darkMode.addEventListener('click', () => {
    elements.body.classList.toggle('dark-mode')
    if (elements.moonFont.classList.contains('far')) {
        elements.moonFont.classList.remove('far')  
        elements.moonFont.classList.add('fa')  
    } else {
        elements.moonFont.classList.remove('fa')  
        elements.moonFont.classList.add('far')  
    }   
})






/*
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

window.addEventListener("hashchange", controlPopup);

if (window.location.hash.length > 1) {
  window.addEventListener("load", controlPopup);
}

*/


/*
window.addEventListener('hashchange', controlPopup);
//window.addEventListener('load', controlPopup)


//['hashchange', 'load'].forEach(event => window.addEventListener(event, controlPopup));

*/



