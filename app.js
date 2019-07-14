//Init weather object
const weather = new Weather('awsim','eg');

weather.getWeather()
.then(result => console.log(result))
.catch(err=> console.log(err));