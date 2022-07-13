import { Router } from 'express';
import Job_UserController from '../controller/Job_UserController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
//import { ValidateJob_UserSchemaOnRegistering, ValidateJob_UserSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const job_userRoutes = Router();
const job_userController = new Job_UserController();
job_userRoutes.use(authenticate);

job_userRoutes.get('/', job_userController.index);
job_userRoutes.get('/search', job_userController.search);
job_userRoutes.get('/user/:user_id', job_userController.findAllUserJob_User);
job_userRoutes.get('/:id', authenticate, job_userController.show);
job_userRoutes.post('/', job_userController.create);
job_userRoutes.put('/:id', authenticate, job_userController.updates);
//job_userRoutes.patch('/:id', authenticate, job_userController.enable);
job_userRoutes.delete('/:id', authenticate, job_userController.destroy);

export default job_userRoutes;
