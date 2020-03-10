export const elements = {
     body: document.querySelector('body'),
     moonFont: document.querySelector('.moon'),
     darkMode: document.querySelector('.header__right'),
     header: document.querySelector('.header'),
     searchForm: document.querySelector('.search__field'),
     search__Font: document.querySelector('.fa-search'),
     selected: document.querySelector('.selected'),
     optionsContainer: document.querySelector('.option-container'),
     optionList: document.querySelectorAll('.option'),
     resultsList: document.querySelector('.results__list'),
     resultsPages: document.querySelector('.results__pages'),
     resultsItem: document.querySelectorAll('.results__item'),
     resultsLink: document.querySelectorAll('.results__link'),
     btn: document.querySelectorAll('.btn'),
     popupBox: document.querySelector('.popup__box'),
     popup: document.querySelector('.popup')

    
};



export const clearResults = () => {
     elements.resultsList.innerHTML = ' ';
     elements.resultsPages.innerHTML = ' '
 };




