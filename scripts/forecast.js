
const key = '74254I1hKfB0GpZG4vDzw0KAAt7QkBl7';

//get weather information
   const getWeather = async (locationId) =>{
      const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
      const query = `${locationId}?apikey=${key}`;

     const response = await fetch(base + query);
    const data = await response.json();
  
 
 return data[0]

   }

// get city information
const getCity = async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

 }

/*
 getCity('kingston').then((data)=>{return getWeather(data.Key);}).then(data =>{
    console.log(data);
 }).catch(err => console.log(err));
getWeather("214971");  
*/