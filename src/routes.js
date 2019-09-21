import {Router} from 'express';

import UserController from './app/controllers/UserController';


import authMiddleware from './app/middlewares/auth';

const routes = new Router();


// Antes do AuthMiddlewares rotas sem autenticação
routes.get('/users', UserController.index);


routes.use(authMiddleware);  // Rotas após essa linha passa pelo middleware

// routes.get('/users', UserController.index);


export default routes;
