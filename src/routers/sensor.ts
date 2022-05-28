import { Router } from 'express';
import SensorController from '../controller/SensorController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
//import { ValidateSensorSchemaOnRegistering, ValidateSensorSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const sensorRoutes = Router();
const sensorController = new SensorController();

sensorRoutes.get('/', sensorController.index);
//sensorRoutes.get('/search', sensorController.search);
//sensorRoutes.get('/:id', authenticate, sensorController.show);
sensorRoutes.post('/', sensorController.create);
//sensorRoutes.put('/:id', authenticate, sensorController.updates);
//sensorRoutes.patch('/:id', authenticate, sensorController.enable);
//sensorRoutes.delete('/:id', authenticate, sensorController.destroy);

export default sensorRoutes;
