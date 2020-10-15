import * as express from 'express';

const routes = express.Router();

import UserController from './controllers/UserController';
import PetsController from './controllers/PetsController';

routes.post('/registerUser', UserController.register);
routes.get('/roleUser', UserController.role);

routes.post('/registerPet', PetsController.register);
routes.get('/listPet', PetsController.list);
routes.delete('/deletePet', PetsController.delete);

export default routes;