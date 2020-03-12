import { elements } from "./base";

export const clearPopup = () => (elements.popupBox.innerHTML = " ");

const renderBorders = border => {
  return `
    <li class="borders-item">
        <a class="popup__borders-btn btn">${border}</a>  
    </li>
`;
};

export const renderPopup = country => {
  const markup = `
    <div class="popup__left ">
        <figure class="popup__fig">
            <img src="${country.flag}" alt="${country.name}">
        </figure>
    </div>
    <div class="popup__right">
        <div class="popup__text">
            <h1 class="popup__heading">${country.name}</h1>
            <div class="popup__item">
                <ul class="popup__list-right">
                    <li class="popup__list popup__native-name"><span>Native Name:</span> ${
                      country.nativeName
                    }</li>
                    <li class="popup__list popup__population"><span>Population:</span> ${parseInt(
                      country.population
                    )
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}</li>
                    <li class="popup__list popup__region"><span>Region:</span> ${
                      country.region
                    }</li>
                    <li class="popup__list popup__sub-region"><span>Sub Region:</span> ${
                      country.subregion
                    }</li>
                    <li class="popup__list popup__capital"><span>Capital:</span> ${
                      country.capital
                    }</li>
                </ul>
                <ul class="popup__list-left">
                    <li class="popup__list popup__top-level"><span>Top Level Domain:</span> ${
                      country.topLevelDomain
                    }</li>
                    <li class="popup__list popup__currencies"><span>Currencies:</span> ${
                      country.currencies
                    }</li>
                    <li class="popup__list popup__Languages"><span>Languages:</span> ${
                      country.languages
                    }</li>
                </ul>
        </div> 
    </div>     
    <div class="popup__borders">                 
        <span>Border Countries:</span>
        <ul class="borders.list">

            ${country.borders.map(border => renderBorders(border)).join("")} 
        
        </ul>

    </div>    
    
    `;
  elements.popupBox.insertAdjacentHTML("afterbegin", markup);
};
