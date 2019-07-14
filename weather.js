class Weather {

    constructor(city, countryCode) {
        this.apiKey = '7480d720b3e760da95cb2ee794c19907';
        this.city = city;
        this.countryCode = countryCode;

    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData.current_observation
    }

    //Change Weather Location
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;

    }
    
}