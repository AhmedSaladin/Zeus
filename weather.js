class Weather {
  constructor(city, country) {
    this.apiKey = '49fbf8d48aa14b3d930123820191507';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {

    const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city},${this.country}`)

    const responseData = await response.json();

    return responseData;

  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.countryCode = country;
  }
}