import express, { Router, Request, Response } from 'express';
import authenticate from '../middlewares/auth';
import BrandController from '../controller/BrandController';

const brandRoutes = Router();
brandRoutes.use(authenticate);
const brandController = new BrandController();

brandRoutes.get('/', brandController.index);
brandRoutes.get('/search', brandController.search);
//brandRoutes.get('/:id', authenticate, brandController.show);
brandRoutes.post('/', brandController.create);
//brandRoutes.put('/:id', authenticate, brandController.updates);
//brandRoutes.patch('/:id', authenticate, brandController.enable);
brandRoutes.delete('/:id', authenticate, brandController.destroy);

export default brandRoutes;