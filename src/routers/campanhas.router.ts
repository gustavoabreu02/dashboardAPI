import { Router } from 'express';
import upload from '../multer';
import CampanhasController from '../controllers/campanhas.controller';

const router = Router();

const campanhasController = new CampanhasController();

router.post(
  '/upload', 
  upload.single('file'),
  campanhasController.createCampanhas.bind(campanhasController),
);

export default router;