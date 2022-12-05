import { Router } from 'express';
import UserController from '../controllers/users.controller';

const routerUsers = Router();

const usersController = new UserController();

routerUsers.post('/', usersController.createUser.bind(usersController));

export default routerUsers;