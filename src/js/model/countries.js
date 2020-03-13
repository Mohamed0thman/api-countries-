import axios from 'axios';
import * as countriesView from '../view/countriesView'
import * as popupView from '../view/popupView'

import * as SearchView from '../view/searchView'
import {elements} from '../view/base'


export default class Countries {

   
   
    
    async getCountries() {
        const all = await axios.get(`https://restcountries.eu/rest/v2/all`)
        this.data = all.data
        console.log(this.data);
        
        elements.resultsPages.addEventListener('click', e => {
            const btn = e.target.closest('.btn-inline')

            if (btn) {
                const goToPage = parseInt(btn.dataset.goto, 10);
                countriesView.clearResults();
                countriesView.renderResults(this.data, goToPage);
        
            }    
        })   
    
    }

    searchResults() {
        const getInput = elements.searchForm.value.toLowerCase();
        countriesView.renderResults(this.data.filter((country) => {
        return country.name.toLowerCase().includes(getInput);
        }))
    };


    filterResults() {
        const option = elements.selected.innerHTML
        countriesView.renderResults(this.data.filter((country) => {
            return country.region === option;
        }))
        debugger
    };
  
}    




/*

elements.searchForm.addEventListener('keyup', e => {
    const getInput = e.target.value.toLowerCase();
    console.log(getInput);
    const getResultItem = elements.resultsItem
    console.log(getResultItem);
    const name = this.data.map((country) => {
        return country.name.toLowerCase()
    }) 
    
    console.log(name);

    countriesView.renderResults(this.data.filter((country) => {
        countriesView.clearResults();
        return country.name.toLowerCase().includes(getInput);
        
    }))
    countriesView.clearBotton()


})
*/



/*
elements.selected.addEventListener('click', () => {
    elements.optionsContainer.classList.toggle('active')
});

elements.optionList.forEach(e => {
    e.addEventListener('click', () => {
        const option = elements.selected.innerHTML = e.querySelector('label').innerHTML;
        elements.optionsContainer.classList.remove('active');

    countriesView.renderResults(this.data.filter((country) => {
            countriesView.clearResults();   
            console.log('sss');             
            return country.region.toLowerCase() === option;

        }))

    })
});     

*/
    
           



/*
popupResults() {
    const id = window.location.hash.replace('#', '');
    popupView.renderPopup(this.data.filter((country) => {
        return  country.alpha3Code === id;
    }))  
}
*/


