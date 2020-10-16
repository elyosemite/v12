import { Router } from 'express';

import AuthMiddleware from './middlewares/AuthMiddleware';

import UserController from './controllers/UserController';
import AdminController from './controllers/AdminController';
import AuthController from './controllers/AuthController';

const routes = Router();

routes.post('/admin/auth', AuthController.authenticate);

routes.post('/user',        AuthMiddleware.auth, UserController.create);
routes.patch('/user',       AuthMiddleware.auth, UserController.update);
routes.delete('/user/:id?', AuthMiddleware.auth, UserController.destroy);
routes.get('/users',        AuthMiddleware.auth, UserController.list);

routes.post('/admin',       AuthMiddleware.auth, AdminController.create);
routes.patch('/admin',      AuthMiddleware.auth, AdminController.update);
routes.delete('/admin',     AuthMiddleware.auth, AdminController.destroy);
routes.get('/admins',       AuthMiddleware.auth, AdminController.list);

export default routes;
