import { Router } from 'express';

import User from './app/models/User.js';

import authConfig from './confing';


const routes = new Router();

routes.use(authConfig);



routes.post('/user', User.cadastraUser);
routes.put('/users/:id', User.alteraUsuario);
routes.get('/users/:id', User.getUsuarioId);
// routes.post('/login', User.getUsuarioEmail);

routes.post('/orders', User.getOrderIdApproved);

// routes.post('/sessions', SessionController.store);

// routes.use(authMiddleware);

// routes.put('/users', UserController.update);

export default routes;