import { Router } from 'express';

import AuthMiddleware from './middlewares/AuthMiddleware';

import UserController from './controllers/UserController';
import AdminController from './controllers/AdminController';
import AuthController from './controllers/AuthController';

const routes = Router();

// You just manipulate those routes with JWT Authenticate
routes.post('/user/auth', AuthController.authenticateUser);
routes.post('/users', UserController.create);
routes.patch('/users', AuthMiddleware.auth, UserController.update);
routes.delete('/users/:id?', AuthMiddleware.auth, UserController.destroy);
routes.get('/users', AuthMiddleware.auth, UserController.list);

routes.post('/admin/auth', AuthController.authenticateAdmin);
routes.post('/admin', AdminController.create);
routes.patch('/admin', AdminController.update);
routes.delete('/admin', AdminController.destroy);
routes.get('/admins', AdminController.list);

export default routes;
