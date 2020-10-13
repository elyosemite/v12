import { Router } from 'express';

import AuthMiddleware from './middlewares/AuthMiddleware';

import UserController from './controllers/UserController';
import AdminController from './controllers/AdminController';
import AuthController from './controllers/AuthController';

const routes = Router();

routes.post('/users', UserController.create);
routes.patch('/users', UserController.update);
routes.get('/users', AuthMiddleware.auth, UserController.index);

routes.post('/auth', AuthController.authenticate);

routes.get('/admin', AdminController.index);
routes.get('/admin/create', AuthMiddleware.auth, AdminController.create);

export default routes;
