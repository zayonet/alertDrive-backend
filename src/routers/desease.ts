import { Router } from 'express';
import DeseaseController from '../controller/DeseaseController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
import { ValidateUserSchemaOnRegistering, ValidateUserSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const deseaseRoutes = Router();
const deseaseController = new DeseaseController();

deseaseRoutes.get('/', deseaseController.index);
//deseaseRoutes.get('/search', deseaseController.search);
deseaseRoutes.get('/user/:user_id', deseaseController.findAllUserDesease);
deseaseRoutes.get('/:id', authenticate, deseaseController.show);
deseaseRoutes.post('/', deseaseController.create);
deseaseRoutes.put('/:id', authenticate, deseaseController.updates);
//deseaseRoutes.patch('/:id', authenticate, deseaseController.enable);
deseaseRoutes.delete('/:id', authenticate, deseaseController.destroy);

export default deseaseRoutes;
