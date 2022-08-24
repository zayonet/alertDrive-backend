import { Router } from 'express';
import AutomobileController from '../controller/AutomobileController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
//import { ValidateAutomobileSchemaOnRegistering, ValidateAutomobileSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const automobileRoutes = Router();
const automobileController = new AutomobileController();

automobileRoutes.use(authenticate);

automobileRoutes.get('/', automobileController.index);
//automobileRoutes.get('/search', automobileController.search);
automobileRoutes.get('/user/:user_id', automobileController.findAllUserAutomobile);
automobileRoutes.get('/:id', authenticate, automobileController.show);
automobileRoutes.post('/', automobileController.create);
automobileRoutes.put('/:id', automobileController.updates);
//automobileRoutes.patch('/:id', authenticate, automobileController.enable);
automobileRoutes.delete('/:id', automobileController.destroy);

export default automobileRoutes;
