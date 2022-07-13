import express, { Router, Request, Response } from 'express';
import authenticate from '../middlewares/auth';
import ActivityController from '../controller/ActivityController';

const activityRoutes = Router();
activityRoutes.use(authenticate);
const activityController = new ActivityController();

activityRoutes.get('/', activityController.index);
activityRoutes.get('/search', activityController.search);
activityRoutes.get('/user/:user_id', activityController.findAllUserActivity);
activityRoutes.get('/:id', authenticate, activityController.show);
activityRoutes.post('/', activityController.create);
activityRoutes.put('/:id', authenticate, activityController.updates);
//activityRoutes.patch('/:id', authenticate, activityController.enable);
activityRoutes.delete('/:id', authenticate, activityController.destroy);

export default activityRoutes;