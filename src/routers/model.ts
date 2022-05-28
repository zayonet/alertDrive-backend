import express, { Router, Request, Response } from 'express';
import authenticate from '../middlewares/auth';
import ModelController from '../controller/ModelController';

const modelRoutes = Router();
modelRoutes.use(authenticate);
const modelController = new ModelController();

modelRoutes.get('/', modelController.index);
modelRoutes.get('/search', modelController.search);
//modelRoutes.get('/:id', authenticate, modelController.show);
modelRoutes.post('/', modelController.create);
//modelRoutes.put('/:id', authenticate, modelController.updates);
//modelRoutes.patch('/:id', authenticate, modelController.enable);
modelRoutes.delete('/:id', authenticate, modelController.destroy);

export default modelRoutes;