import { Router } from 'express';
import CountryController from '../controller/CountryController';
import authenticate from '../middlewares/auth';
import { validateRequestSchema } from '../middlewares/validate-request-schema';
import { ValidateUserSchemaOnRegistering, ValidateUserSchemaOnUpdating } from '../schema/validate-user-schema-on-regitering';

const countryRoutes = Router();
const countryController = new CountryController();

countryRoutes.get('/', countryController.index);
//countryRoutes.get('/search', countryController.search);
//countryRoutes.get('/:id', authenticate, countryController.show);
countryRoutes.post('/', countryController.create);
///countryRoutes.put('/:id', authenticate, ValidateUserSchemaOnUpdating, validateRequestSchema, countryController.updates);
//countryRoutes.patch('/:id', authenticate, countryController.enable);
countryRoutes.delete('/:id', authenticate, countryController.destroy);

export default countryRoutes;
