//Init Storage
const storage = new Storage();

//Get Stored location data 
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Init UI 
const ui = new UI();



//Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location
    weather.changeLocation(city, state);

    //Set Location in LS
    storage.setLocationData(city, state);

    //Get and Display weather
    getWeather()

    //Close model
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(result => {

            ui.paint(result);
        })
        .catch(err => console.log(err));
}
