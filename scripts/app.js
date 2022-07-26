const cityForm = document.querySelector('form');
const citySearch = document.querySelector('.search-icon');

const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');

const updateUI = (data)=>{

  /* // without destructuring properties

   const cityDets = data.cityDets;
   const weather = data.weather;
  */

   // destructuring properties
   const {cityDets, weather} = data;

   //update details template
   details.innerHTML = `
      <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
             <div class="my-3">Precipitation Type:${weather.PrecipitationType}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span> <span>&deg;C</span>
              <br>
              <span>${weather.Temperature.Imperial.Value}</span>
              <span>&deg;F</span>

            </div>  
   `
   // remove the d-none class if present
    if(card.classList.contains('d-none')){
     card.classList.remove('d-none');
   }

}

const updateCity = async (city) =>{

  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  /*return {
   cityDets: cityDets,
   weather:  weather
  }; */


//a shorter alternative for the above return
   return {cityDets, weather};

};


cityForm.addEventListener('submit', (e)=>{
	// prevent default action
   e.preventDefault();
  
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

 // update the UI with new city
  updateCity(city)
      .then(data => updateUI(data))
      .catch(err => console.log(err));
   });

citySearch.addEventListener('click', (e)=>{
  // prevent default action
   e.preventDefault();
  
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

 // update the UI with new city
  updateCity(city)
      .then(data => updateUI(data))
      .catch(err => console.log(err));
   });