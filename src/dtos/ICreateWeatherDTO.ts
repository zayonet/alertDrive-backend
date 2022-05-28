export default interface CreateWeatherDTO {
  road_type: string;
  current_speed: string;
  free_flow_speed: string;
  data_confidence: string;
  weather_description: string;
  temperature: string;
  pressure: string;
  humidity: string;
  visibility: string;
  wind_speed: string;
  wind_direction: string;
  cloudiness: string;
  user_id: string;
  vehicle_id: string;
}