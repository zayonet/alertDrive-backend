import express, { Router, Request, Response, NextFunction, request } from 'express';
import userRoutes from './user';
import sessionRoutes from './session';

import bookRoutes from './book';
import countryRoutes from './country';
import { generateToken } from '../services/generateToken';
import { resolve } from 'path';
import vehicleRoutes from './vehicle';
import sensorRoutes from './sensor';
import body_userRoutes from './body_user';
import job_userRoutes from './job_user';
import deseaseRoutes from './desease';
import weatherRoutes from './weather';
import modelRoutes from './model';
import fuelRoutes from './fuel';
import brandRoutes from './brand';
import historyUserRoutes from './history_user';
import activityRoutes from './activity';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) =>
  response.json({ message: 'Hello ZayoCode' }),
);

routes.get("/terms", (request, response) => response.json({ message: 'My terms' }));

routes.get("/generate", (request, response) => response.json(generateToken()))

routes.use('/files', express.static(resolve(__dirname, '..', '..', 'uploads')))

routes.use(`${prefixRoutes}/user`, userRoutes);
routes.use(`${prefixRoutes}/session`, sessionRoutes);

routes.use(`${prefixRoutes}/country`, countryRoutes);
routes.use(`${prefixRoutes}/vehicle`, vehicleRoutes);
routes.use(`${prefixRoutes}/sensor`, sensorRoutes);
routes.use(`${prefixRoutes}/body_user`, body_userRoutes);
routes.use(`${prefixRoutes}/job_user`, job_userRoutes);
routes.use(`${prefixRoutes}/desease`, deseaseRoutes);
routes.use(`${prefixRoutes}/weather`, weatherRoutes);
routes.use(`${prefixRoutes}/model`, modelRoutes);
routes.use(`${prefixRoutes}/fuel`, fuelRoutes);
routes.use(`${prefixRoutes}/brand`, brandRoutes);
routes.use(`${prefixRoutes}/HistoryUser`, historyUserRoutes);
routes.use(`${prefixRoutes}/activity`, activityRoutes);

export default routes;