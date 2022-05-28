import { createConnection } from 'typeorm';
import logger from '../logs';

createConnection().catch(error => { console.log(error); logger.error(error); });
