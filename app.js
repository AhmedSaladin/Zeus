//Init weather object
const weather = new Weather('awsim', 'eg');
//Init UI 
const ui = new UI();

//Get Weather on DOM Load
document.addEventListener('DOMContentLoad', getWeather);

function getWeather() {
  
}
weather.getWeather()
.then(result => {

    console.log(result);
    ui.paint(result);
})
.catch(err => console.log(err));