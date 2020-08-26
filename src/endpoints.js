const BASE_SEARCH = "http://api.weatherapi.com/v1/search.json"
const BASE_FORECAST = "http://api.weatherapi.com/v1/forecast.json"
const API_KEY = "485d716e83f6405ebec213508202408"

export const SEARCH = (search) => `${BASE_SEARCH}?key=${API_KEY}&q=${search}`
export const CITY = (city) => `${BASE_FORECAST}?key=${API_KEY}&q=${city}&days=3`