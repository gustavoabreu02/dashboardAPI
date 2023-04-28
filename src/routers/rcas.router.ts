import { Router } from 'express';
import RcasController from '../controllers/rcas.controller';

const router = Router();

const rcasController = new RcasController();

/* router.get('/', productsController.getAllProducts.bind(productsController)); */
router.post('/codigo', rcasController.getRcaCodigo.bind(rcasController));

export default router;