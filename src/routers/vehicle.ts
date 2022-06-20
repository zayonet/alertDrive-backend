import { Router } from 'express';
import VehicleController from '../controller/VehicleController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
//import { ValidateVehicleSchemaOnRegistering, ValidateVehicleSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const vehicleRoutes = Router();
const vehicleController = new VehicleController();

vehicleRoutes.use(authenticate);

vehicleRoutes.get('/', vehicleController.index);
//vehicleRoutes.get('/search', vehicleController.search);
vehicleRoutes.get('/user/:user_id', vehicleController.findAllUserVehicle);
//vehicleRoutes.get('/:id', authenticate, vehicleController.show);
vehicleRoutes.post('/', vehicleController.create);
vehicleRoutes.put('/:id', vehicleController.updates);
//vehicleRoutes.patch('/:id', authenticate, vehicleController.enable);
vehicleRoutes.delete('/:id', vehicleController.destroy);

export default vehicleRoutes;
