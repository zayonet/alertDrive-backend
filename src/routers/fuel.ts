import express, { Router, Request, Response } from 'express';
import authenticate from '../middlewares/auth';
import FuelController from '../controller/FuelController';

const fuelRoutes = Router();
fuelRoutes.use(authenticate);
const fuelController = new FuelController();

fuelRoutes.get('/', fuelController.index);
fuelRoutes.get('/search', fuelController.search);
fuelRoutes.get('/vehicle/:vehicle_id', fuelController.findAllVehicleFuels);
//fuelRoutes.get('/:id', authenticate, fuelController.show);
fuelRoutes.post('/', fuelController.create);
//fuelRoutes.put('/:id', authenticate, fuelController.updates);
//fuelRoutes.patch('/:id', authenticate, fuelController.enable);
fuelRoutes.delete('/:id', authenticate, fuelController.destroy);

export default fuelRoutes;