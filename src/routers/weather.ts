import { Router } from 'express';
import WeatherController from '../controller/WeatherController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
//import { ValidateWeatherSchemaOnRegistering, ValidateWeatherSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const weatherRoutes = Router();
const weatherController = new WeatherController();

weatherRoutes.use(authenticate);


weatherRoutes.get('/', weatherController.index);
//weatherRoutes.get('/search', weatherController.search);
//weatherRoutes.get('/:id', weatherController.show);
weatherRoutes.post('/', weatherController.create);
//weatherRoutes.put('/:id', weatherController.updates);
//weatherRoutes.patch('/:id', weatherController.enable);
weatherRoutes.delete('/:id', weatherController.destroy);

export default weatherRoutes;
