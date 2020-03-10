import { elements } from './base';


export const getInput = () => elements.searchForm.Value;
export const cleanInput = () => {elements.searchForm.Value = " "};


export const clearResults = () => {
    elements.resultsList.innerHTML = ' ';
    elements.resultsPages.innerHTML = ' '
};