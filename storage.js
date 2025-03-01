class Storage {

    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'giza';
        this.defaultCountry = 'egypt';
    }
    getLocationData() {
        if (localStorage.getItem('city') === null && localStorage.getItem('country') === null) {
            this.city = this.defaultCity;
            this.country = this.defaultCountry
        } else {
            this.city = localStorage.getItem('city');
            this.country = localStorage.getItem('country');
        }

        return {
            city: this.city,
            country: this.country
        }
    }
    setLocationData(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);

    }
}