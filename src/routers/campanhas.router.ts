import { Router } from 'express';
import multer from 'multer';
import fs from 'fs';
import CampanhasController from '../controllers/campanhas.controller';

const router = Router();

const upload = multer({
  dest: './uploads/',
});

const campanhaController = new CampanhasController();

router.post(
  '/upload', 
  upload.single('file'),
  campanhaController.createCampanhas.bind(campanhaController),
);

router.post('/sup', campanhaController.getCampanhasSup.bind(campanhaController));

router.get('/', campanhaController.getAllCampanhas.bind(campanhaController));

router.get('/download/:filename', (req, res) => {
  const { filename } = req.params;

  if (!filename.endsWith('.xlsx')) {
    res.status(400).send('O arquivo deve ter a extensão .xlsx!');
    return;
  }
  const diretorio = '/home/gustavoabreu/Documentos/dash/sd-022-a-project-trybesmith';
  const filePath = `${diretorio}/uploads/${filename}`;

  fs.access(filePath, (err) => {
    if (err) {
      res.status(404).send('Arquivo não encontrado!');
      return;
    }

    res.contentType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.sendFile(filePath);
  });
});

router.delete('/delete/', campanhaController.removeCampanhas.bind(campanhaController));

router.get('/uploads', (req, res) => {
  fs.readdir('./uploads', (err, files) => {
    if (err) {
      throw err;
    }
    res.json({ files });
  });
});

export default router;
