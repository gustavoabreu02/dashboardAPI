import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const loginRouter = Router();

const loginController = new LoginController();

/* loginRouter.post('/', loginController.login.bind(loginController)); */
loginRouter.post('/', loginController.login.bind(loginController));

export default loginRouter;