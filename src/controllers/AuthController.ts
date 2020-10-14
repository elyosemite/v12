import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import Admin from '../models/Admin';

class AuthController {
	async authenticateUser(req: Request, res: Response) {
		const repository = getRepository(User);
		const { email, password } = req.body;
		const secretKeyENV = 'secret'; // This key must come from your ENV variable.

		const user = await repository.findOne({ where: { email } });

		if(!user) {
			return res.sendStatus(404); // Not found
		}

		const isValidpassword = await bcrypt.compare(password, user.password);

		if(!isValidpassword) {
			return res.sendStatus(401); // UnAuthorized
		}

		const token = jwt.sign({ id: user.id }, secretKeyENV, { expiresIn: '1d' });

		delete user.password;

		return res.json({
			user,
			token
		});
	}

	async authenticateAdmin(req:Request, res: Response) {
		const repository = getRepository(Admin);
		const { idAdmin, password } = req.body;
		const secretKeyENV = 'admins_secret_key'; // This key must come from your ENV variable.

		const admin = await repository.findOne({ where: { idAdmin } });

		if(!admin) {
			return res.sendStatus(404); // Not found
		}

		const isValidpassword = await bcrypt.compare(password, admin.password);

		if(!isValidpassword) {
			return res.sendStatus(401) // Unauthorized
		}

		const token = jwt.sign({ id: admin.idAdmin }, secretKeyENV, { expiresIn: '2d' });

		delete admin.password;

		return res.json({
			admin,
			token
		});

	}
}

export default new AuthController;