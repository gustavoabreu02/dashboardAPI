import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import 'dotenv/config';

export default class UserController {
  usersService = new UsersService();

  async createUser(req: Request, res: Response) {
    const { message, code } = await this.usersService.createUser(req.body);

    if (code) {
      res.status(code).json({ message });
    }

    res.status(201).json(message);
  }
}