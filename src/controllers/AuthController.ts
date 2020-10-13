import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
	async authenticate(req: Request, res: Response) {
		const repository = getRepository(User);
		const { email, password } = req.body;
		const secretKeyENV = 'secret'; // This key must come from your ENV variable.

		const user = await repository.findOne({ where: { email } });

		if(!user) {
			return res.sendStatus(401); // UnAuthorized
		}

		const isValidpassword = await bcrypt.compare(password, user.password);

		if(!isValidpassword) {
			return res.sendStatus(401);
		}

		const token = jwt.sign({ id: user.id }, secretKeyENV, { expiresIn: '1d' });

		delete user.password;

		return res.json({
			user,
			token
		});
	}
}

export default new AuthController;