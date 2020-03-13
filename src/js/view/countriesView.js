import { elements } from './base';



export const clearResults = () => {
    elements.resultsList.innerHTML = ' ';
    elements.resultsPages.innerHTML = ' '
};

export const clearNotFound = () => elements.resultsNotFound.innerHTML = ' ';


export const clearBotton = () => elements.resultsPages.innerHTML = ' ';




export const renderCountries = (country) => {
    const markup = 
    `
    <li class="results__item">
        <a class="results__link" href="#${country.alpha3Code}">
            <div class="results__card">
                <figure class="result__fig">
                    <img class="card-img-top" src="${country.flag}" alt="${country.name}">
                </figure>
                <div class="card-body">
                    <h3 class="results__name"> ${country.name}</h3>
                    <p class="results__population"><span>Population:</span>${(country.population.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,', ))}</p>
                    <p class="results__region"><span>Region:</span> ${country.region}</p>
                    <p class="result__Capital"><span>Capital:</span> ${country.capital}</p>
                </div>
            </div>
        </a>
    </li>    

    `
    elements.resultsList.insertAdjacentHTML('afterbegin', markup)
}

export const renderNotFound = () => {
  const  markup = 
    `
    <div class="not-found__text">
        <h2>No results found</h2>
        <p>Try different keywords or remove search filters</p>
    </div>    
    `
    elements.resultsNotFound.insertAdjacentHTML('afterbegin', markup)

} 



const creatButton = (page, type) => 
    `
        <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
            <i class="fa fa-arrow-alt-circle-${type === 'prev' ? 'left' : 'right'}"> </i>
           
        </button>
       
    `;




const renderButtom = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    
    
    let button;
    if (page === 1 && pages > 1) {
      button =  creatButton(page, 'next')

    } else if (page < pages) {
        button =  
        `${creatButton(page, 'prev')}
         ${creatButton(page, 'next')}   
        `;
    } else if (page === pages && pages > 1) {
        button =  creatButton(page, 'prev')
    }

    
    
    elements.resultsPages.insertAdjacentHTML('afterbegin', button)
    

};


export const renderResults = (country, page = 1, resPerPage = 8) => {
   
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    
    country.slice(start, end).forEach(renderCountries);
    console.log(country);
    
    console.log(country.slice(start, end));
    


     renderButtom(page, country.length, resPerPage)
     console.log(country.length);
     
}