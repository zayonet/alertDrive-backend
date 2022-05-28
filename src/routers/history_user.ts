import { Router } from 'express';
import History_UserController from '../controller/historyUserController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
import { ValidateUserSchemaOnRegistering, ValidateUserSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const historyUserRoutes = Router();
const historyUserController = new History_UserController();

historyUserRoutes.get('/', historyUserController.index);
//historyUserRoutes.get('/search', historyUserController.search);
//historyUserRoutes.get('/:id', authenticate, historyUserController.show);
historyUserRoutes.post('/', historyUserController.create);
///historyUserRoutes.put('/:id', authenticate, ValidateUserSchemaOnUpdating, validateRequestSchema, historyUserController.updates);
//historyUserRoutes.patch('/:id', authenticate, historyUserController.enable);
historyUserRoutes.delete('/:id', authenticate, historyUserController.destroy);

export default historyUserRoutes;
