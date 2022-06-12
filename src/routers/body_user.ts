import { Router } from 'express';
import Body_UserController from '../controller/Body_UserController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
//import { ValidateBody_UserSchemaOnRegistering, ValidateBody_UserSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const body_userRoutes = Router();
const body_userController = new Body_UserController();

body_userRoutes.get('/', body_userController.index);
body_userRoutes.get('/user/:user_id', body_userController.findAllUserBody_User);
//body_userRoutes.get('/search', body_userController.search);
//body_userRoutes.get('/:id', authenticate, body_userController.show);
body_userRoutes.post('/', body_userController.create);
//body_userRoutes.put('/:id', authenticate, body_userController.updates);
//body_userRoutes.patch('/:id', authenticate, body_userController.enable);
body_userRoutes.delete('/:id', authenticate, body_userController.destroy);

export default body_userRoutes;
