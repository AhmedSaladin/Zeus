class Weather {
  constructor(city, country) {
    this.apiKey = 'bce23efcff794dbbbc9163632212703';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`
    https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city},${this.country}`,
      {
        mode: 'cors',
      })
      const responseData = await response.json();
      console.log(responseData)

    return responseData;

  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.countryCode = country;
  }
}