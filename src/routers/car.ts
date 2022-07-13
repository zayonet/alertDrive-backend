import express, { Router, Request, Response } from 'express';
import authenticate from '../middlewares/auth';
import CarController from '../controller/CarController';

const carRoutes = Router();
//carRoutes.use(authenticate);
const carController = new CarController();

carRoutes.get('/', carController.index);
carRoutes.get('/search', carController.search);
//carRoutes.get('/user/:user_id', carController.findAllUsercar);
carRoutes.get('/:id', carController.show);
//carRoutes.post('/', carController.create);
//carRoutes.put('/:id', authenticate, carController.updates);
//carRoutes.patch('/:id', authenticate, carController.enable);
//carRoutes.delete('/:id', authenticate, carController.destroy);

export default carRoutes;