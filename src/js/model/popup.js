import axios from "axios";

export default class Popup {
  constructor(id) {
    this.id = id;
  }

  async getPopup() {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${this.id}`
    );

    this.name = res.data.map(country => {
      return country.name;
    });
    console.log(this.name);

    this.flag = res.data.map(country => {
      return country.flag;
    });
    this.native = res.data.map(country => {
      return country.nativeName;
    });
    this.population = res.data.map(country => {
      return country.population;
    });
    this.subregion = res.data.map(country => {
      return country.subregion;
    });
    this.capital = res.data.map(country => {
      return country.capital;
    });
    this.topLevelDomain = res.data.map(country => {
      return country.topLevelDomain;
    });
    this.currencies = res.data.map(country => {
      return country.currencies.map(el => {
        return el.code;
      });
    });
    this.languages = res.data.map(country => {
      return country.languages.map(el => {
        return el.iso639_1;
      });
    });
    console.log(this.languages);

    this.region = res.data.map(country => {
      return country.region;
    });
    this.borders = res.data.map(country => {
      return country.borders;
    });
    console.log(this.borders);
  }
}
