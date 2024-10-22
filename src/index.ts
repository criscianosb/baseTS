import express, { Router } from 'express';
import dotenv from 'dotenv';

import { ExpressController } from './controllers/ExpressController';
import { RouterController } from './controllers/RouterController';
import { RouterService } from './services/RouterService';

dotenv.config();

const expressController: ExpressController = new ExpressController(express);
const routerService: RouterService = new RouterService();
const routerController: RouterController = new RouterController(routerService);

const routes: Router = routerController.getRoutes()

expressController.use(routes)

expressController.listen( Number(process.env.PORT) || 3000);