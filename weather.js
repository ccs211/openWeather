class Weather {
  constructor(city, country) {
    this.apiKey = '1786f886d9e70523541ef6e2088819af';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();
    console.log(responseData)

    return responseData
  }

  // Change weather location 
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

 