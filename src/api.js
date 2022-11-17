export const getApi = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_key,
    "X-RapidAPI-Host": process.env.REACT_APP_host,
  },
};
console.log(process.env.REACT_APP_host);
export const geo_api_url = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const weather_api_url = "https://api.openweathermap.org/data/2.5";
export const weather_api_key = process.env.REACT_APP_weather_key;
