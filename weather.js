class Weather {
  constructor(city, country) {
    this.apiKey ='3b132185944915881b22aef3bd9e2221';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {

    const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city},${this.country}`)

    const responseData = await response.json();
    console.log(responseData);

    return responseData;

  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.countryCode = country;
  }
}