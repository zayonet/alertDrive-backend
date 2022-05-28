import BookCategory from "../enums/BookCategory";

export default interface ICreateSensorDTO {
  accelerometerX: string;
  accelerometerY: string;
  accelerometerZ: string;
  gyroscopeX: string;
  gyroscopeY: string;
  gyroscopeZ: string;
  latitude: string;
  longitude: string;
  altitude: string;
  user_id: string;
  vehicle_id: string;
}