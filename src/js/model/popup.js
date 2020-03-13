import axios from "axios";

export default class Popup {
  constructor(id) {
    this.id = id;
  }

  async getPopup() {await axios
    .get(`https://restcountries.eu/rest/v2/name/${this.id}`)
      .then(res => {
        res.data.map(country => {
          this.name = country.name;
          this.flag = country.flag;
          this.nativeName = country.nativeName;
          this.population = country.population;
          this.subregion = country.subregion;
          this.capital = country.capital;
          this.topLevelDomain = country.topLevelDomain;
          this.region = country.region;
          this.borders = country.borders;
          this.currencies = country.currencies.map(currency => currency.code);
          this.languages = country.languages.map(lang => lang.iso639_1);
          this.code = country.alpha3Code;
        });
      }).catch((e) => alert("Invalid country code"))
  }
}
