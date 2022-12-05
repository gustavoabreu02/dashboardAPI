import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UsersService from '../services/users.service';
import 'dotenv/config';

export default class UserController {
  usersService = new UsersService();

  async createUser(req: Request, res: Response) {
    const userCreated = await this.usersService.createUser(req.body);

    if (!userCreated) {
      res.status(400).json('Usuário não criado');
    }

    const token = jwt.sign(
      { id: userCreated.id, username: userCreated.username },
      process.env.JWT_SECRET as string,

      { algorithm: 'HS256', expiresIn: '1d' },
    );
 
    res.status(201).json({ token });
  }
}