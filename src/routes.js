import { Router } from 'express';

import User from './app/models/User.js';


// import UserController from './app/controllers/UserController.js';
// import SessionController from './app/controllers/SessionController.js';
// import authMiddleware from './app/middlewares/auth.js';

const routes = new Router();



routes.post('/user', User.cadastraUser);
routes.put('/users/:id', User.alteraUsuario);
routes.get('/users/:id', User.getUsuarioId);
routes.get('/users', User.getUsuarioEmail);

// routes.post('/sessions', SessionController.store);

// routes.use(authMiddleware);

// routes.put('/users', UserController.update);

export default routes;