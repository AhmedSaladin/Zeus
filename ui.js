class UI {
    constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.wind = document.getElementById('w-wind');
      this.pressure = document.getElementById('w-pressure');
    }
  
    paint(weather) {
      this.location.textContent = `${weather.location.name}, ${weather.location.country}`;
      this.desc.textContent = weather.current.weather_descriptions[0];
      this.string.textContent = `${weather.current.temperature} C`;
      this.icon.setAttribute('src', weather.current.weather_icons[0]);
      this.humidity.textContent = `Relative Humidity: ${weather.current.humidity} %`;
      this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike} C`;
      this.pressure.textContent = `Pressure: ${weather.current.pressure} mb`;
      this.wind.textContent = `Wind Speed: ${weather.current.wind_speed} kph, with degree ${weather.current.wind_degree}° from "${weather.current.wind_dir}"`;
    }
  }