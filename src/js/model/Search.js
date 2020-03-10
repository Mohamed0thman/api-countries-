import axios from 'axios';



export default class Search {

    constructor(query) {
        this.query = query
    }


    async getResults() {

        const con = await axios(`https://restcountries.eu/rest/v2/name/${this.query}`)
        console.log(con);
        this.result = con.data

        //ountriesView.renderResults(this.result);     

        console.log(this.result);
        
        
        
    }
}